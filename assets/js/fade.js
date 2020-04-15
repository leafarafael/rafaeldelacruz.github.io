(function () {
  var timeout;
  var $window = $(window);
  var $navbar = $(".header");

  $window.on("scroll", function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      if ($window.scrollTop() < 1) {
        $navbar.removeClass("hide");
      } else {
        $navbar.addClass("hide");
      }
    }, 0);
  });
})();
