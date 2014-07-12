(function($){
    $.expr[':'].inView = function(elem){
        var $window = $(window);

        var vpTop = $window.scrollTop();
        var vpLeft = $window.scrollLeft();

        var vpBottom = vpTop +$window.height();
        var vpRight = vpLeft + $window.width();

        var $elem = $(elem);
        var elemOffset = $elem.offset();

        var elemRight = elemOffset.left + $elem.outerWidth();
        var elemBottom = elemOffset.top + $elem.outerHeight();

        return ((elemOffset.top >= vpTop && elemOffset.top <= vpBottom) ||
            (elemBottom >= vpTop && elemBottom <= vpBottom)) &&
            ((elemOffset.left >= vpLeft && elemOffset.left <= vpRight) ||
            (elemRight >= vpLeft && elemRight <= vpRight));
    };
})(jQuery);