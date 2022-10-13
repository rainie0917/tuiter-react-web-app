import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="d-flex align-items-center mb-2">
                <div class="rounded-pill input-group align-items-center me-3">
                    <i class="fa fa-search ms-3"></i>
                    <input class="input-group-text override" placeholder="Search Twitter">
                </div>
                <a href="explore-settings.html"><i class="fa fa-cog override fa-2x ms-2"></i></a>
            </div>

            <ul class="nav nav-tabs override mb-2">
                <li class="nav-item override">
                    <a class="nav-link override" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link override" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link override" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link override" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link override d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
            ${PostSummaryList()}
            `);
}
export default ExploreComponent;

