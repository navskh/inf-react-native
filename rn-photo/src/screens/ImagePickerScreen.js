import { Alert, StyleSheet, Text, View, FlatList, Pressable, useWindowDimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';

const initListInfo = {
    endCursor: '',
    hasNextPage: true,
};

const ImagePickerScreen = () => {
    const navigation = useNavigation();

    const [status, requestPermission] = MediaLibrary.usePermissions();

    useEffect(() => {
        (async () => {
            const { granted } = await requestPermission();
            if (!granted) {
                Alert.alert('사진접근 권한', '접근권한이 필요합니다.', [
                    { text: '확인', onPress: () => navigation.canGoBack() && navigation.goBack() },
                ]);
            }
        })();
    }, [navigation, requestPermission]);

    const width = useWindowDimensions().width / 3;

    const [photos, setPhotos] = useState([]);
    const listInfo = useRef(initListInfo);

    const [refreshing, setRefreshing] = useState(false);

    const getPhotos = useCallback(async () => {
        const options = {
            first: 30,
            sortBy: [MediaLibrary.SortBy.creationTime],
        };

        if (listInfo.current.endCursor) {
            options['after'] = listInfo.current.endCursor;
        }

        if (listInfo.current.hasNextPage) {
            const { assets, endCursor, hasNextPage, totalCount } = await MediaLibrary.getAssetsAsync(options);

            setPhotos((prev) => (options.after ? [...prev, ...assets] : assets));
            listInfo.current = { endCursor, hasNextPage };
        }
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        listInfo.current = initListInfo;
        await getPhotos();
        setRefreshing(false);
    };

    useEffect(() => {
        if (status?.granted) {
            getPhotos();
        }
    }, [status?.granted, getPhotos]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRight onPress={() => {}} />,
        });
    });

    console.log(photos.length);

    return (
        <View style={styles.container}>
            <FlatList
                key={'#'}
                style={styles.list}
                data={photos}
                renderItem={({ item }) => (
                    <Pressable style={{ width, height: width }}>
                        <Image source={{ uri: item.uri }} style={styles.photo} />
                    </Pressable>
                )}
                numColumns={3}
                onEndReached={getPhotos}
                onEndReachedThreshold={0.3}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        </View>
    );
};

ImagePickerScreen.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    list: {
        width: '100%',
    },
    photo: {
        width: '100%',
        height: '100%',
    },
});
export default ImagePickerScreen;
