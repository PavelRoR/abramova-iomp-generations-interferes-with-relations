$(document).ready(function () {
    /* Якорь */
    $("a:not('.variant-footer-button'):not('.button-cost'):not('.footer-menu li a')").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
     /* Таймер */
     var clock;
     var futureDate = new Date("August 11, 2021 00:00 UTC+3");
     var currentDate = new Date();
     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
 
     if (diff < 0) {
         diff = 0;
         $('.button-cost').attr('href', 'https://shop.iomp.ru/?r=ordering/cart/as1&id=229&clean=true&lg=ru');
         $('.cost-full span').addClass('unbroken');
         $('.cost-sale,.cost-today,.timer').remove();
     }
 
     clock = $('.clock').FlipClock(diff, {
         clockFace: 'HourlyCounter',
         countdown: true,
         language: 'ru',
         callbacks: {
             stop: function () {
                $('.button-cost').attr('href', 'https://shop.iomp.ru/?r=ordering/cart/as1&id=229&clean=true&lg=ru');
                $('.cost-full span').addClass('unbroken');
                $('.cost-sale,.cost-today,.timer').remove();
             }
         },
     });
     $('.mobile-menu').on('click', function () {
        if (!$('.header-nav').hasClass('nav-active')) {
            $(this).css('position', 'fixed');
            $('.header-nav').addClass('nav-active');
            $('.mobile-menu-line-1,.mobile-menu-line-2,.mobile-menu-line-3').addClass('switched')
        } else {
            $(this).css('position', 'absolute');
            $('.header-nav').removeClass('nav-active')
            $('.mobile-menu-line-1,.mobile-menu-line-2,.mobile-menu-line-3').removeClass('switched')
        }
    })
});