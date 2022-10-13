const PostSummaryItem = (posts) => {
    return `
            <li class="list-group-item override d-flex justify-content-between">
                <div class="me-2">
                    <label class="wd-topic">${posts.topic}</label>
                    <div>
                        <label class="wd-title">${posts.userName}</label>
                        <i class="fa fa-circle"></i>
                        <label class="wd-time"> - ${posts.time}</label>
                    </div>
                    <p class="wd-title">${posts.title} </p>
                </div>
                <div>
                    <img class="wd-image" src=${posts.image}/>
                </div>
            </li>
            `;
};

export default PostSummaryItem;