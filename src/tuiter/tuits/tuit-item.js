import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
 {
   tuit = {
    "_id": 345, 
    "topic": "Energy",  
    "userName": "Tesla",
    "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
    "time": "4h",   
    "image": "tesla.jpeg",
    "liked": true,
    "replies": 115,
    "retuits": 189,
    "likes": 2236,
    "dislikes": 0,
    "handle": "tesla",
    "tuit": "Tesla Immersive, our multichannel audio upmixer, enables stereo content to be remixed in real time, optimizing the listening experience for our vehicles specifically"}
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