! function($) {
    "use strict";

    var App = function() {};

    //scroll
    App.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    // CollapseHide
    App.prototype.initCollapseHide = function() {
        $(document).on('click', '.navbar-collapse.show', function(e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide');
            }
        });
    },

    //Smooth
    App.prototype.initSmoothLink = function() {
        $('.navbar-nav a, .scroll_down a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    //Scrollspy
    App.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    //Typed
    App.prototype.initTextType = function() {
        $(".element").each(function() {
            var $this = $(this);
            $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                backDelay: 3000
            });
        });
    },

    //Work
    App.prototype.initWork = function() {
        $(window).on('load', function () {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click",function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    },

    //Magnificpop
    App.prototype.initMagnificPopup = function() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },

    //Client
    App.prototype.initTestimonial = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 7000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    //PRELOADER
    App.prototype.initPreloader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    // BACK TO TOP
    App.prototype.initBackToTop = function() {
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.back_top').fadeIn();
            } else {
                $('.back_top').fadeOut();
            }
        }); 
        $('.back_top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    // wavify Js
    App.prototype.initWave = function(){
        if($('#wave_img').length) {
            $('#wave_img').wavify({
                height: 100,
                bones: 3,
                amplitude: 50,
                color: '#fff',
                speed: .25
            });
        }
    }

    App.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initCollapseHide();
        this.initScrollspy();
        this.initTextType();
        this.initWork();
        this.initMagnificPopup();
        this.initPreloader();
        this.initTestimonial();
        this.initBackToTop();
        this.initWave();
    },
    //init
    $.App = new App, $.App.Constructor = App
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.App.init();
}(window.jQuery);
