import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as Crypto from 'expo-crypto';
import * as FileSystem from 'expo-file-system';

const FastImage = ({ source, ...props }) => {
    const [uri, setUri] = useState(source.uri);

    useEffect(() => {
        (async () => {
            try {
                const hashed = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, source.uri);
                const fileSystemUri = `${FileSystem.cacheDirectory}${hashed}`;

                const metadata = await FileSystem.getInfoAsync(fileSystemUri);
                if (!metadata.exists) {
                    await FileSystem.downloadAsync(source.uri, fileSystemUri);
                }
                setUri(fileSystemUri);
            } catch (error) {
                setUri(source.uri);
            }
        })();
    }, [source.uri]);

    return <Image source={{ uri }} {...props} />;
};

FastImage.propTypes = {
    source: PropTypes.object.isRequired,
};

export default FastImage;
