import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY } from '../colors';
import ListItem from './ListItem';

const Separator = () => {
    return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: GRAY.LIGHT,
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

const List = ({ data, setIsBottom, onDelete, onToggle }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItem item={item} onDelete={onDelete} onToggle={onToggle} />}
            keyExtractor={(item) => String(item.id)}
            windowSize={5}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={View}
            ListHeaderComponentStyle={{ height: 10 }}
            onScroll={({ nativeEvent: { contentSize, contentOffset, layoutMeasurement } }) => {
                const distance = contentSize.height - (contentOffset.y + layoutMeasurement.height);
                setIsBottom(!(distance > 20 || contentOffset.y === 0));
            }}
        />
    );
};

List.propTypes = {
    data: PropTypes.array,
    setIsBottom: PropTypes.func,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
};

export default List;
