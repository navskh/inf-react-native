import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import PhotoItem from './PhotoItem';

export const getLocalUri = async (id) => {
    return (await MediaLibrary.getAssetInfoAsync(id)).localUri;
};

const initListInfo = { endCursor: '', hasNextPage: true };
const ImagePicker = ({ togglePhoto, isSelectedPhoto }) => {
    const navigation = useNavigation();
    const [status, requestPermission] = MediaLibrary.usePermissions();

    const [photos, setPhotos] = useState([]);
    const listInfo = useRef(initListInfo);
    const [refreshing, setRefreshing] = useState(false);

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

    return (
        <View style={styles.container}>
            <FlatList
                key={'#'}
                style={styles.list}
                data={photos}
                renderItem={({ item }) => {
                    const isSelected = isSelectedPhoto(item);

                    return <PhotoItem item={item} togglePhoto={togglePhoto} isSelected={isSelectedPhoto(item)} />;
                }}
                numColumns={3}
                onEndReached={getPhotos}
                onEndReachedThreshold={0.3}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        </View>
    );
};

ImagePicker.propTypes = {
    togglePhoto: PropTypes.func,
    isSelectedPhoto: PropTypes.func,
};

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
    checkIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ImagePicker;
