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

const List = ({ data }) => {
    console.log(data);
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item) => String(item.id)}
            windowSize={5}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={View}
            ListHeaderComponentStyle={{ height: 10 }}
        />
    );
};

List.propTypes = {
    data: PropTypes.array,
};

export default List;
