$(document).ready(function() {
  if (window.matchMedia("(max-width: 960px)").matches)
  {
    // $('#for-mainpage-spoiler-menu').append($('#spoiler-menu-main'));

    $(document).on('click', '.spoiler-menu-item', function(event) {
      event.preventDefault();
      var target = '#' + $(this).attr('data-for');
      var curLink = $(this).attr('href');
      var isOpened = $('#spoiler-menu-main').hasClass('opened');

      if ($(this).hasClass('active'))
      {
        $('#spoiler-menu-main').slideUp(10).removeClass('opened');
        // $('.slider-item-box').show(10);
        $(this).removeClass('active');
      }
      else
      {
        if (!isOpened && $("div").is(target))
        {
          $('#spoiler-menu-main').slideDown(10).addClass('opened');
          // $('.slider-item-box').hide(10);
        }

        if($("div").is(target))
        {
          $('.spoiler-menu-item').removeClass('active');
          $(this).addClass('active');
          $('.spoiler-menu-box-blocks').removeClass('active');
          $(target).addClass('active');
        }
        else
        {
          location.href = curLink;
        }


        // if (window.matchMedia("(max-width: 767px)").matches)
        // {
          var top = $("#spoiler-menu-main").offset().top;
          $('body,html').animate({scrollTop: top}, 500);
        // }
      }
    });
  }
  else
  {
    $(document).on('mouseenter', '.spoiler-menu-item', function(event) {
      event.preventDefault();
      var target = '#' + $(this).attr('data-for');
      var curLink = $(this).attr('href');
      var isOpened = $('#spoiler-menu-main').hasClass('opened');

      $('#spoiler-menu-main').slideDown(10).addClass('opened');
      $('.slider-item-box').hide(10);

      $('.spoiler-menu-item').removeClass('active');
      $(this).addClass('active');
      $('.spoiler-menu-box-blocks').removeClass('active');
      $(target).addClass('active');

    });

    $(document).on('mouseleave', '.header-inner-box-right-line-2', function(event) {
      event.preventDefault();

      $('#spoiler-menu-main').slideUp(10).removeClass('opened');
      $('.slider-item-box').show(10);
      $('.spoiler-menu-item').removeClass('active').removeClass('entered');
    });
  }




  $(document).on('click', '#close-sm', function(event) {
    event.preventDefault();
    $('#spoiler-menu-main').removeClass('opened');
    $('#spoiler-menu-main').slideUp(10).removeClass('opened');
    $('.slider-item-box').show(10);
  });
});
