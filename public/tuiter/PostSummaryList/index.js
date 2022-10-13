import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = (post) => {
    return `
            <div class="row no-gutters p-0 mb-2">
                <div class="col-12 d-flex align-items-end">
                    <img class="img-fluid of wd-border-color" src="../../images/space-x-starship.webp" alt="...">
                    <h2 class="position-absolute wd-dark-gray ms-2 fw-bold">SpaceX's Starship</h2>
                </div>
            </div>

            <div class="list-group">
                ${posts.map((elem) => {
                    return PostSummaryItem(elem);
                })
                .join("")}
            </div>
            `;
};

export default PostSummaryList;