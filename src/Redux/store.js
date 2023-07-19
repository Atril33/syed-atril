import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './project/projectSlice';

const store = configureStore({

  reducer: {
    project: projectReducer,
  },
});

export default store;
