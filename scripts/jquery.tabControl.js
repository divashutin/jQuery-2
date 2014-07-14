(function($){
    $.fn.tabControl = function(options){
        var settings = $.extend({}, $.fn.tabControl, $.fn.tabControl.defaults);

        

        return this.each(function(){

            var tabHeaders = $('.tab-menu');
            var tabHeadersItems = tabHeaders.find('li');
            var tabContainers = $('.tab-content');
            tabHeaders.click(function(e){
                var targetIndex = tabHeaders.children().index(e.target);

                tabHeadersItems.removeClass('active');
                $(e.target).addClass('active');

                tabContainers.removeClass('active');
                $(tabContainers[targetIndex]).addClass('active');
            });
        });
    };

    $.fn.tabControl.defaults = {
        selected: 0
    }
})(jQuery);
