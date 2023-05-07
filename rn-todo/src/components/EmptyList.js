import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY } from '../colors';

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/main.png')} style={styles.image} />
            <Text style={styles.title}>할 일을 추가해주세요</Text>
        </View>
    );
};

EmptyList.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
        color: PRIMARY.DARK,
    },
});
export default EmptyList;
