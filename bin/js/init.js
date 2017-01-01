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
    require([
        URL_OPT_DIR + 'bin/snapsvg/dist/snap.svg-min.js'
    ], function () {

        var MenuButton = document.getElement('.menu-button'),
            MenuCloseButton = document.getElement('.menu-button-close'),
            Body = document.body,

            MorphElm = document.getElementById('morph-shape'),
            S = Snap(MorphElm.querySelector('svg')),
            Path = S.select('path'),

            pathOpen = MorphElm.getAttribute('data-morph-open'),
            initialPath = Path.attr('d');

        var isMenuOpen = false,
            isAnimating = false;

        var toggleMenu = function () {
            if (isAnimating) {
                return false;
            }

            isAnimating = true;

            if (isMenuOpen) {
                Body.removeClass('show-menu');

                // animate path
                (function () {
                    Path.attr('d', initialPath);
                    isAnimating = false;
                    isMenuOpen = false;
                }).delay(300);

                return;
            }


            Body.addClass('show-menu');

            // animate path
            Path.animate({
                'path': pathOpen
            }, 400, mina.easeinout, function () {
                isAnimating = false;
                isMenuOpen = true;
            });
        };

        MenuButton.addEvent('click', toggleMenu);
        MenuCloseButton.addEvent('click', toggleMenu);
    });
});
