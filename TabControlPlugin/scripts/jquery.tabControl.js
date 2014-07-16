(function($){
    $.fn.tabControl = function(options){
        var $elem = this;
        var settings = $.extend({}, $.fn.tabControl.defaults, options);
        var tabMenu;
        var tabMenuItems;
        var tabContainers;
        var selectedTab;

        function setSelectedTab(){
            selectedTab = settings.selected < tabMenuItems.length && settings.selected >= 0 ?
                              settings.selected : $.fn.tabControl.defaults.selected;
            changeSelectedTab(tabMenuItems.eq(selectedTab));
        }

        function changeSelectedTab(newSelectedTab){
            var newSelectedTabIndex = tabMenuItems.index(newSelectedTab);

            if(newSelectedTabIndex == -1){
                return;
            }
            tabMenuItems.eq(selectedTab).removeClass('active-tab-menu');
            $(newSelectedTab).addClass('active-tab-menu');

            tabContainers.eq(selectedTab).removeClass('active-tab');
            tabContainers.eq(newSelectedTabIndex).addClass('active-tab');

            selectedTab = newSelectedTabIndex;
        }

        return this.each(function (){
            tabMenu = $elem.find('.tab-menu');
            tabMenuItems = tabMenu.children();
            tabContainers = $elem.find('.tab-content');

            setSelectedTab();

            tabMenu.click(function(e){
                changeSelectedTab(e.target);
            });
        });
    };

    $.fn.tabControl.defaults = {
        selected: 0,
        init: false
    };
})(jQuery);
