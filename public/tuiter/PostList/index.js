import PostItem from "./PostItem.js";
import posts from "./post.js";

const PostList = (post) => {
    return `
            <div class="list-group">
                ${posts.map((elem) => {
                    return PostItem(elem);
                })
                .join("")}
            </div>
            `;
};

export default PostList;