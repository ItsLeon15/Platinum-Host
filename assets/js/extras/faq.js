(function($) {
    'use strict';

    $('.scroll-to').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 20
        }, 300);
        return false;
    });
})(jQuery);