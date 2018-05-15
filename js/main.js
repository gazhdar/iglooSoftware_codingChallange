// Shows the banner at the given bannerNumber index
function showBanner(bannerNumber) {
    var i;
    var banners = document.getElementsByClassName("banners");
    var buttons = document.getElementsByClassName("bannerButton");
    // Hide all banners
    for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    // Make all buttons unselected
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" selected", "");
    }
    // Show proper banner
    banners[bannerNumber - 1].style.display = "block";
    // Select proper button
    buttons[bannerNumber - 1].className += " selected";
}

// Opens the mobile navigation menu
function openNav() {
    $('.hamburger_menu, .bannerContainer, .storiesContainer, footer').animate({
        marginLeft: "250px"
    });
    $('#mobile_menu').animate({
        marginLeft: "0"
    });
}

// Closes the mobile navigation menu
function closeNav() {
    $('.hamburger_menu, .bannerContainer, .storiesContainer, footer').animate({
        marginLeft: "0"
    });
    $('#mobile_menu').animate({
        marginLeft: "-250px"
    });
}

$(document).ready(function () {
    // Set initial banner
    var currentBannerNumber = 1;
    showBanner(currentBannerNumber);
    $('ul li a').click(function () { $('li a').removeClass("active"); $(this).addClass("active"); });
    
    // Task to switch banner image every 2 seconds
    setInterval(function () {
        if (currentBannerNumber === 4) {
            currentBannerNumber = 1;
        }
        showBanner(currentBannerNumber++)
    }, 2000);
});