import React from "react";

const PostSummaryItem = (
 {
   post = {
    "_id": 123,
    "topic": "Space",
    "image": "spacex.jpeg",
    "userName": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "handle": "spacex",
    }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{post.userName}  ·  {post.time}</div>
       <div className="fw-bolder">{post.topic}</div>
       <div>{post.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt=""/>
     </div>
   </div>
  </li>
 );
};
export default PostSummaryItem;