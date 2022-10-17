import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = (post) => {
    return `
            <div class="list-group">
                ${posts.map((elem) => {
                    return PostSummaryItem(elem);
                })
                .join("")}
            </div>
            `;
};

export default PostSummaryList;