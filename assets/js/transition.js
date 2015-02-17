/*var PageTransitions = (function () {
    var $main = $('.app'),
            $pages = $main.children('.view'),
            $iterate = $('#iterateEffects'),
            animcursor = 1,
            pagesCount = $pages.length,
            current = 0,
            isAnimating = false,
            endCurrPage = false,
            endNextPage = false,
            animEndEventNames = {
                'WebkitAnimation': 'webkitAnimationEnd',
                'OAnimation': 'oAnimationEnd',
                'msAnimation': 'MSAnimationEnd',
                'animation': 'animationend'
            },
            // animation end event name
            animEndEventName = animEndEventNames[ Modernizr.prefixed('animation') ],
            // support css animations
            support = Modernizr.cssanimations;

    function nextPage() {
        var $nextPage = $("#view-player").addClass('view-active'),
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop',
                inClass = 'pt-page-moveFromTop';

        $("#view-unlogged").addClass(outClass).on(animEndEventName, function () {
            $("#view-unlogged").off(animEndEventName);
            endCurrPage = true;
            if (endNextPage) {
                onEndAnimation($("#view-unlogged"), $nextPage);
            }
        });
        $nextPage.addClass(inClass).on(animEndEventName, function () {
            $nextPage.off(animEndEventName);
            endNextPage = true;
            if (endCurrPage) {
                onEndAnimation($("#view-unlogged"), $nextPage);
            }
        });
        if (!support) {
            onEndAnimation($("#view-unlogged"), $nextPage);
        }

    }
    ;

    function onEndAnimation($outpage, $inpage) {
        endCurrPage = false;
        endNextPage = false;
        resetPage($outpage, $inpage);
        isAnimating = false;
    }
    ;

    function resetPage($outpage, $inpage) {
        $outpage.attr('class', $outpage.data('originalClassList'));
        $inpage.attr('class', $inpage.data('originalClassList') + ' view-active');
    }
    ;

    return {
        nextPage: nextPage,
    };
})();
*/
