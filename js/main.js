window.addEventListener('load', function() {

    $('.menuButton').on('mouseover', function() {
        var navListItems = $('.navList').children('.navListItem').not('.menuButton');
        for (var i = 0; i < navListItems.length; i++) {
            $(navListItems[i]).delay(i * 50).fadeIn(100);
        }
    });

    $('.navList').on('mouseleave', function() {
        var navListItems = $('.navList').children('.navListItem').not('.menuButton');
        for (var i = (navListItems.length - 1); i >= 0; i--) {
            $(navListItems[i]).delay((navListItems.length * 50) - (i * 50)).fadeOut(100);
        }
    })
});
