import { configureStore } from '@reduxjs/toolkit';
import  a  from './slice/CounterSlice';

export const store = configureStore({
    reducer: {
        // user: userReducer,
        counterState: a,
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch