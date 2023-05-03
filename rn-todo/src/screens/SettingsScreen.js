import { StyleSheet, View, Text } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}> SettingsScreen</Text>
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
export default SettingsScreen;
