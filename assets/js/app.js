$(document).foundation();

$(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

  $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    $('html').addClass("noscroll");
  });

  $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
    $('html').removeClass("noscroll");
  });

  try{
    skrollr.init({
      forceHeight: false,
      smoothScrolling: false,
      mobileDeceleration: 0.004
    });
  } catch(e) {};

});
