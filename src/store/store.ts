import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import book from '../assets/MyListCollection/Book.png';
interface Counter {
    count: number;
}

export interface Word {
    word: string;
    definition: string;
}

interface MyList {
    id: string;
    name: string;
    words: Word[];
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
            words: [
                {
                    word: 'hello',
                    definition: 'used when meeting or greeting someone',
                },
                {
                    word: 'absurd',
                    definition:
                        'stupid and unreasonable, or silly in a humorous way',
                },
                {
                    word: 'ironic',
                    definition:
                        'interesting, strange, or funny because of being very different from what you would usually expect',
                },
                {
                    word: 'abandon',
                    definition:
                        'to leave a place, thing, or person, usually for ever',
                },
                {
                    word: 'courage',
                    definition:
                        'the ability to do something that frightens one',
                },
                {
                    word: 'determined',
                    definition:
                        'having made a firm decision and being resolved not to change it',
                },
            ],
            image: book,
        },
        {
            id: uuidv4(),
            name: 'IELTS INTERMEDIATE',
            words: [
                {
                    word: 'what',
                    definition: 'used to ask for information about something',
                },
                {
                    word: 'vocabulary',
                    definition:
                        'the set of words known and used by a person or group',
                },
                { word: 'honor', definition: 'high respect or great esteem' },
                {
                    word: 'experience',
                    definition:
                        'practical contact with and observation of facts or events',
                },
                {
                    word: 'adventure',
                    definition:
                        'an unusual and exciting, typically hazardous, experience or activity',
                },
            ],
            image: book,
        },
        {
            id: uuidv4(),
            name: 'IELTS ADVANCED',
            words: [
                {
                    word: 'hello',
                    definition: 'used when meeting or greeting someone',
                },
                { word: 'say', definition: 'to express in words' },
                { word: 'speak', definition: 'to communicate in speech' },
                {
                    word: 'talk',
                    definition:
                        'to speak in order to give information or express ideas',
                },
                {
                    word: 'whisper',
                    definition:
                        "to speak very softly using one's breath without one's vocal cords, especially for the sake of privacy",
                },
                {
                    word: 'shout',
                    definition: 'to say something in a loud voice',
                },
            ],
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
            action: PayloadAction<{
                listId: string;
                word: string;
                definition: string;
            }>,
        ) {
            const { listId, word } = action.payload;
            const list = state.collections.find(
                (collection) => collection.id === listId,
            );
            if (list && !list.words.find((item) => item.word == word)) {
                list.words.push({ word: word, definition: '' });
            } else if (list && list.words.find((item) => item.word == word)) {
                list.words = list.words.filter((item) => item.word !== word);
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
