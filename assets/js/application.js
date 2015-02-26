
$(document).ready(function () {



  function initNavigation() {

    var $menu = $('.menu');
    var $menuToggler = $('#menu-toggler');
    var $labelMenuToggler = $('label[for="menu-toggler"]');
    $(document).on('click', function (e) {
      // if element is opened and click target is outside it, hide it
      if ($menuToggler.is(':checked') && !$menu.is(e.target) && !$menu.has(e.target).length && !$labelMenuToggler.is(e.target)) {
        $menuToggler.trigger('click');
      }
    });
  }

  initNavigation();

});