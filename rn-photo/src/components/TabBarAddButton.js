import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { MainRoutes } from '../navigations/routes';
import { PRIMARY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabBarAddButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.navigate(MainRoutes.SELECT_PHOTOS)}>
                <MaterialCommunityIcons name="plus" size={25} color={WHITE} />
            </Pressable>
        </View>
    );
};

TabBarAddButton.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    button: {
        backgroundColor: PRIMARY.DEFAULT,
        borderRadius: 999,
        padding: 4,
    },
});
export default TabBarAddButton;
