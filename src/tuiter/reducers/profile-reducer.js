import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Rainie",
    "lastName": "Zhao",
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
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;