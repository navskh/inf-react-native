import { useEffect, useState } from 'react';
import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ListScreen = ({ navigation, route }) => {
    const [todos, setTodos] = useState([]);
    const [isBottom, setIsBottom] = useState(false);
    const { bottom } = useSafeAreaInsets();
    const { getItem, setItem } = useAsyncStorage('todos');

    const save = async (data) => {
        try {
            await setItem(JSON.stringify(data || '[]'));
            setTodos(data);
        } catch (error) {
            Alert.alert('저장 실패');
        }
    };
    const load = async () => {
        try {
            const data = await getItem();
            const todos = JSON.parse(data) || [];
            setTodos(todos);
        } catch (error) {
            Alert.alert('불러오기 실패');
        }
    };

    useEffect(() => {
        load();
    }, []);

    const onInsert = (task) => {
        const id = getRandom(10000000, 99999999);
        // const id = nanoid();
        const newTask = { id, task, isDone: false };
        // setTodos((prev) => [newTask, ...prev]);
        save([newTask, ...todos]);
    };

    const onDelete = (id) => {
        const newTodos = todos.filter((ele) => ele.id != id);
        save(newTodos);
    };

    const onToggle = (id) => {
        const newTodos = todos.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item));
        save(newTodos);
    };

    return (
        <View style={{ paddingBottom: bottom + 10, flex: 1 }}>
            {todos.length ? (
                <List data={todos} setIsBottom={setIsBottom} onDelete={onDelete} onToggle={onToggle} />
            ) : (
                <EmptyList />
            )}
            <InputFAB onInsert={onInsert} isBottom={isBottom} />
        </View>
    );
};

export default ListScreen;
