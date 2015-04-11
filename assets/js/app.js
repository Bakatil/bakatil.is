$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'move',
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : true
  }
});

$(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  //var expandMenu = $('.responsive-menu');

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

  try{
    skrollr.init({
      forceHeight: false,
      smoothScrolling: false,
      mobileDeceleration: 0.004
    });
  } catch(e) {};
});
//$( window ).load(function() {
//  $(document).foundation('interchange', 'reflow');
//  $(document).foundation('interchange', 'resize');
//});
