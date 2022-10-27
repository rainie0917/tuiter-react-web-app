import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "avatarIcon": "spacex.jpeg",
            "userName": "SpaceX",
            "time": "2h",
            "handle": "spacex",
            "tuitContent": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                <img width={50} className="float-end rounded-circle" src={`/images/${tuit.avatarIcon}`} alt=""/>
                </div>
                <div className="col-10">
                    <div>
                        <label className="fw-bolder">{tuit.userName}</label> <i className="bi bi-patch-check-fill text-primary"></i> <label className="text-muted">@{tuit.handle} · {tuit.time}</label>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div>{tuit.tuitContent}</div>
                    <div class="d-flex justify-content-between me-5 mt-2">
                        <div><i className="bi bi-chat"></i><span className="ms-2">{tuit.replies}</span></div> 
                        <div><i className="bi bi-repeat"></i><span className="ms-2">{tuit.retuits}</span></div>                   
                        <div>{tuit.liked? <i className="bi bi-heart-fill text-danger"></i>: <i className="bi bi-heart"></i>}
                            <span className="ms-2">{tuit.likes}</span>
                        </div> 
                        <i className="bi bi-share"></i>                                
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TuitItem;