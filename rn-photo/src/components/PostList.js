import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import usePosts from '../hooks/usePosts';
import { useEffect } from 'react';
import event, { EventTypes } from '../event';

const PostList = ({ isMine }) => {
    const { data, fetchNextPage, refetch, refetching, deletePost, updatePost } = usePosts(isMine);

    useEffect(() => {
        event.addListener(EventTypes.REFRESH, refetch);
        event.addListener(EventTypes.DELETE, deletePost);
        event.addListener(EventTypes.UPDATE, updatePost);

        return () => event.removeAllListeners();
    }, [refetch, deletePost]);

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <PostItem post={item} />}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.4}
            onRefresh={refetch}
            refreshing={refetching}
        />
    );
};

PostList.defaultProps = {
    isMine: false,
};

PostList.propTypes = {
    isMine: PropTypes.bool,
};

const styles = StyleSheet.create({
    seperator: {
        marginVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: GRAY.LIGHT,
    },
});
export default PostList;
