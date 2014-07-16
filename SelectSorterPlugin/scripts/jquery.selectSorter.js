(function ($) {
    $.fn.selectSorter = function (options) {
        var settings = $.extend({}, $.fn.selectSorter.defaults, options);
        var $elem = $(this);

        return this.each(function (){
            var opts = $elem.find('option');
            opts.sort(function(a, b){
                var a = settings.byText ? a.text : a.value;
                var b = settings.byText ? b.text : b.value;

                if (a > b){
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            });

            if(settings.direction === 'desc') {
                Array.prototype.reverse.call(opts);
            }
            $elem.empty().append(opts);
        });
    };

    $.fn.selectSorter.defaults = {
        direction: 'asc',
        dataType: 'string',
        byText: true // false -> sort by value
    };
})(jQuery);
