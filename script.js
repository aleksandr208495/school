const CONFIG = {
    sidebar_visible_count: 6,
    adminWindowPxWidth: 600,
    host: "",
};

$(document).ready(() => {
    showHide();
    sideMenu();
})

function showHideBlock(e) {
    e.preventDefault();

    const block = $(this).closest(".sh-block");
    block.toggleClass("sh-hidden");
    console.log("click")
}

function showHide() {
    $(document).on("click", ".sh-btn", showHideBlock);
    $(document).on("click", ".cls-btn", showHideBlock);
}
function sideMenu() {
    const container = $(".side-menu");
    if (!container || !container.length) {
        return false;
    }
    const itemsLimit = CONFIG.sidebar_visible_count;
    const labels = JSON.parse(
        $(".buttons_container", container).attr("data-buttons")
    );

    if (!container.length || $("a", container).length <= itemsLimit + 1) {
        return true;
    }

    init();

    $(document).on("click", ".sh-btn", () => {
        handleClick();
    });

    function init() {
        // для ограничения видимости используем функционал showHide
        $(`li:gt(${itemsLimit - 1})`, container).addClass("hideable");
        container.addClass("sh-block sh-hidden");
        container.append(
            `<button class="more sh-btn"><span>${labels[0]}</span></button>`
        );
        container.append("<div class=\"sh-arrow\"></div>");
    }

    function handleClick() {
        const btn = $(".sh-btn span", container);
        if (container.is(".sh-hidden")) {
            btn.text(labels[0]);
        } else {
            btn.text(labels[1]);
        }
    }
}