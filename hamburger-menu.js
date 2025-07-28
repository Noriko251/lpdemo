$(".header__hamburger-menu").click(function () {
  $(".modals").addClass("visible");
  $(".header__hamburger-menu").addClass("hide");
});

$(".modals__menu-hamburger-close-button").click(function () {
  $(".modals").removeClass("visible");
  $(".header__hamburger-menu").removeClass("hide");
});

$(".modals").click(function (event) {
  if (!$(event.target).closest(".modals__menu").length) {
    $(".modals").removeClass("visible");
    $(".header__hamburger-menu").removeClass("hide");
  }
});

$(".modals__menu a").click(function (event) {
  $(".modals").removeClass("visible");
  $(".header__hamburger-menu").removeClass("hide");
});

$(".modals__menu button").click(function (event) {
  $(".modals").removeClass("visible");
  $(".header__hamburger-menu").removeClass("hide");
});
