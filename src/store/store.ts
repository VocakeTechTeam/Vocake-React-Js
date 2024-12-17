import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import book from '../assets/MyListCollection/Book.png';
interface Counter {
    count: number;
}

interface MyList {
    id: string;
    name: string;
    words: string[];
    image: string;
}

interface MyListCollection {
    collections: MyList[];
    userName: string;
}

const initialState: Counter = {
    count: 0,
};

const myListCollectionInitialState: MyListCollection = {
    collections: [
        {
            id: uuidv4(),
            name: 'IELTS BEGINNER',
            words: ['hello', 'absurd', 'ironic', 'abandon'],
            image: book,
        },
        {
            id: uuidv4(),
            name: 'IELTS BEGINNER',
            words: ['what', 'vocabulary', 'honor'],
            image: book,
        },
        {
            id: uuidv4(),
            name: 'IELTS BEGINNER',
            words: ['hello', 'say', 'speak', 'talk'],
            image: book,
        },
    ],
    userName: 'Thuong Bui',
};

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase() {},
        decrease() {},
    },
});

const MyListCollectionSlice = createSlice({
    name: 'MyListCollection',
    initialState: myListCollectionInitialState,
    reducers: {},
});

export const { increase, decrease } = CounterSlice.actions;
export const {} = MyListCollectionSlice.actions;
const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
        myListCollection: MyListCollectionSlice.reducer,
    },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
