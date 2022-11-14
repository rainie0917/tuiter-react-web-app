import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "liked": true,
            "replies": 115,
            "retuits": 189,
            "likes": 2236,
            "dislikes": 0,
        }
    }) => {
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-between me-5 mt-2">
            <div><a href="tuits-list.js"><i className="bi bi-chat"></i></a><span className="ms-2">{tuit.replies}</span></div> 
            <div><a href="tuits-list.js"><i className="bi bi-repeat"></i></a><span className="ms-2">{tuit.retuits}</span></div>
            <div>
              Likes: {tuit.likes}
              <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
            <div>
              Dislikes: {tuit.dislikes}
              <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down"></i>
            </div>
            <a href="tuits-list.js"><i className="bi bi-share"></i></a>                              
        </div>
    );
}
export default TuitStats;
        