import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { MAP_KEY } from '../env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, PRIMARY } from '../colors';
import { ref } from 'firebase/storage';
import { forwardRef } from 'react';

const LocationSearch = forwardRef(({ styles, onPress, isLoading, isSelected, iconVisible }, ref) => {
    return (
        <View style={[defaultStyles.container, styles?.container]}>
            <GooglePlacesAutocomplete
                ref={ref}
                placeholder="Location"
                query={{ key: MAP_KEY, language: 'ko' }}
                onPress={onPress}
                onFail={(e) => console.log('error', e)}
                styles={{ container: { flex: 0 }, textInput: { paddingLeft: iconVisible ? 30 : 10 } }}
                debounce={400}
                enablePoweredByContainer={false}
                textInputProps={{ editable: !isLoading }}
                fetchDetails={true}
            />
            {iconVisible && (
                <View style={[defaultStyles.icon, styles?.icon]}>
                    <MaterialCommunityIcons
                        name={'map-marker'}
                        size={20}
                        color={isSelected ? PRIMARY.DEFAULT : GRAY.DARK}
                    />
                </View>
            )}
        </View>
    );
});

LocationSearch.defaultProps = {
    iconVisible: true,
};

LocationSearch.propTypes = {
    styles: PropTypes.object,
    onPress: PropTypes.func,
    isLoading: PropTypes.bool,
    isSelected: PropTypes.bool,
    iconVisible: PropTypes.bool,
};

const defaultStyles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    container: {
        padding: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: GRAY.DEFAULT,
    },
});
export default LocationSearch;
