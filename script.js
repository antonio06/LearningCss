$(document).ready(function() {
    $('.hamburguer').click(function(event) {
        event.preventDefault();
        $('.menuResponsive').css({transform: "translateX(0px)"});
    });
});