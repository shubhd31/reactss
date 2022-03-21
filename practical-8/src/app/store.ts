import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import practicalsReducer from '../components/Home/PracticalSlice'



export const store = configureStore({
    reducer: {
        practicals: practicalsReducer
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