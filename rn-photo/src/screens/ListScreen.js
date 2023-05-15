import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { getPosts } from '../api/post';
import PostItem from './../components/PostItem';
import PostList from './../components/PostList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WHITE } from '../colors';
import usePosts from '../hooks/usePosts';

const ListScreen = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <PostList />
        </View>
    );
};

ListScreen.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
});
export default ListScreen;
