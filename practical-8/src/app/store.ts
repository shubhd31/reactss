import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logoutSlice from '../reducers/logoutSlice';
import practicalsReducer from '../reducers/PracticalSlice'
import registerSlice from '../reducers/registerSlice';



export const store = configureStore({
    reducer: {
        practicals: practicalsReducer,
        register: registerSlice,
        login: logoutSlice,
    },
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;