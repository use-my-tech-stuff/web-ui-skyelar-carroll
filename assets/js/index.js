$(document).ready(function () {
    // featured listings carousel
    $('.featured-products').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [,
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });



    $('.reviews-content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
