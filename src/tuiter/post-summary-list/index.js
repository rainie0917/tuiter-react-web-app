import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuitsData)
  return(
    <ul className="list-group">
      {
        postsArray.map(post =>
          <PostSummaryItem
            key={post._id} 
            post={post}/> )
      }
    </ul>
  );
};
export default PostSummaryList;