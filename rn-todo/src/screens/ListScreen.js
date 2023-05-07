import { useState } from 'react';
import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ListScreen = ({ navigation, route }) => {
    const [todos, setTodos] = useState([
        { id: 1, task: '11', isDone: false },
        { id: 12, task: '11', isDone: false },
        { id: 13, task: '11', isDone: false },
        { id: 14, task: '11', isDone: false },
        { id: 15, task: '11', isDone: false },
        { id: 16, task: '11', isDone: false },
        { id: 17, task: '11', isDone: false },
        { id: 18, task: '11', isDone: false },
        { id: 19, task: '11', isDone: false },
        { id: 10, task: '11', isDone: false },
        { id: 21, task: '11', isDone: false },
        { id: 221, task: '11', isDone: false },
        { id: 231, task: '11', isDone: false },
    ]);
    const [isBottom, setIsBottom] = useState(false);
    const { bottom } = useSafeAreaInsets();

    let lastId = 0;
    const onInsert = (task) => {
        const id = getRandom(10000000, 99999999);
        // const id = nanoid();
        const newTask = { id, task, isDone: false };
        setTodos((prev) => [newTask, ...prev]);
    };
    return (
        <View style={{ paddingBottom: bottom + 10, flex: 1 }}>
            {todos.length ? <List data={todos} setIsBottom={setIsBottom} /> : <EmptyList />}
            <InputFAB onInsert={onInsert} isBottom={isBottom} />
        </View>
    );
};

export default ListScreen;
