import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BLACK } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
        <Pressable hitSlop={10} onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={24} color={BLACK} />
        </Pressable>
    );
};

HeaderLeft.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
});
export default HeaderLeft;
