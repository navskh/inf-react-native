import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ListScreen</Text>
        </View>
    );
};

ListScreen.propTypes = {};
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
export default ListScreen;
