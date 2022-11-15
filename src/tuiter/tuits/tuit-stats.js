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
            "disliked": false,
            "dislikes": 0,
        }
    }) => {
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-between me-5 mt-2">
            <div><a href="tuits-list.js"><i className="bi bi-chat"></i></a><span className="ms-2">{tuit.replies}</span></div> 
            <div><a href="tuits-list.js"><i className="bi bi-repeat"></i></a><span className="ms-2">{tuit.retuits}</span></div>
            <div>
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true,
                }))} className={`bi${tuit.liked === true ? "bi-heart-fill text-danger me-2" : "bi-heart me-2"}`}></i> 
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div>
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes === undefined ? 1 : tuit.dislikes + 1,
                    disliked: true,
                }))} className={`bi${tuit.disliked === true ? "bi-hand-thumbs-down-fill me-2" : "bi-hand-thumbs-down me-2"}`}></i> 
                <span className="ms-2">{tuit.dislikes === undefined ? 0 : tuit.dislikes}</span>
            </div>
            <a href="tuits-list.js"><i className="bi bi-share"></i></a>                              
        </div>
    );
}
export default TuitStats;
        