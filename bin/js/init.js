document.addEvent('domready', function () {

    // breadcrumb
    var Breadcrumb = document.getElement('.tpl-gutenberg-breadcrumb'),
        BreadcrumbFX = moofx(Breadcrumb),
        showBreadcrumb = false;

    var breadcrumbHide = function () {
        BreadcrumbFX.animate({
            bottom: -20,
            opacity: 0
        }, {
            duration: 200
        });
    };

    var breadcrumbShow = function () {
        BreadcrumbFX.animate({
            bottom: 0,
            opacity: 1
        }, {
            duration: 200
        });
    };

    require(['qui/QUI'], function () {
        var onScroll = function () {
            var scroll = QUI.getScroll(),
                show = false;

            if (scroll.y > 20) {
                show = true;
            }

            if (show === showBreadcrumb) {
                return;
            }

            showBreadcrumb = show;

            if (show) {
                breadcrumbShow();
                return;
            }

            breadcrumbHide();
        };

        QUI.addEvent('onScroll', onScroll);
        breadcrumbHide();
    });

    // menu
    var MenuButton = document.getElement('.tpl-gutenberg-menu-button'),
        Menu = document.getElement('.tpl-gutenberg-left'),
        Right = document.getElement('.tpl-gutenberg-right');

    var hideMenu = function () {
        Menu.addClass('tpl-gutenberg-left-hide');
        (function() {
            Right.removeClass('tpl-gutenberg-right-min');
        }).delay(20)
    };

    var showMenu = function () {
        Right.addClass('tpl-gutenberg-right-min');
        (function() {
            Menu.removeClass('tpl-gutenberg-left-hide');
        }).delay(20);
    };

    var menuToggle = function () {
        if (Menu.hasClass('tpl-gutenberg-left-hide')) {
            showMenu();
        } else {
            hideMenu();
        }
    };

    MenuButton.addEvent('click', menuToggle);
    hideMenu();

    // menu sticky polyfill
    require([URL_OPT_DIR + 'bin/fixed-sticky/fixedsticky.js'], function() {
        Menu.fixedsticky();
    });

});
