import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "name": "Rainie Zhao",
    "handle": "rainiezhao",
    "profilePicture": "profile-pic.png",
    "bannerPicture": "banner.webp",
    "bio": "Foodie, Software Engineer",
    "website": "youtube.com/webdevtv",
    "location": "Seattle, WA",
    "dateOfBirth": "08/12/1994",
    "dateJoined": "09/2021",
    "followingCount": 3456,
    "followersCount": 7890
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return state = action.payload;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;