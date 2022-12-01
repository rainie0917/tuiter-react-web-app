import React from "react";
import TuitStats from "./tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
 {
   tuit = {
    "_id": 123, 
    "topic": "Space", 
    "userName": "SpaceX",
    "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h",   
    "image": "spacex.jpeg",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "disliked": false,
    "dislikes": 0,
    "handle": "spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"},
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img width={50} className="float-end rounded-circle" src={`/images/${tuit.image}`} alt=""/>
        </div>
        <div className="col-10">
          <div>
            <label className="fw-bolder">{tuit.userName}</label> <i className="bi bi-patch-check-fill text-primary"></i> <label className="text-muted">@{tuit.handle} · {tuit.time}</label>
            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit}/>
        </div>
      </div>
    </li>
 );
};
export default TuitItem;