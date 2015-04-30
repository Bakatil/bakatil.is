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
  try{
    skrollr.init({
      forceHeight: false,
      smoothScrolling: false,
      mobileDeceleration: 0.004
    });
  } catch(e) {};
});
