const WhoToFollowListItem = (who) => {
    return `
            <li class="list-group-item override2">
                <div class="d-flex">
                    <div class="me-2">
                        <div class="col">
                            <img class="rounded-circle" src="${who.avatarIcon}" width="48" height="48">
                        </div>
                    </div>
                    <div class="col">
                        <label class="wd-title">${who.userName}</label>
                        <i class="fas fa-circle"></i></br>
                        <label class="wd-title2">@${who.handle}</label>
                    </div>
                    <div class="align-self-center">
                        <button class="btn btn-primary override rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
            `;
};
export default WhoToFollowListItem;