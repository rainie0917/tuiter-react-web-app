import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
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
                {tuit.liked ?
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))}
                        className="bi bi-heart-fill text-danger me-2"></i>
                    :
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: true,
                        likes: tuit.likes + 1
                    }))}
                        className="bi bi-heart me-2"></i>}
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div>
                {tuit.disliked ?
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    }))}
                        className="bi bi-hand-thumbs-down-fill me-2"></i>
                    :
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        disliked: true,
                        dislikes: tuit.dislikes + 1
                    }))}
                        className="bi bi-hand-thumbs-down me-2"></i>}
                <span className="ms-2">{tuit.dislikes}</span>
            </div>
            <a href="tuits-list.js"><i className="bi bi-share"></i></a>                              
        </div>
    );
}
export default TuitStats;
        