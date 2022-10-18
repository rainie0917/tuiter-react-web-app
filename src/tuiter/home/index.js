import React from "react";
import PostList from "../post-list";
import "./index.css";
const HomeComponent = () => {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <a className="nav-link active" href="#">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">News</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Sports</a>
       </li>
       <li className="nav-item">
        <a className="nav-link d-none d-md-block" href="#">Entertainment</a>
       </li>
     </ul>
     <PostList/>
   </>
 );
};
export default HomeComponent;