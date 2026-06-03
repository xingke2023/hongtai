(function($) {

    "use strict";
    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            
           // $(this).prev('ul.dropdown-menu').slideToggle(500);
        });



    }
    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        $('.mobile-menu .menu-box').mCustomScrollbar();

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);


        //Hide / Show Submenu
        $('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {

            e.preventDefault();
            var $parentLi = $(this).parent('li.dropdown');
            var target = $parentLi.children('ul.dropdown-menu');

            if (target.is(':visible')) {
                $parentLi.removeClass('open');
                target.slideUp(500);
            } else {
                // 闂滈枆鍏朵粬鎵撻枊鐨勫瓙鑿滃柈
                $('.mobile-menu .navigation > li.dropdown').removeClass('open');
                $('.mobile-menu .navigation > li.dropdown > ul.dropdown-menu').slideUp(500);
                
                // 鎵撻枊鐣跺墠瀛愯彍鍠�
                $parentLi.addClass('open');
                target.slideDown(500);
            }
        });

        // 铏曠悊涓夌礆鑿滃柈
        $('.mobile-menu .navigation li>ul>li .dropdown-btn').on('click', function(e) {
            e.preventDefault();
            var $parentLi = $(this).parent('li');
            var target = $parentLi.children('.sc-dropdown');

            if (target.is(':visible')) {
                $parentLi.removeClass('open');
                target.slideUp(500);
            } else {
                // 闂滈枆鍚岀礆鍏朵粬鎵撻枊鐨勫瓙鑿滃柈
                $parentLi.siblings('li').removeClass('open');
                $parentLi.siblings('li').children('.sc-dropdown').slideUp(500);
                
                // 鎵撻枊鐣跺墠瀛愯彍鍠�
                $parentLi.addClass('open');
                target.slideDown(500);
            }
        });
        


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').toggleClass('mobile-menu-visible');
            //$('.mobile-menu .navigation > li').toggleClass('open');
            //$('.mobile-menu .navigation > li > ul').slideUp(0);

        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
            //$('.mobile-menu .navigation > li').removeClass('open');
            //$('.mobile-menu .navigation > li > ul').slideUp(0);
        });

        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $('body').removeClass('mobile-menu-visible');
               // $('.mobile-menu .navigation > li').removeClass('open');
                //$('.mobile-menu .navigation > li > ul').slideUp(0);
            }
        });

    }
})(window.jQuery);