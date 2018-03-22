var menuDown = false;

function menuDropDown() {
    var navListItems = $('.navList').children('.navListItem').not('.menuButton');
    for (var i = 0; i < navListItems.length; i++) {
        $(navListItems[i]).delay(i * 50).fadeIn(100);
    }
    menuDown = true;
}

function menuDropUp() {
    var navListItems = $('.navList').children('.navListItem').not('.menuButton');
    for (var i = (navListItems.length - 1); i >= 0; i--) {
        $(navListItems[i]).delay((navListItems.length * 50) - (i * 50)).fadeOut(100);
    }
    menuDown = false;
}

function menuToggle() {
    if (menuDown) {
        menuDropUp();
    } else {
        menuDropDown();
    }
}

window.addEventListener('load', function() {
    if ($(document).width() <= 500) {
        $('.menuButton').on('click', menuToggle);
        $('.navList').on('mouseleave', menuDropUp);
    }
});

window.addEventListener('resize', function() {
    if ($(document).width() <= 500) {
        $('.navList').children('.navListItem').not('.menuButton').hide();
        $('.menuButton').on('click', menuToggle);
        $('.navList').on('mouseleave', menuDropUp);
        menuDown = false;
    } else {
        menuDropDown();
        $('.menuButton').off();
        $('.navList').off();
    }
});
