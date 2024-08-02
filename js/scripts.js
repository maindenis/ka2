$(document).ready(function() {

  var scrollPos = 0;
  $('.wrapper').scroll(function() {
    var st = $(this).scrollTop();
    if (st > scrollPos){
    console.log("вниз");
  } else {
    console.log("up");
  }
    scrollPos = st;
  });

   (function($){
        $(window).on("load",function(){            
          var start = 0;
          var end = 0;
            // var last_scroll = 0;
            $('body').mCustomScrollbar({
              axis:"y",
              scrollInertia:300,
              contentTouchScroll:50,
              callbacks:{
                // whileScrolling: function(){
                //   console.log("Scrolling");
                // },
              // callbacks:{
                onScrollStart: function(){
                  // console.log("start  " + parseInt($('body .mCSB_container').css('top')));
                  // start = parseInt($('body .mCSB_container').css('top'));
                  // if(start <= 0) {
                  //   $(".wrapper").addClass("bottom");
                  // }
                  // console.log("onScrollStart");
                  // var last_scroll = 0;
                  // bottomScrollCoord = $(".wrapper").scrollTop() + $(window).height();
                  // bottomCoord = $(".content").scrollTop() + $(window).height();
                  // var scrollPos = 0;
                  // var st = $(".content").scrollTop();
                  // if (st > scrollPos){
                  // console.log("вниз");
                  // } else {
                  // console.log("up");
                  // }
                  // scrollPos = st;                
                  // wrapper = $(".wrapper");
                  // if(wrapper.scrollY > last_scroll){
                    // $(".wrapper").addClass("bottom");
                  // }else {
                    // $(".wrapper").removeClass("bottom");
                  // }
                  // last_scroll = window.scrollY;
                },
                onScroll: function(){
                  end = parseInt($('body .mCSB_container').css('top'));
                  console.log("end  " + parseInt($('body .mCSB_container').css('top')));
                },
                whileScrolling: function(){
                  console.log("start  " + parseInt($('body .mCSB_container').css('top')));
                  start = parseInt($('body .mCSB_container').css('top'));
                  setTimeout(function() {
                    if(start < end) {
                      $(".wrapper").addClass("bottom");
                    } else {
                      $(".wrapper").removeClass("bottom");
                    }
                    console.log(start +"  "+ end);
                  }, 200);
                }
              }
            });
        });
    })(jQuery);

    // var last_scroll = 0;
    // var wrapper = $(".wrapper");
    // window.onscroll = function(){
    //     bottomScrollCoord = $(document).scrollTop() + $(window).height();
    //     bottomCoord = $(document).scrollTop() + $(window).height();
    //     setTimeout(function() {
    //     if($(document).scrollTop() + $(window).height() <= $(document).outerHeight() - $(".footer_section").height() ) {
    //         if(window.scrollY > last_scroll){
    //             $(".wrapper").addClass("bottom");
    //           }
    //           if(window.scrollY< last_scroll ){
    //             $(".wrapper").removeClass("bottom");
    //           }
    //           last_scroll = window.scrollY;
    //       } else {
    //             $(".wrapper").addClass("bottom");
    //       }
    //       }, 500);
    // }

  //   jQuery('.wrapper').scrollbar({
  //     "onScroll": function(y, x){
  //         if(y.scroll == y.maxScroll){
  //             console.log('Scrolled to bottom');
  //           $(".wrapper").addClass("bottom");
  //         } else {
  //           $(".wrapper").removeClass("bottom");
  //         }
  //     }
  // });

  // $(".wrapper").floatingScroll({
  //   orientation: "vertical"
  // });

    // var last_scroll = 0;
    // var scrollPos = 0;
    // $(".wrapper").scroll(function() {
    //     var st = $(this).scrollTop();
    //     setTimeout(function() {
    //         if (st > scrollPos){
    //          // console.log("вниз");
    //          $(".wrapper").addClass("bottom");
    //         } else {
    //              // console.log("up");
    //              $(".wrapper").removeClass("bottom");
    //         }
    //         if (st + $(".wrapper").height() >= $(".content").height() + 50 ){
    //              // console.log("up");
    //              $(".wrapper").addClass("bottom");
    //          }
    //         scrollPos = st;
    //     }, 300);
    // });

    // var st = $(".wrapper").scrollTop();
    // if (st + $(".wrapper").height() > $(".content").height() - 50 ){
    //      // console.log("up");
    //      $(".wrapper").removeClass("bottom");
    //  }

    // bottomScrollCoord = $(document).scrollTop() + $(window).height();
    // bottomCoord = $(document).height() - 50;
    // if(bottomScrollCoord >=bottomCoord) {
    //     $(".wrapper").addClass("bottom");
    // }

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
      }
    });

    // -----------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      topCoord = $(document).scrollTop();
      $("body").addClass("fixed");
      $("body").css({
          "top" :  -1 * topCoord + "px",
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").addClass("active");
    });
    $(document).on("click", ".close, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").removeClass("fixed");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").attr("style", "");
      $("[data-popup]").removeClass("active");
      $(".popup_bg").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").removeClass("fixed");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").attr("style", "");      
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").removeClass("active");
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");    
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").removeClass("active");
        }
      }
    });

});