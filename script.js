$(document).ready(function() {
    $('.hamburguer').click(function(event) {
        event.preventDefault();
        if ($('.menuResponsive').hasClass('menuResponsiveClosed')) {
            $('.menuResponsive').removeClass('menuResponsiveClosed').addClass('menuResponsiveOpened');
        } else {
            $('.menuResponsive').removeClass('menuResponsiveOpened').addClass('menuResponsiveClosed');
        }
    });
});