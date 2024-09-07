window.setTimeout(function () {
  $(".loading").fadeOut(500);
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
}, 400);

$(document).ready(function () {
  $(window).load(function () {
    $(".mobile-inner-header-icon").click(function () {
      $(this).toggleClass(
        "mobile-inner-header-icon-click mobile-inner-header-icon-out"
      );
      $(".mobile-inner-nav").slideToggle(250);
    });
    $(".mobile-inner-nav li").each(function (index) {
      $(this).css({ "animation-delay": index / 10 + "s" });
    });
    $(".mobile-inner-nav li").click(function () {
      $(this).find("dl").slideToggle(200);
    });
  });
});

$(document).ready(function () {
  $(".section1 .content1 .title p").each(function (index) {
    $(this).css({ "animation-delay": index / 10 + "s" });
  });

  $(".section1 .content1 .dec p").each(function (index) {
    $(this).css({ "animation-delay": index / 4 + "s" });
  });

  $(".section2 .left>*").each(function (index) {
    $(this).css({ "animation-delay": index / 4 + "s" });
  });

  $(".section2 .left .list .item").each(function (index) {
    $(this).css({ "animation-delay": index / 4 + "s" });
  });
  $(".section3 .title p").each(function (index) {
    $(this).css({ "animation-delay": index / 4 + "s" });
  });

  // $('.titlemodel,.section4 .txt,.section9 .title').addClass('pulseAni')
  // $('.section1 .link a').addClass('pulseAni')
  // $('.section5 .content .dec').addClass('pulseAni')
  // $('.section8 .list .item .time').addClass('scrollAni5')
  // $('.section9 .con1 .tit,.section9 .con2 .item .num,.section10 .con .title').addClass('flashInAni')
  // $('.section9 .con2 .item .dec2').addClass('scrollAni6 ')
  // $('.section8 .list .item').addClass('wow zoomInDown')
  // $('.section7').addClass('wow zoomInUp')
  // $('.section6 .list').addClass('wow vanishIn')
  // $('.section6 .content1').addClass('wow zoomIn')
  // $('.section6 .btns,.section5 .btns a').addClass('wow fadeInUp')
  // $('.section1 .content,.section2').addClass('wow vanishIn')
  // $('.section4').addClass('wow swashIn')
  // $('.section3').addClass('wow vanishIn')
  // $('.section5#ani1 .content').addClass('wow openUpRightRetourn')
  // $('.section5#ani2 .content').addClass('wow swap')
  // $('.section5#ani3 .content').addClass('wow puffIn')
  // $('.section8 .con1.ui1').addClass('wow bounceInDown')
  // $('.section8 .con1.ui2').addClass('wow bounceInUp')
  // $('.section9 .con1').addClass('wow flipInX')
  // $('.section9 .con2 .item').addClass('wow flipInY')
  // $('.section10 .con').addClass('wow lightSpeedIn')
  // $('.section4 .list2 > *').addClass('wow rotateIn')
  // $('.footer .txt *,.movAni1,.section8 .list').addClass('wow fadeInUp')
  // $('.section9 .con2').addClass('wow spaceInUp')
  // $('.section1 .title1,.section1 .title2 p').addClass('wow fadeInUp')
  // $('.section1 .bg,.section3 .bg').addClass('wow sclani')
  // $('.section6 .right .bg2,.section5 .right .bg').addClass('wow sclani2')
  // $('.section1 .title1 img').addClass(' pulseAni')
  // $('.section1 .stitle img').addClass(' rotateAni')
  // $('.section1 .link a img').addClass(' swingAni')
  // $('.section2 .anis img.ani1').addClass(' pulseAni')
  // $('.section2 .anis img.ani2').addClass(' scrollAni2')
  // $('.section2 .title,.section3 .title,.section4 .title,.section5 .left .title,.section6 .left .title,.section7 .title').addClass('wow vanishIn')
  // $('.section5 .left .dec,.section5 .left .title2,.section2 .content .dec,.section1 .dec,.section3 .dec,.section4 .left .dec,.section4 .left .title2').addClass('wow lightSpeedIn')
  // $('.section2 .list').addClass('wow bounceInUp')
  // $('.section2 .more').addClass('wow swap')
  // $('.section3 .shing ').addClass('wow zoomIn')
  // $('.section3 .shing img ').addClass(' scrollAni3')
  // $('.section3 .item ').addClass('wow zoomInUp')
  // $('.section4 .left .dec2').addClass('wow flipInX')
  // $('.section4 .right .ani1').addClass('wow scrollAni3')
  // $('.section4 .right .ani2').addClass('wow scrollAni4')
  // $('.section4 .right .ani3').addClass('wow scrollAni5')
  // $('.section5 .left .list .item,.section7 .list a img').addClass('wow zoomIn')
  // $('.section5 .right .ani').addClass(' scrollAni6')
  // $('.section6 .left .list ul li .con').addClass('wow flipInX')
  // $('.section6 .right .bg1').addClass(' scrollAni3')
  // $('.section6 .right .ani').addClass(' tadaAni')
  // $('.section7 .infor .left').addClass(' wow slideInLeft')
  // $('.section7 .infor .right').addClass(' wow slideInRight')

  // $('.section1 .block1 .imgs2 img.img1,.section1 .block2 .right img.dm3,.section7 .wrap .list .bg img').addClass('shing')
  // $('.section1 .block1 .imgs1 img').addClass('xuanzhuan')
  // $('.section8 .content1 .txt a').addClass('tdAni')
  // $('.section1 .block1 .imgs2 img.img2,.section4 .wrap .list .bg img').addClass('scrollAni3')
  // $('.section1 .block1 .content .title img').addClass('scrollAni4')
  // $('.section3 .wrap .content .right .icon,.section6 .wrap .content .imgbox').addClass('swingAni')
  // $('.section1 .block1 .imgs1').addClass('swingAni2')
  // $('.section1 .block2 .right img.dm4,.section1 .block2 .right img.dm5,.section1 .block2 .right img.dm6').addClass('small_Big')
  // $('.section1 .block2 .right img.dm2').addClass('scrollAni5')
  // $('.aniImgs .ams2,.section1 .block2 .right img.dm1').addClass('scrollAni3')
  // $('.aniImgs .ams1').addClass('scrollAni4')
  // $('.aniImgs .ams3').addClass('scrollAni5')
  // $('.section3 .wrap .bl,.section6 .wrap .bl,.section8 .content1 .imgbox img').addClass('scrollAni6')
  // $('.section1 .block1 .content .link a img').addClass('tadaAni')
  // $('.section3 .wrap .content .left .imgbox img,.section8 .content2 .right .link img').addClass('pulseAni')
  // $('.section7 .wrap .list .bg').addClass('wow spaceInUp')
  // $('.section6 .wrap .content .imgbox img.ani2').addClass('swingAni2')
  // $('.section1 .block1 .content .title,.titlemodel').addClass('wow vanishIn')
  // $('.section1 .block1 .content .Explore').addClass('wow bounceInUp')
  // $('.section1 .block1 .imgs2').addClass('wow fadeInUp')
  // $('.section1 .block1 .content .copyTxt').addClass('wow fadeInDown')
  // $('.section1 .block2 .left').addClass('wow fadeInLeft')
  // $('.section1 .block2 .right').addClass('wow spaceInRight')
  // $('.section2 .list').addClass('wow spaceInUp')
  // $('.section2 .hd a').addClass('wow scrollAni3')
  // $('.section3 .wrap .content .left .imgbox').addClass('wow swashIn')
  // $('.section3 .wrap .content .right').addClass('wow tinRightIn')
  // $('.section4>*>*,.section8 .content2 .left,.section8 .content2 .right').addClass('wow boingInUp')
  // $('.section4 .wrap .list').addClass('wow spaceInDown')
  // $('.section5 .wrap .list .item').addClass('wow spaceInRight')
  // $('.star').addClass('sclani2')
  // $('.section5 .wrap .list .item:nth-child(1) a .icon img').addClass('pulseAni')
  // $('.section5 .wrap .list .item:nth-child(2) a .icon img').addClass('pfAni1')
  // $('.section5 .wrap .list .item:nth-child(3) a .icon img').addClass('scrollAni3')
  // $('.section5 .wrap .list .item:nth-child(4) a .icon img').addClass('scrollAni4')
  // $('.section5 .wrap .more').addClass('wow swap')
  // $('.section6 .wrap .content .left .dec').addClass('wow fadeInUp')
  // $('.section7 .wrap .list ul li').addClass('wow zoomIn')
  // $('.section8 .list ul li').addClass('wow fadeInUp')
  // $('.section8 .content1,.section8 .content2').addClass('wow zoomInUp')
  // $('.section8 .content3 a').addClass('wow zoomIn')

  $(".section3 .title p").addClass("wow vanishIn");
  $(
    ".section1 .content1 .title p,.section3 .title2,.section4 .title3"
  ).addClass("wow vanishIn");
  $(".section1 .content1 .dec p,.section3 .dec,.section3 .dec2").addClass(
    "wow fadeInUp"
  );
  $(".section1 .content1 .link").addClass("wow spaceInLeft");
  $(".section1 .content1 .join").addClass("wow spaceInRight");
  $(".section1 .content2 .imgbox").addClass("wow spaceInDown");
  $(".section1 .content2 .right").addClass("wow spaceInUp");
  $(".section2 .left>*").addClass("wow fadeInLeft");
  $(".section2 .right,.section3 .list").addClass("wow zoomIn");
  $(".section2 .left .list .item").addClass("wow jackInTheBox ");
  $(".section3 .lines").addClass("wow fadeInDown ");

  $(".section4 .list2").addClass("wow tinRightIn");

  $(".section1 .content2 .imgbox .im1").addClass("scrollAni4");
  $(".section1 .content2 .imgbox .im2").addClass("scrollAni3");
  $(".section2 .left .icon img").addClass("scrollAni3");
  $(".section2 .right .is1").addClass("shing");
  $(".section2 .right .is2").addClass("pfAni1");
  $(".section2 .right .is3").addClass("pfAni2");
  $(".section2 .left .list .item .ics img").addClass("heartbeatAni");
  $(".section3 .list .item").addClass("scrollAni6");
  $(".section3 .lines .its .dot").addClass("scrollAni3");
  $(".titimg").addClass("scrollAni3");

  var listswiper = new Swiper(".listswiper .swiper-container", {
    pagination: ".listswiper .swiper-pagination",
    paginationClickable: ".listswiper .swiper-pagination",
    nextButton: ".listswiper .swiper-button-next",
    prevButton: ".listswiper .swiper-button-prev",
    autoplay: false,
    autoplayDisableOnInteraction: false,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 0,

    onSlideChangeStart: function (swiper) {
      $(".section3 .lines .its").removeClass("current");
      $(".section3 .lines .its").eq(swiper.activeIndex).addClass("current");
    },
  });

  $(".section3 .lines .its").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
    var x = $(this).index();
    listswiper.slideTo(x, 500, false);
  });

  function height() {
    var sc = $(window).scrollTop();
    if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
  }
  height();
  $(window).scroll(function () {
    height();
  });

  $(".section1 .content1 .link a").hover(function () {
    $(this).toggleClass("animated tada");
  });
});
