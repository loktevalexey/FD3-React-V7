import { configureStore } from '@reduxjs/toolkit';

import fruitsReducer from './fruitsSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
    reducer: {
        fruits: fruitsReducer,
        profile: profileReducer,
    },
})
