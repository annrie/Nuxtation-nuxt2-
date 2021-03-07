$(function () {
  const pageTop = $(".back_to_top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
});
