import { Button, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useUserState } from '../contexts/UserContext';
import { signOut } from '../api/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, WHITE } from '../colors';

const ProfileScreen = () => {
    const [user, setUser] = useUserState();
    const { top } = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={styles.settingButton}>
                <Pressable
                    onPress={async () => {
                        signOut();
                        setUser({});
                    }}
                    hitSlop={10}
                >
                    <MaterialCommunityIcons name="logout" size={24} color={GRAY.DEFAULT} />
                </Pressable>
            </View>

            <View style={styles.profile}>
                <View style={[styles.photo, user.photoURL || { backgroundColor: GRAY.DEFAULT }]}>
                    <Image source={{ uri: user.photoURL }} style={styles.photo} />
                    <Pressable style={styles.editButton}>
                        <MaterialCommunityIcons name="pencil" size={24} color={WHITE} />
                    </Pressable>
                </View>
                <Text style={styles.nickname}> {user.displayName || 'nickname'}</Text>
            </View>
            <View style={styles.listContainer}></View>
        </View>
    );
};

ProfileScreen.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    settingButton: {
        paddingHorizontal: 20,
        alignItems: 'flex-end',
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: GRAY.DEFAULT,
        paddingVertical: 10,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: GRAY.DARK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nickname: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10,
    },
    listContainer: {
        flex: 1,
        backgroundColor: WHITE,
    },
});
export default ProfileScreen;
