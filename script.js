(function($) {
  $(function() {
    $('.js-nav-item').click(function() {
      if ($(this).hasClass('active')) {
        return;
      }
      var activeItem = $('.js-nav-item.active');
      if (activeItem.length > 0) {
        activeItem.removeClass('active');
      }

      $(this).addClass('active');
      
      var target = $(this).attr('data-href');
      console.log('Targeting to: ' + target);
      // Do something here with your target
    })

    $('.js-toggle-nav').click(function() {
      $('.js-nav').toggleClass('active');
    })

    $('.js-switch-darkmode').click(function() {
      $(this).toggleClass('active');
      $('body').toggleClass('dark-mode')
    })
  });
})(jQuery);
