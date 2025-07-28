$(".main__section-6-faq button").click(function () {
  $(this)
    .closest(".main__section-6-faq")
    .find(".main__section-6-faq-a")
    .toggleClass("visible");
});
