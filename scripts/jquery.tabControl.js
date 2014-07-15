(function($){
    $.fn.tabControl = function(options){
        var $elem = this;
        var settings = $.extend({}, $.fn.tabControl.defaults, options);
        var tabHeaders;
        var tabHeadersItems; //= tabHeaders.find('li');
        var tabContainers; //= $('.tab-content', $elem);

        function setActiveTab(){
            var selectedTab = settings.selected < tabHeadersItems.length && settings.selected >= 0 ?
                              settings.selected : $.fn.tabControl.defaults.selected;
            changeActiveTab(tabHeaders.children().eq(selectedTab));
        }

        function changeActiveTab(newActiveTab){
            var targetIndex = tabHeaders.children().index(newActiveTab);

            if(targetIndex == -1){
                return;
            }
            tabHeadersItems.removeClass('active');
            $(newActiveTab).addClass('active');

            tabContainers.removeClass('active');
            $(tabContainers[targetIndex]).addClass('active');
        }

        function generateMarkup(){


        }

        return this.each(function(){
            if(settings.init === true){
                generateMarkup();

                tabHeaders = $('.tab-menu', $elem);
                tabHeadersItems = tabHeaders.find('li');
                tabContainers = $('.tab-content', $elem);
            }
            setActiveTab();

            tabHeaders.click(function(e){
                changeActiveTab(e.target);
            });
        });
    };

    $.fn.tabControl.defaults = {
        selected: 0,
        init: false
    }
})(jQuery);
