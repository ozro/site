// Agency Theme JavaScript

/*jslint browser: true*/
/*global $, jQuery*/
(function ($) {
    "use strict"; // Start of use strict
    $(".navbar-brand").hide();

    $(window).bind("mousewheel mousedown DOMMouseScroll keyup", function () {$("html, body").stop(); });
    
    $(window).scroll(function () {    
    var x = $(window).scrollTop();
    if (x >= 100) {
        $(".navbar-brand").show();
    } else {
        $(".navbar-brand").hide();
    }})
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

}(jQuery)); // End of use strict
