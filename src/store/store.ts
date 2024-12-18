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

const MyListCollectionSlice = createSlice({
    name: 'MyListCollection',
    initialState: myListCollectionInitialState,
    reducers: {
        addWordToList(
            state,
            action: PayloadAction<{ listId: string; word: string }>,
        ) {
            const { listId, word } = action.payload;
            const list = state.collections.find(
                (collection) => collection.id === listId,
            );
            if (list && !list.words.includes(word)) {
                list.words.push(word);
            } else if (list && list.words.includes(word)) {
                list.words = list.words.filter((item) => item !== word);
            }
        },
    },
});

export const { addWordToList } = MyListCollectionSlice.actions;
const store = configureStore({
    reducer: {
        myListCollection: MyListCollectionSlice.reducer,
    },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
