import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes, { object } from 'prop-types';
import { BLACK, DANGER, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button, { ButtonTypes } from './Button';

export const AlertTypes = {
    SIGNOUT: 'SIGNOUT',
};

const DangerAlertProps = {
    SIGNOUT: { iconName: 'logout-variant', title: '로그아웃', message: '정말 로그아웃 하시겠습니까?' },
};

const DangerAlert = ({ visible, onConfirm, onClose, alertType }) => {
    const { iconName, title, message } = DangerAlertProps[alertType];
    return (
        <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
            <View style={styles.container}>
                <Pressable onPress={onClose} style={styles.background}></Pressable>

                <View style={styles.alert}>
                    <View style={styles.iconBackground}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name={iconName} size={35} color={WHITE} />
                        </View>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}> {message}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title={'취소'}
                            onPress={onClose}
                            styles={buttonStyle}
                            buttonType={ButtonTypes.CANCEL}
                        ></Button>
                        <Button
                            title={'확인'}
                            onPress={onConfirm}
                            styles={buttonStyle}
                            buttonType={ButtonTypes.DANGER}
                        ></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const buttonStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
    },
    button: {
        borderRadius: 20,
    },
});

DangerAlert.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    alertType: PropTypes.oneOf(Object.values(AlertTypes)),
};

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: BLACK,
        opacity: 0.3,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alert: {
        backgroundColor: WHITE,
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '80%',
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 50,
    },
    message: {
        fontSize: 16,
        marginVertical: 10,
    },
    iconBackground: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: 40,
        top: -40,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: DANGER.DEFAULT,
        width: 74,
        height: 74,
        borderRadius: 37,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
});
export default DangerAlert;
