import { StyleSheet, View, Text } from 'react-native';
import Button, { ButtonTypes } from './../components/Button';
import { useUserContext } from './../contexts/UserContext';

const SettingsScreen = () => {
    const { setUser } = useUserContext();
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="SIGNOUT"
                    onPress={() => {
                        setUser(null);
                    }}
                    buttonType={ButtonTypes.DANGER}
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
});
export default SettingsScreen;
