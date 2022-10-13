const NavigationSidebar = () => {
    return (`
            <div class="list-group mb-2 bg-dark">
                <i class="fab fa-twitter list-group-item pe-2 wd-text-color override"></i>
                <a class="list-group-item list-group-item-action d-flex align-items-center wd-text-color override" href="home.html">
                    <i class="fa fa-home pe-2"></i>
                    <span class="d-none d-xl-block">Home</span>
                </a>
                <a class="list-group-item override3 list-group-item-action d-flex align-items-center wd-text-color override" href="explore.html">
                    <i class="fa fa-hashtag pe-2"></i>
                    <span class="d-none d-xl-block">Explore</span>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center wd-text-color override" href="notifications.html">
                    <i class="fa fa-bell pe-2"></i>
                    <span class="d-none d-xl-block">Notifications</span>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center wd-text-color override" href="messages.html">
                    <i class="fa fa-envelope pe-2"></i>
                    <span class="d-none d-xl-block">Messages</span>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center override wd-text-color" href="bookmarks.html">
                    <i class="fa fa-bookmark pe-2"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center wd-text-color override" href="lists.html">
                    <i class="fa fa-list pe-2"></i>
                    <span class="d-none d-xl-block">Lists</span>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center wd-text-color override" href="profile.html">
                    <i class="fa fa-user pe-2"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center wd-text-color override" href="#">
                    <i class="fa fa-ellipsis-h pe-2"></i>
                    <span class="d-none d-xl-block">More</span>
                </a>
            </div>
            <button class="btn btn-primary override rounded-pill" style="width: 100%">Tweet</button>
            `);
}
export default NavigationSidebar;