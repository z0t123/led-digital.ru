$(document).ready(function() {

  if (window.matchMedia("(max-width: 960px)").matches)
  {
    $(document).on('click', '.spoiler-menu-item', function(event) {
      event.preventDefault();
      var target = '#' + $(this).attr('data-for');
      var curLink = $(this).attr('href');
      var isOpened = $('#spoiler-menu').hasClass('opened');

      if (!isOpened && $("div").is(target))
      {
        $('#spoiler-menu').slideDown(10).addClass('opened');
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
        var top = $("#spoiler-menu").offset().top;
        $('body,html').animate({scrollTop: top}, 500);
      // }
    });
  }
  else
  {
    $(document).on('mouseenter', '.spoiler-menu-item', function(event) {
      event.preventDefault();
      var target = '#' + $(this).attr('data-for');
      var curLink = $(this).attr('href');
      var isOpened = $('#spoiler-menu-main').hasClass('opened');

      $('#spoiler-menu').slideDown(10).addClass('opened');
      $('.slider-item-box').hide(10);

      $('.spoiler-menu-item').removeClass('active');
      $(this).addClass('active');
      $('.spoiler-menu-box-blocks').removeClass('active');
      $(target).addClass('active');

    });

    $(document).on('mouseleave', '#masthead', function(event) {
      event.preventDefault();

      $('#spoiler-menu').slideUp(10).removeClass('opened');
      $('.slider-item-box').show(10);
      $('.spoiler-menu-item').removeClass('active').removeClass('entered');
    });
  }

  $(document).on('click', '#close-sm', function(event) {
    event.preventDefault();
    $('#spoiler-menu').removeClass('opened').slideUp(10);
  });
});
