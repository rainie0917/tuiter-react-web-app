import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const initialProfile = useSelector(state => state.profile);
    const [profile, setProfile] = useState(initialProfile)
    const dispatch = useDispatch();

    const updateProfileHandler = (event) => {
        dispatch(updateProfile({
          ...profile,
          name:profile.name,
          bio: profile.bio,
          location: profile.location,
          website: profile.website,
          dateOfBirth: profile.dateOfBirth}));
    }
    return (
        <>
            <Link to="/tuiter/profile">
                <i className="bi bi-x h3 text-black ms-2 me-2"></i>
            </Link>
            <span className="text-black fw-bold fs-4 ms-2">Edit Profile</span>
            <Link to="/tuiter/profile" className="btn btn-dark rounded-pill float-end"
                    onClick={(event) => updateProfileHandler(event)}>Save</Link>

            <div className="position-relative mt-2 mb-5">
                <img className="w-100" style={{"opacity": "0.6"}} src="/images/banner.webp" alt="..."/>
                <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"
                   style={{"left": "40%", "bottom": "40%", "background": "black", "opacity": "0.6"}}></i>
                <i className="position-absolute bi bi-x fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"
                   style={{"left": "52%", "bottom": "40%", "background": "black", "opacity": "0.6"}}></i>

                <div className="position-absolute rounded-circle"
                     style={{"height": "50%", "width": "25%", "left": "5%", "bottom": "-25%","background": "white"}}>
                </div>
                <img className="position-absolute rounded-circle"
                     style={{"height": "50%", "width": "25%", "left": "5%", "bottom": "-25%", "opacity": "0.6"}}
                     src="/images/profile-pic.png" alt="..."/>
                <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"
                   style={{"left": "15%", "bottom": "-10%", "background": "black", "opacity": "0.6"}}></i>
            </div>


            <form>
                <div className="form-group pt-4">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"
                           onChange={(e) => setProfile({...profile, name: e.target.value})}
                           value={profile.name}/>
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBio">Bio</label>
                    <textarea className="form-control" id="inputBio" placeholder="Bio"
                              onChange={(e) => setProfile({...profile, bio: e.target.value})}
                              value={profile.bio}/>
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputLocation">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Location"
                           onChange={(e) => setProfile({...profile, location: e.target.value})}
                           value={profile.location}
                    />
                </div>
                <div className="form-group pt-4">
                    <input type="text" className="form-control" id="inputWebsite" placeholder="Website"
                           onChange={(e) => setProfile({...profile, website: e.target.value})}
                           value={profile.website}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBirthday">Birth date</label>
                    <input type="date" className="form-control" id="inputBirthday" placeholder="DOB"
                           onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                           value={profile.dateOfBirth}
                    />
                </div>
            </form>

            <div className="mt-4">
                <a href="/tuiter/edit-profile"><i className="bi bi-chevron-right float-end h4 text-muted"></i></a>
                <p>Switch to professional</p>
            </div>

        </>
    )
}

export default EditProfileComponent;