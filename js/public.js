// 头部导航
function GetCurStyle(controller) {
    switch (controller.toLowerCase()) {
        case "home1": $("#in01").addClass("active"); break;
        case "home2": $("#in02").addClass("active"); break;
        case "home3": $("#in03").addClass("active"); break;
        case "home4": $("#in04").addClass("active"); break;
        case "home5": $("#in05").addClass("active"); break;
        case "home6": $("#in06").addClass("active"); break;
        case "home7": $("#in07").addClass("active"); break;
        default: level1 = "";
    }
}


// 头部导航显示隐藏
$(document).ready(function () {
    if ($(window).width() >= 1200) {
        $('.header_nav_title').hover(function () {
            $(this).children('.header_nav_con').css('display', 'block');
        }, function () {
            $(this).children('.header_nav_con').css('display', 'none');
        });
    } else {
        $('.header_nav_title').click(function () {
            $(this).toggleClass('on');
            $(this).children('.header_nav_con').slideToggle('slow');
        });
    }

    // 导航打开
    $('.nav_open').click(function () {
        $('.header_con').addClass('in');
        $(".header_nav_text, .header_nav_list").animate({ left: '0px' }, 300);
        $(".header_nav_bg").fadeIn(300);
    });


    // 导航关闭
    $('.nav_close').click(function () {
        $('.header_con').removeClass('in');
        $(".header_nav_text, .header_nav_list").animate({ left: '-1000px' }, 300);
        $(".header_nav_bg").fadeOut(300);
    });

    // 点击背景关闭
    $('.header_nav_bg').click(function () {
        $('.header_con').removeClass('in');
        $(".header_nav_text, .header_nav_list").animate({ left: '-1000px' }, 300);
        $(".header_nav_bg").fadeOut(300);
    });
});


// header
$(window).scroll(function () {
    var s = $(window).scrollTop();
    if (s > 80) {
        $(".header").addClass("top");
    } else {
        $(".header").removeClass("top");
    }
});


// footer
$(function () {
    $('.footerbtn').click(function () {
        $(this).siblings('dd').slideToggle('slow');
        $(this).toggleClass('on');
    });
    $('.footerservice h3').click(function () {
        $(this).siblings('ul').children('li').slideToggle('slow');
        $(this).toggleClass('on');
    });
});


// 内页banner图高度
$(function () {
    if ($(window).innerWidth() > 1199) {
        $(".crumbs").css({ 'height': 450 + 'px' })
    } else if ($(window).innerWidth() <= 1199 && $(window).innerWidth() > 767) {
        $(".crumbs").css({ 'height': 350 + 'px' })
    } else if ($(window).innerWidth() <= 767 && $(window).innerWidth() > 480) {
        $(".crumbs").css({ 'height': 200 + 'px' })
    } else {
        $(".crumbs").css({ 'height': 120 + 'px' })
    };
});
$(window).resize(function () {
    if ($(window).innerWidth() > 1199) {
        $(".crumbs").css({ 'height': 450 + 'px' })
    } else if ($(window).innerWidth() <= 1199 && $(window).innerWidth() > 767) {
        $(".crumbs").css({ 'height': 350 + 'px' })
    } else if ($(window).innerWidth() <= 767 && $(window).innerWidth() > 480) {
        $(".crumbs").css({ 'height': 200 + 'px' })
    } else {
        $(".crumbs").css({ 'height': 120 + 'px' })
    };
});


// 内页导航显示隐藏
$(function () {
    $('.main_header_title').click(function () {
        $(this).siblings('.main_header_list').children('li').slideToggle('slow');
    });
    $('.main_header_list_icon').click(function () {
        $(this).parent().siblings().slideToggle('slow');
    });
});


