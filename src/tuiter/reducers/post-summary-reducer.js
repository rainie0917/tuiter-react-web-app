import {createSlice} from "@reduxjs/toolkit";
import postsSummary from './posts-summary.json';

const postsSummarySlice = createSlice({
    name: 'postSummary',
    initialState: postsSummary
});

export default postsSummarySlice.reducer;