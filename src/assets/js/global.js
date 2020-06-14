
$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        console.log(111)
//            console.log(winTop);
        if (winTop >= 5) {
            $('body').addClass('sticky-header');
        } else {
            $('body').removeClass('sticky-header');
            function show() {
                $('.logol').css({
                    "transform": "scaleX(0.95) scaleY(0.95)",
                    "transition": "transform  1s",
                    "-webkit-transition": "transform 1s",
                    "-moz-transition": "transform 1s;"
                });
            }

            setTimeout(show, 500);
            function removeshow() {
                $('.logol').css({
                    "transform": "scaleX(1.0) scaleY(1.0)",
                    "transition": "transform  1s",
                    "-webkit-transition": "transform 1s",
                    "-moz-transition": "transform 1s;"
                });
            }

            setTimeout(removeshow, 1500);
        }
        clearTimeout();
    });
});