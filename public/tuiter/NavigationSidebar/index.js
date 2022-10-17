const NavigationSidebar = (active) => {
    return (`
            <div class="list-group mb-2">
                <i class="list-group-item fab fa-twitter"></i>
                <a class="list-group-item d-flex align-items-center ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html"> 
                    <i class="fa fa-home pe-2"></i>
                    <span class="d-none d-xl-block">Home</span>
                </a>
                <a class="list-group-item d-flex align-items-center ${active === 'explore' ? 'active' : ''}" href="../ExploreScreen/index.html">
                    <i class="fa fa-hashtag pe-2"></i>
                    <span class="d-none d-xl-block">Explore</span>
                </a>
                <a class="list-group-item d-flex align-items-center}" href="#">
                    <i class="fa fa-bell pe-2"></i>
                    <span class="d-none d-xl-block">Notifications</span>
                </a>
                <a class="list-group-item d-flex align-items-center}" href="#">
                    <i class="fa fa-envelope pe-2"></i>
                    <span class="d-none d-xl-block">Messages</span>
                </a>
                <a class="list-group-item d-flex align-items-center}" href="#">
                    <i class="fa fa-bookmark pe-2"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </a>
                <a class="list-group-item d-flex align-items-center}" href="#">
                    <i class="fa fa-list me-2"></i>
                    <span class="d-none d-xl-block">Lists</span>
                </a>
                <a class="list-group-item d-flex align-items-center}" href="#">
                    <i class="fa fa-user pe-2"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </a>
                <a class="list-group-item d-flex align-items-center}" href="#">
                    <i class="fa fa-ellipsis-h pe-2"></i>
                    <span class="d-none d-xl-block">More</span>
                </a>
            </div>

            <button class="btn btn-primary rounded-pill" style="width: 100%">Tweet</button>
            `);
}
export default NavigationSidebar;