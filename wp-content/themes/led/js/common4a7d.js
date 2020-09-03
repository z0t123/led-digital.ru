$(document).ready(function() {

  let formatter = new Intl.NumberFormat("ru");

  $('#num1').animate({ num: 356245 - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });

  $('#num2').animate({ num: 87553 - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });

  $('#num3').animate({ num: 217577 - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });

  $('#num4').animate({ num: 17887 - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });



  $('#num1-custom').animate({ num: $('#num1-custom').attr('data-num') - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });


  $('#num2-custom').animate({ num: $('#num2-custom').attr('data-num') - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });

  $('#num3-custom').animate({ num: $('#num3-custom').attr('data-num') - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });

  $('#num4-custom').animate({ num: $('#num4-custom').attr('data-num') - 3000 }, {
    duration: 500,
    step: function (num){
        this.innerHTML = formatter.format((num + 3000).toFixed(0));
    }
  });

  $('.image-popup-zoom').magnificPopup({
    type: 'image',
  });

  // $(".phone-field").mask("+7 (999) 999-99-99");
  // $(".phone-field").mask("9999999999999999");
    $(".phone-field").bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

  $('.slider-wr').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.portfolio-main-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.portfolio-main-arrow-left'),
    nextArrow: $('.portfolio-main-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.portfolio-main-items-v2:not(.not-slider)').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.portfolio-main-arrow-left-2'),
    nextArrow: $('.portfolio-main-arrow-right-2'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.blog-main-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog-arrow-left'),
    nextArrow: $('.blog-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // слайдер новостей в блоге
  $('.blog-news-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog-news-wr .blog-arrow-left'),
    nextArrow: $('.blog-news-wr .blog-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // слайдер советов в блоге
  $('.blog-sovets-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog-sovets-wr .blog-arrow-left'),
    nextArrow: $('.blog-sovets-wr .blog-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // слайдер статей в блоге
  $('.blog-staty-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog-staty-wr .blog-arrow-left'),
    nextArrow: $('.blog-staty-wr .blog-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });




  $('.blog-faq-box:not(.not-slider)').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.blog-faq-wr .blog-arrow-left'),
    nextArrow: $('.blog-faq-wr .blog-arrow-right'),
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
  });


  $('.team-main-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.team-arrow-left'),
    nextArrow: $('.team-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.recommend-uslugi-main-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.recommend-arrow-left'),
    nextArrow: $('.recommend-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.cases-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.cases-arrow-left'),
    nextArrow: $('.cases-arrow-right'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplaySpeed: 100000,
        }
      }
    ]
  });

  $('a#zayavka, a#about-jmi').magnificPopup({
    type: 'inline',
  });

  $('a.rec-zayavka').magnificPopup({
    type: 'inline',
  });

  $('a.consult-form').magnificPopup({
    type: 'inline',
  });

  $('a#send-otzyv').magnificPopup({
    type: 'inline',
  });

  $('a#add-qestion-link').magnificPopup({
    type: 'inline',
  });

  $(document).on('click', '#zayavka, #about-jmi', function(event) {
      event.preventDefault();
      var txt = $(this).text().trim();

      if (txt == 'Заказать звонок') {
         $('.zayavka-form-title.modal-form-title').text(txt);
      }
  });


  // обработка формы в футере
  var wpcf7Elm1 = document.querySelector('.footer-form .wpcf7');

  wpcf7Elm1.addEventListener( 'wpcf7mailsent', function( event ) {
    // $('#wpcf7-f120-o1').html('<div class="modal-form-success">'+event.detail.apiResponse.message+'</div>');
    $.magnificPopup.open({
      items:
      {
        src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>', // can be a HTML string, jQuery object, or CSS selector
        type: 'inline'
      }
    });

  }, false );

  // обработка формы заявки
  var wpcf7Elm2 = document.querySelector('#zayavka-form-wr .wpcf7');

  wpcf7Elm2.addEventListener( 'wpcf7mailsent', function( event ) {
    $('#zayavka-form-wr .wpcf7').html('<div class="modal-form-success">'+event.detail.apiResponse.message+'</div>');
  }, false );

  // обработка формы консультации в попап
  var wpcf7Elm3 = document.querySelector('#consult-form-wr .wpcf7');

  wpcf7Elm3.addEventListener( 'wpcf7mailsent', function( event ) {
    $('#consult-form-wr .wpcf7').html('<div class="modal-form-success">'+event.detail.apiResponse.message+'</div>');
  }, false );

    // обработка формы Рассчитайте стоимость разработки сайта
    if($("div").is("#zak-price-form")) {
      var wpcf7Elm4 = document.querySelector('#zak-price-form .wpcf7');

      wpcf7Elm4.addEventListener( 'wpcf7mailsent', function( event ) {
          $.magnificPopup.open({
            items:
            {
              src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>', // can be a HTML string, jQuery object, or CSS selector
              type: 'inline'
            }
          });
        }, false );
    }

  // обработка формы "ЗАЯВКА НА НАШИ УСЛУГИ"
  if($("div").is(".consult-form-block-box-right"))
  {
    var wpcf7Elm4 = document.querySelector('.consult-form-block-box-right .wpcf7');

    wpcf7Elm4.addEventListener( 'wpcf7mailsent', function( event ) {
      $.magnificPopup.open({
        items:
        {
          src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      });
    }, false );
  }

    // обработка формы Есть проект для нас? Давайте обсудим!
    if($("div").is(".mark-form-sotr-box-right"))
    {
      var wpcf7Elm5 = document.querySelector('.mark-form-sotr-box-right .wpcf7');

      wpcf7Elm5.addEventListener( 'wpcf7mailsent', function( event ) {
          $.magnificPopup.open({
            items:
            {
              src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>', // can be a HTML string, jQuery object, or CSS selector
              type: 'inline'
            }
          });
        }, false );
    }

    // обработка формы БЕСПЛАТНО ПРОВЕРИМ ВАШ САЙТ НА ОШИБКИ
    if($("div").is("#test-site-form"))
    {
      var wpcf7Elm6 = document.querySelector('#test-site-form .wpcf7');

      wpcf7Elm6.addEventListener( 'wpcf7mailsent', function( event ) {
          $.magnificPopup.open({
            items:
            {
              src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>', // can be a HTML string, jQuery object, or CSS selector
              type: 'inline'
            }
          });
        }, false );
    }

    // обработка формы Оставить отзыв
    if($("div").is("#add-otzyv"))
    {
      var wpcf7ElmOtzyv = document.querySelector('#add-otzyv .wpcf7');

      wpcf7ElmOtzyv.addEventListener( 'wpcf7mailsent', function( event ) {
          $.magnificPopup.open({
            items:
            {
              src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>',
              type: 'inline'
            }
          });
        }, false );
    }

    // обработка формы Оставить отзыв
    if($("div").is("#add-qestion"))
    {
      var wpcf7ElmQestion = document.querySelector('#add-qestion .wpcf7');

      wpcf7ElmQestion.addEventListener( 'wpcf7mailsent', function( event ) {
          $.magnificPopup.open({
            items:
            {
              src: '<div class="modal-form-wr modal-form-success">'+event.detail.apiResponse.message+'</div>',
              type: 'inline'
            }
          });
        }, false );
    }

  // обработка ajax пагинации
  $(document).on('click', '#ajax-pagination a', function(event) {
    event.preventDefault();
    var url = window.location.href;
    var page = $(this).attr('data-page');
    var container = $(this).attr('date-container');
    var itemClass = $(this).attr('date-item');

    $.ajax({
      url: url,
      type: 'GET',
      data: {pag: page}
    })
    .done(function(response) {
      var parsed = $.parseHTML(response);
      var items = $(parsed).find('.'+itemClass);
      var paginator = $(parsed).find('#ajax-pagination');

      if (typeof $(paginator).html() !== 'undefined')
      {
        $('#ajax-pagination').html($(paginator).html());
      }
      else
      {
        $('#ajax-pagination').html('');
      }

      $(items).each(function(index) {
        $(container).append($(this));
      });
    })
    .fail(function() {
      console.log("error");
    });

  });

  $(document).on('click', '.otzivy-main-item-right-more a', function(event) {
    event.preventDefault();
    $(this).closest('.otzivy-main-item-right-more').siblings('.otzivy-main-item-right-anons').removeClass('hide');
    $(this).closest('.otzivy-main-item-right-more').remove();
  });

  $(document).on('click', '#menu-toggle', function(e) {
    e.preventDefault();
    var status = $(this).attr('class');
    if (status == 'close') {
     $('.menu-top-menu-container').slideDown();
     $(this).attr('class', 'open');
    } else if (status == 'open') {
     $('.menu-top-menu-container').slideUp();
     $(this).attr('class', 'close');
    }
  });

  if(window.matchMedia('(min-width:768px)').matches && window.matchMedia('(max-width: 959px)').matches) {
    $(document).on('click', '#sub-main-menu li a', function(event) {
      event.preventDefault();
      var link = $(this).attr('href');
      var sub = $(this).siblings('ul.sub-menu');

      // if (!(sub.length))
      // {
      //   location.href = link;
      // }
    });
  }


    $(document).on('click', '.pisma-otzyvy-checker a', function(event) {
        event.preventDefault();
        var curLink = $(this);
        var curLinkVal = curLink.attr('href');

        if (!curLink.hasClass('active')) {
            $('.pisma-otzyvy-checker a').removeClass('active');
            $('.otzivy-box').removeClass('showed');
            $(curLinkVal).addClass('showed');
            curLink.addClass('active');
        }
    });


    $(document).on('click', '.pisma-inner-checker a', function(event) {
        event.preventDefault();
        var curLink = $(this);
        var curLinkVal = curLink.attr('data-for');
        console.log(curLinkVal);

        if (!curLink.hasClass('active')) {
            $('.pisma-inner-checker a').removeClass('active');
            curLink.addClass('active');
            if (curLinkVal != 'all') {
                $('.pisma-inner-item').hide();
                $('.pisma-inner-item[data-type="'+curLinkVal+'"]').show();
            } else {
                $('.pisma-inner-item').removeAttr('style');
            }

        }
    });


    $(document).on('click', '.clients-main-show-more a', function(event) {
        event.preventDefault();
        $('.clients-main-items').addClass('opened');
        $(this).remove();
    });

    $(document).on('click', '#slide-tarifs', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#seo-usl').offset().top }, 1000);
    });

    $(document).on('click', '.cases-top-block-box-left-link a', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.portfolio-cheker-wr').offset().top - 50 }, 1000);
    });


    $(document).on('click', '.portfolio-cheker a', function(event) {
        event.preventDefault();

        if (!$(this).hasClass('active')) {
            var target = $(this).attr('data-target');

            $('.portfolio-cheker a').removeClass('active');
            $(this).addClass('active');

            if (target == 'all') {
                $('.portfolio-main-item-v2').show();
            } else {
                $('.portfolio-main-item-v2').hide();
                $('.portfolio-main-item-v2.'+target).show();
            }
        }
    });

    $(document).on('click', 'a.add-otzyv-rating-val', function(event) {
        event.preventDefault();

        var curVal = $(this).attr('data-rval');

        $('a.add-otzyv-rating-val').removeClass('active');
        $(this).addClass('active');
        $('#add-otzyv-rating').val(parseInt(curVal));
    });


    // Открытие блока вопрос/ответ
    $(document).on('click', '.blog-faq-item-inner-block-link a', function(event) {
        event.preventDefault();

        var linkBlock = $(this).parent('.blog-faq-item-inner-block-link');
        var answerBlock = linkBlock.parent('.blog-faq-item-inner-a');
        var answerHeight;

        answerBlock.addClass('open');
        answerBlock.find('.blog-faq-item-inner-block-text').addClass('open');
        answerBlock.find('a.close-faq-item').addClass('open');
        answerBlock.parent('.blog-faq-item-inner').height(answerBlock.outerHeight() + 35);
        linkBlock.hide();
    });

    // Закрытие блока вопрос/ответ
    $(document).on('click', 'a.close-faq-item', function(event) {
        event.preventDefault();

        var answerBlock = $(this).parent('.blog-faq-item-inner-block-name').parent('.blog-faq-item-inner-a');
        var linkBlock = answerBlock.find('.blog-faq-item-inner-block-link');

        answerBlock.removeClass('open');
        answerBlock.find('.blog-faq-item-inner-block-text').removeClass('open');
        $(this).removeClass('open');
        answerBlock.parent('.blog-faq-item-inner').removeAttr('style');
        linkBlock.show();
    });


    // переключение вопросов по типу
    $(document).on('click', '.blog-faq-inner-top-left a', function(event) {
        event.preventDefault();

        if (!$(this).hasClass('active')) {
            var target = $(this).attr('data-target');

            $('.blog-faq-inner-top-left a').removeClass('active');
            $(this).addClass('active');

            if (target == 'all') {
                $('.blog-faq-item').show();
            } else {
                $('.blog-faq-item').hide();
                $('.blog-faq-item.'+target).show();
            }
        }
    });

    // карусель "Кому она нужна?"
    $('.analitika-komu-list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.analitika-arrow-left'),
        nextArrow: $('.analitika-arrow-right'),
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    // Просмотр списка работ в тарифах
    $(document).on('click', '.lid-tarifs-item-middle-more a', function(event) {
        event.preventDefault();
        var targetId = $(this).attr('href');
        var target = $(targetId);

        if (!target.hasClass('open')) {
            target.addClass('open');
        }

    });

    $(document).on('click', 'a.lid-tarifs-item-middle-more-close', function(event) {
        event.preventDefault();
        var targetId = $(this).attr('href');
        var target = $(targetId);

        if (target.hasClass('open')) {
            target.removeClass('open');
        }

    });


    // Показ всех услуг на услуге 1 уровня
    $(document).on('click', 'a.button-u1-usl-all', function(event) {
        event.preventDefault();

        $('#ulevel1-all-usl').slideToggle(300, function() {
            if ($('a.button-u1-usl-all').text().trim() == 'Посмотреть все услуги') {
                $('a.button-u1-usl-all').text('Скрыть все услуги');
            } else {
                $('a.button-u1-usl-all').text('Посмотреть все услуги');
            }
        });
    });

});
