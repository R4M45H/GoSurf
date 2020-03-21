$(function() {
  //HEADER SLIDER

  $(".header__slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrows-right"></img>',
    asNavFor: ".slider-dotshead" //for connected with dashed

    
  });

  //DASHED SLIDER
  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 961,
        stettings: "unslick"
      }
    ]
  });

  //SURF SLIDER
  $(".surf-slider").slick({
    LazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrows-right"></img>',
    asNavFor: ".slider-map", //for connected with map
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          centerMode: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  //MAP SLIDER
  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
          centerMode: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });

  //TRAVEL AND SLEEP SLIDER
  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    LazyLoad: 'ondemand',
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrows-left"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrows-right"></img>'
  });

  //SLEEP CALC INPUTs

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="minus"></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  //  здесь рассчитывает сумму с исходными значениями !
  //$('.quantity').each(function() {
  //var parents = $(this).parents('.holder-slider__info');
  //let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
  // $('.summ', parents).html('$' + summ);
  //});

  //calc sleep
  $(".quantity-button").on("click", function() {
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests") * $(".guests", parents).val();
    $(".summ", parents).html("$" + summ);
  });

  let summ =
    $(".nights").val() * $(".summ").data("nights") +
    ($(".guests").val() - 1) * $(".summ").data("guests");
  $(".summ").html("$" + summ);

  $(".surfboard-box__circle").on("click", function() {
    $(this).toggleClass("active");
  });

  //Mobile-Tablet Menu
  $(".menu-btn").on("click", function() {
    $(".menu, .menu-btn").toggleClass("active");
  });
  $("#menu-nav li a").click(function() {
    $(".menu, .menu-btn").removeClass('active'); 
  });
  

  //Инициация библиотеки WoW
  //var wow = new WOW(
  //  {
  //   mobile: false,       // trigger animations on mobile devices (default is true)
  //  }
  //);
  new WOW().init();
  
  //Плавный скролл меню
  $("#menu-nav").on("click","a", function (event) { 
    //отменяем стандартную обработку нажатия по ссылке 
    event.preventDefault(); 
    //забираем идентификатор бока с атрибута href 
    var id = $(this).attr('href'), 
    //узнаем высоту от начала страницы до блока на который ссылается якорь 
    top = $(id).offset().top; 
      //анимируем переход на расстояние - top за 1500 мс 
    $('body,html').animate({scrollTop: top}, 1500); 
  }); 

  //Возврат в начало сайта
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1500) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
      
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });

  //Preloader
  // $('body').css('overflow-y','hidden');
  // $('body').css('position','static');
  // $(window).on("load", function() {
  //   $('body').css('overflow-y','auto');
  //   $('body').css('position','static');
  // });
    
});

