import { configureStore } from '@reduxjs/toolkit';
import  a  from './slice/CounterSlice';
import onboardState from './slice/OnboardSlice';
import userState from './slice/UserSlice';

export const store = configureStore({
    reducer: {
        // user: userReducer,
        counterState: a,
        onboardState: onboardState,
        userState: userState
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch