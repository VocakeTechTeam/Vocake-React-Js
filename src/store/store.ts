import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ** 1. Async Action (Optional) Example **
export const fetchCounter = createAsyncThunk<number, void>(
    'counter/fetchCounter',
    async () => {
        // Simulate an API call (You can replace this with an actual API call)
        const response = await new Promise<{ value: number }>((resolve) =>
            setTimeout(() => resolve({ value: 10 }), 1000),
        );
        return response.value;
    },
);

// ** 2. Counter Slice Definition **

// Define the type of the slice state
interface CounterState {
    value: number;
    loading: boolean;
}

// Initial state for the counter
const initialState: CounterState = {
    value: 0,
    loading: false,
};

// Create the slice with actions and reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        setCounter: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCounter.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCounter.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(fetchCounter.rejected, (state) => {
                state.loading = false;
            });
    },
});

// Export actions
export const { increment, decrement, reset, setCounter } = counterSlice.actions;

// ** 3. Store Configuration **

// Create and configure the Redux store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

// ** 4. Types for Store & Dispatch **
// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
