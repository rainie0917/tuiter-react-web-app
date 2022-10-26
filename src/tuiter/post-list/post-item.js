import React from "react";

const PostItem = (
    {
        post = {
            "profilePic": "spacex.webp", 
            "userName": "Elon Musk",
            "handle": "elonmusk", "time": "23h", 
            "title": "Amazing show about <a href='#'>@Inspiration4x</a> mission",
            "titleLink": "", 
            "image": "inspiration4x.png",
            "postTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "detail": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civillian orbital spaice ...",
            "link": "🔗 netflix.com", 
            "comment": "4.2k", 
            "retweet": "3.5k", 
            "like": "37.5k",
        }
    }
) => {
    return(
    <li class="list-group-item">
        <div className="row">
            <div className="col-1">
                <img width={48}  height={48} className="rounded-circle" src={`/images/${post.profilePic}`} alt=""/>
            </div>
            <div className="col-11">
                <div className="ms-3 me-3">
                    <div><label className="fw-bolder">{post.userName}</label> <i className="bi bi-patch-check-fill text-primary"></i> <label className="text-muted">@{post.handle} - {post.time}</label>
                        <span className="float-end text-muted"><i className="bi bi-three-dots text-muted"></i></span>
                    </div>
                    <div>{post.title} <a href="trib.al/nx2Gfaq">{post.titleLink}</a></div>
                    <div className="mt-2 border wd-rounded">
                        <div className="rounded-3 row"><img className="wd-rounded-top" src={`/images/${post.image}`} alt=""/></div>
                        <div className="ms-3 me-3">
                            <label className="mt-2 fw-bolder">{post.postTitle}</label>
                            <p>{post.detail}<br/>{post.link}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between me-5 mt-2">
                        <div><button className="border-0 bg-white"> <i className="bi bi-chat me-2 text-muted"></i></button><span className="ms-2 fw-thin text-muted">{post.comment}</span></div> 
                        <div><button className="border-0 bg-white"> <i className="bi bi-repeat me-2 text-muted"></i></button><span className="ms-2 fw-thin text-muted">{post.retweet}</span></div>                   
                        <div><button className="border-0 bg-white"> <i className="bi bi-heart me-2 text-muted"></i></button><span className="ms-2 fw-thin text-muted">{post.like}</span></div> 
                        <button className="border-0 bg-white"> <i className="bi bi-upload me-2 text-muted"></i></button>                                                      
                    </div>
                </div>
            </div>
        </div>
    </li>
    );
};
export default PostItem;