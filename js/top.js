// header
jQuery(document).ready(function($) {
  $("#btn-menu").click(function() {
    $("html").addClass("menu-on");
  });
  $("#btn-close").click(function() {
    $("html").removeClass("menu-on");
  });
});

// slider
(function($) {
  // Loading
  var tlLoading = new TimelineMax();
  tlLoading
    .to("#loading-logo", 0.3, { autoAlpha: 1 })
    .staggerFrom("#layer1 .path", 0.5, { opacity: 0 }, 0.2)
    .from("#layer2", 0.4, { xPercent: 100 })
    .to("#loading", 1, { width: 0 })
    .to("#loading-logo", 1, { xPercent: 300 }, "-=1")
    .to("#loading, #loading-logo", 0.1, { autoAlpha: 0 })

    .staggerFrom(".intro .img-logo", 1, { scale: 0 })
    .staggerFrom(".intro .img-paper", 1, { y: 200, opacity: 0 })
    .staggerFrom(".intro .img-pen", 1, { y: -200, opacity: 0 })
    .staggerFrom(".intro .img-laptop", 1, { y: -200, opacity: 0 })
    .staggerFrom(".intro .txt-label", 0.5, { opacity: 0 })
    .staggerFrom(".intro .txt-label", 1, { xPercent: -80 });

  // Main Slider
  var mainSwiper = new Swiper(".main-slider", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: true,
    mousewheel: true,
    parallax: true,
    speed: 1200,
    breakpoints: {
      767: {
        direction: "vertical"
      }
    }
  });

  // Slider2
  var childSwiper = new Swiper(".child-slider", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 0,
    mousewheel: true,
    speed: 800,
    loop: false,
    nested: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      }
    },
    on: {
      reachBeginning: function() {
        setTimeout(function() {
          mainSwiper.mousewheel.enable();
        }, 500);
      },
      reachEnd: function() {
        setTimeout(function() {
          mainSwiper.mousewheel.enable();
        }, 500);
      }
    }
  });

  var splithighlight = new SplitText(".highlight .tit", {
    type: "chars, words"
  });

  mainSwiper.on("slideChange", function() {
    if (mainSwiper.activeIndex == 1) {
      TweenMax.staggerFrom(
        ".details h2 span",
        1.2,
        { x: 100, opacity: 0 },
        0.5
      );
      TweenMax.from(".details .inner .txt", 1.2, {
        y: 30,
        opacity: 0,
        delay: 1.2,
        ease: Power2.easeInOut
      });
      TweenMax.from(".details .inner .btn-more", 1.2, {
        y: 30,
        opacity: 0,
        delay: 1.5,
        ease: Power2.easeInOut
      });
      $(".child-slider").hover(
        function() {
          mainSwiper.mousewheel.disable();
        },
        function() {
          mainSwiper.mousewheel.enable();
        }
      );
    } else if (mainSwiper.activeIndex == 2) {
      TweenMax.staggerFrom(
        ".highlight h2 span",
        1.2,
        { x: 100, opacity: 0 },
        0.5
      );
      TweenMax.from(".highlight .box-cont .txt", 1.2, {
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: Power2.easeInOut
      });
      TweenMax.fromTo(
        ".highlight .brand .item figure img",
        2,
        { xPercent: 0 },
        { xPercent: -5, ease: Power2.easeInOut }
      );
      TweenMax.staggerFrom(
        splithighlight.chars,
        0.5,
        { y: 30, opacity: 0, ease: Power2.easeOut },
        0.1
      );
    } else if (mainSwiper.activeIndex == 3) {
      TweenMax.from(".contact-left .txt", 1.2, {
        y: 30,
        opacity: 0,
        ease: Power2.easeInOut
      });
      TweenMax.staggerFrom(
        ".contact h2 span",
        1.2,
        { x: 100, opacity: 0 },
        0.5
      );
      TweenMax.staggerFrom(".contact-right p", 0.5, { y: 30, opacity: 0 }, 0.2);
    } else {
    }
  });

  // Menu
  $("#btn-aboutus").click(function() {
    mainSwiper.slideTo(3, 0, true);
    $("html").removeClass("menu-on");
  });

  if (window.location.href.indexOf("#aboutus") > -1) {
    mainSwiper.slideTo(3, 0, true);
    $("html").addClass("hide-loading");
  }
})(jQuery);

/*=======================================================
					Heightline
 =======================================================*/
jQuery(document).ready(function($) {
  $.fn.heightLine = function(options) {
    var container = $(this);
    function setHeight() {
      var winWlh = $(window).width();
      var maxHeight = 0;
      column = $(container);
      if (winWlh <= 0) {
        column.removeAttr("style");
      } else {
        column.css("height", "auto");
        column.each(function() {
          if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
          }
        });
        column.height(maxHeight);
      }
    }
    setHeight();
    $(window).resize(function() {
      setHeight();
    });
  };
});

$(window).load(function(e) {
  $(".lh").heightLine();
});
