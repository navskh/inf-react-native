import { Button, StyleSheet, View, Text } from 'react-native';

const ListScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>ListScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListScreen;
