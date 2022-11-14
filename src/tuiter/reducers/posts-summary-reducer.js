import {createSlice} from "@reduxjs/toolkit";
import postsSummary from '../data/tuits.json';

const postsSummarySlice = createSlice({
    name: 'postSummary',
    initialState: postsSummary
});

export default postsSummarySlice.reducer;