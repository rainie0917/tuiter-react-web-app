import {createSlice} from "@reduxjs/toolkit";
import postsSummary from '../data/post-summary.json';

const postsSummarySlice = createSlice({
    name: 'postsSummary',
    initialState: postsSummary
});

export default postsSummarySlice.reducer;