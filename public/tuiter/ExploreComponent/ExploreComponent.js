import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="d-flex mb-2">
                <div class="input-group rounded-pill bg-white align-items-center me-3">
                    <i class="fa fa-search ms-3"></i>
                    <input class="form-control rounded-pill" placeholder="Search Twitter">
                </div>
                <a href="explore-settings.html"><i class="fa fa-cog fa-2x ms-2"></i></a>
            </div>

            <ul class="nav nav-pills mb-2">
                <li class="nav-item override">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
            
            <div class="row no-gutters mb-2 d-flex align-items-end">
                <img class="img-fluid of" src="../../images/space-x-starship.webp">
                <label class="position-absolute my-100 ms-2 fw-bold wd-dark-gray h2">SpaceX's Starship</label>
            </div>

            ${PostSummaryList()}
            `);
}
export default ExploreComponent;

