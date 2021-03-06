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

            // close menu
            if (isMenuOpen) {
                Body.removeClass('show-menu');

                // animate path
                (function () {
                    Path.attr('d', initialPath);
                    isAnimating = false;
                    isMenuOpen = false;

                    document.getElement('.page-logo').removeClass('hide');
                    Body.removeClass('menu-opened');
                }).delay(300);

                return;
            }

            // show menu
            Body.addClass('show-menu');

            // animate path
            Path.animate({
                'path': pathOpen
            }, 400, mina.easeinout, function () {
                isAnimating = false;
                isMenuOpen = true;

                document.getElement('.page-logo').addClass('hide');
                Body.addClass('menu-opened');
            });
        };

        MenuButton.addEvent('click', toggleMenu);
        MenuCloseButton.addEvent('click', toggleMenu);
    });
});
