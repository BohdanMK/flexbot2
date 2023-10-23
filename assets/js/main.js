$(function () {

    function myFunction() {
        $('.block__title-list').addClass('overflow-hidden');
        $('.content__title--second').removeClass('content__title--hidden');
        $('.block__text-list').addClass('max-height');
        $('.content__text--hidden').addClass('showed');
      }

      setTimeout(myFunction, 1600);

    // $(document).on('click', '.start-screen__btn', function(){
    //     $('.start-screen').addClass('hidden');
    //     $('.main').addClass('showed');

    //     $('.sidebar__list').addClass('showed');
    //     $('.content__title--firsth').addClass('visible');
    //     $('.content__text--firsth').addClass('visible');

    //     setTimeout(function() {
    //         $('.content__titles').addClass('showed');
    //         $('.content__texts').addClass('showed');
    //     }, 1900);



    // });

    if ($(window).width() < 991) {
        new SimpleBar($('.content__prices-list')[0]);
        console.log(1);
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 10) {
            $('.content__image-border').css('opacity', '1');
            $('.content__images').css('transform', 'rotate(-35deg)');
            $('.main__wrapper-border').addClass('visible');
            $('.content__title--second').css('transform', 'translateY(-100%)');
            $('.content__title--firsth').css('transform', 'translateY(-100%)');
            $('.content__text--firsth').css('transform', 'translateY(-100%)');
            $('.content__text--second').css('transform', 'translateY(-100%)');
        } else {
            $('.content__image-border').css('opacity', '0');
            $('.content__images').css('transform', 'rotate(0deg)');
            $('.main__wrapper-border').removeClass('visible');
            $('.content__title--second').css('transform', 'translateY(0%)');
            $('.content__title--firsth').css('transform', 'translateY(0)');
            $('.content__text--firsth').css('transform', 'translateY(0%)');
            $('.content__text--second').css('transform', 'translateY(0%)');
        }
    });


    setTimeout(function() {
        $('.start-screen').addClass('hidden');
        // $('.main').addClass('showed');

        $('.sidebar__list').addClass('showed');
        $('.content__title--firsth').addClass('visible');
        $('.content__text--firsth').addClass('visible');

        setTimeout(function() {
            $('.content__titles').addClass('showed');
            $('.content__texts').addClass('showed');
        }, 1900);

    }, 100);

    var counter = 1;
    var step = 24; // Крок зміни translateY
    var minValue = -120; // Мінімальне значення
    var currentValue = 0; // Початкове значення
    var currentWidth = parseFloat($('.content__progress-bg').css('width'));


    console.log(currentWidth);

    $('.content__button--next').click(function() {
        if (currentValue > minValue) {
            currentValue -= step;
            currentWidth += 16.66;
            console.log(currentWidth);

            updateTransform();
            counter++;
            console.log(counter);
            updateWidth(currentWidth);
        }
    });

    $('.content__button--prev').click(function() {
        if (currentValue < 0) {
            currentValue += step;
            currentWidth -= 16.66;
            console.log(currentWidth);


            updateTransform();
            counter--;
            console.log(counter);
            updateWidth(currentWidth);
        }
    });

    function updateTransform() {
        $('.content__button--prev-list').css('transform', `translateY(${currentValue}px)`);
    };

    function updateWidth(width) {
        $('.content__progress-bg').css('width', width + '%');
    }


    // listen value of counter add make animations

    $('.content__button--next, .content__button--prev').click(
        function changeSlide () {
        if(counter == 1) {
            $('.content__title--firsth').css({
                'transform': 'translateY(0)'
            });
            $('.content__title--second').css({
                'transform': 'translateY(0)'
            });

            $('.content__images').css({
                'transform': 'rotate(0)'
            });

            $('.content__images svg').css({
                'opacity': '0'
            });

            $('.content__text--firsth').css({
                'transform': 'translateY(0%)'
            });

            $('.content__text--second').css({
                'transform': 'translateY(0%)'
            });

            $('.main__wrapper-border').removeClass('visible');
            $('.main__wrapper').removeClass('showed');


        };
        if(counter == 2) {
            $('.content__title--firsth').css({
                'transform': 'translateY(-100%)'
            });
            $('.content__title--second').css({
                'transform': 'translateY(-100%)'
            });

            $('.content__images').css({
                'transform': 'rotate(-35deg)'
            });

            $('.content__images svg').css({
                'opacity': '1'
            });

            $('.content__text--firsth').css({
                'transform': 'translateY(-100%)'
            });

            $('.content__text--second').css({
                'transform': 'translateY(-100%)'
            });

            setTimeout(function() {
                $('.main__wrapper-border').addClass('visible');
            }, 900);

            $('.main__wrapper').addClass('showed');


            $('.content__title--third').css({
                'transform': 'translateY(0)'
            });

            $('.content__text--third').css({
                'transform': 'translateY(0)'
            });

            $('.content__images').removeClass('hidden');

            $('.content__prices').removeClass('visible');
            $('.content__prices-list').removeClass('visible');


        };
        if(counter == 3) {
            $('.content__title--third').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__title--second').css({
                'transform': 'translateY(-200%)'
            });


            $('.content__text--third').css({
                'transform': 'translateY(-100%)'
            });
            $('.content__text--second').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__text--fourth').css({
                'transform': 'translateY(0)'
            });

            $('.content__images').addClass('hidden');
            $('.content__prices').addClass('visible');
            $('.content__prices-list').addClass('visible');
            $('.content__prices').css({
                'transform': 'translate(-60%, -95%)'
            });



            $('.content__title--fourth').css({
                'transform': 'translateY(0)'
            });
            $('.content__pros').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__pros').removeClass('visible');

        };
        if(counter == 4) {


            $('.content__title--third').css({
                'transform': 'translateY(-300%)'
            });

            $('.content__text--third').css({
                'transform': 'translateY(-200%)'
            });



            $('.content__prices').removeClass('visible');
            $('.content__prices').css({
                'transform': 'translate(60%, -95%)'
            });

            $('.content__title--fourth').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__text--fourth').css({
                'transform': 'translateY(-100%)'
            });
            $('.content__pros').addClass('visible');
            $('.content__pros').css({
                'transform': 'translateY(-100%)'
            });

            /*content fifth*/

            $('.content__title--fifth').css({
                'transform': 'translateY(0)'
            });
            $('.content__text--fifth').css({
                'transform': 'translateY(0)'
            });
            $('.content__video-block').removeClass('visible');
        };
        if(counter == 5) {
            $('.content__title--fourth').css({
                'transform': 'translateY(-300%)'
            });
            $('.content__text--fourth').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__pros').css({
                'transform': 'translateY(200%)'
            });

            /*content fifth*/

            $('.content__title--fifth').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__text--fifth').css({
                'transform': 'translateY(-100%)'
            });
            $('.content__video-block').addClass('visible');

            /*content sixth*/

            $('.content__title--sixth').css({
                'transform': 'translateY(0%)'
            });
            $('.content__text--sixth').css({
                'transform': 'translateY(0%)'
            });
            $('.content__benefits').removeClass('visible');
        };
        if(counter == 6) {
            /*content fifth*/

            $('.content__title--fifth').css({
                'transform': 'translateY(-300%)'
            });
            $('.content__text--fifth').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__video-block').removeClass('visible');

            /*content sixth*/

            $('.content__title--sixth').css({
                'transform': 'translateY(-200%)'
            });
            $('.content__text--sixth').css({
                'transform': 'translateY(-100%)'
            });
            $('.content__benefits').addClass('visible');
        };
        }
    );

    /*pop-up*/

    $('.burger__btn').on('click', function(){
        $(this).toggleClass('cliked');
        $('body').toggleClass('hidden');
        $('.pop-up__bg').toggleClass('visible');
        $('.sign-up__pop-up').toggleClass('visible');
    });

    /*remove pop-up after click by bg*/

    $('.pop-up__bg').on('click', function(){
        $(this).removeClass('visible');
        $('body').removeClass('hidden');
        $('.burger__btn').removeClass('cliked');
        $('.sign-up__pop-up').removeClass('visible');
    });

});