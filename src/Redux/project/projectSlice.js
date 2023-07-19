import { createSlice } from '@reduxjs/toolkit';
import data from '../../Components/API/Project.json';

const initialState = {
  projectsData: data
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {}
});

export default projectSlice.reducer;
