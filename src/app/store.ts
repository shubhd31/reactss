import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { api } from '../Services/getUsersAPI';

export const store = configureStore({

    reducer: {
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

