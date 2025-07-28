var images = [
  "images/top-image-01-edited.png",
  "images/top-image-02.png",
  "images/top-image-03.png",
];

var imagesTablet = [
  "images/top-image-01-tablet.png",
  "images/top-image-02-tablet.png",
  "images/top-image-03-tablet.png",
];

var imagesMobile = [
  "images/top-image-01-mobile.png",
  "images/top-image-02-mobile.png",
  "images/top-image-03-mobile.png",
];

var currentIndex = 0;
var roundCount = 0;
var maxRounds = 2;
var currentSlide = "a";

var selectedImages;

if (window.matchMedia("(max-width: 540px)").matches) {
  var firstSlide = $(".slide-a");
  firstSlide.addClass("no-transition visible");
  firstSlide.css("background-image", "url(" + imagesMobile[currentIndex] + ")");

  setTimeout(() => {
    firstSlide.removeClass("no-transition");
  }, 50);

  setTimeout(doSlideshow, 5000);

  function doSlideshow() {
    if (roundCount >= maxRounds) {
      console.log("Slideshow has finished after 2 rounds.");
      return;
    }

    var nextIndex = (currentIndex + 1) % imagesMobile.length;

    var frontSlide = $(".slide-" + currentSlide);
    var backSlide = $(".slide-" + (currentSlide === "a" ? "b" : "a"));

    backSlide.css("background-image", "url(" + imagesMobile[nextIndex] + ")");
    backSlide.addClass("visible");

    frontSlide.removeClass("visible");

    setTimeout(() => {
      currentIndex = nextIndex;
      if (currentIndex === 0) roundCount++;
      currentSlide = currentSlide === "a" ? "b" : "a";
      setTimeout(doSlideshow, 5000);
    }, 1000);
  }
} else if (
  window.matchMedia("(min-width: 540px) and (max-width: 1024px)").matches
) {
  var firstSlide = $(".slide-a");
  firstSlide.addClass("no-transition visible");
  firstSlide.css("background-image", "url(" + imagesTablet[currentIndex] + ")");

  setTimeout(() => {
    firstSlide.removeClass("no-transition");
  }, 50);

  setTimeout(doSlideshow, 5000);

  function doSlideshow() {
    if (roundCount >= maxRounds) {
      console.log("Slideshow has finished after 2 rounds.");
      return;
    }

    var nextIndex = (currentIndex + 1) % imagesTablet.length;

    var frontSlide = $(".slide-" + currentSlide);
    var backSlide = $(".slide-" + (currentSlide === "a" ? "b" : "a"));

    backSlide.css("background-image", "url(" + imagesTablet[nextIndex] + ")");
    backSlide.addClass("visible");

    frontSlide.removeClass("visible");

    setTimeout(() => {
      currentIndex = nextIndex;
      if (currentIndex === 0) roundCount++;
      currentSlide = currentSlide === "a" ? "b" : "a";
      setTimeout(doSlideshow, 5000);
    }, 1000);
  }
} else {
  var firstSlide = $(".slide-a");
  firstSlide.addClass("no-transition visible");
  firstSlide.css("background-image", "url(" + images[currentIndex] + ")");

  setTimeout(() => {
    firstSlide.removeClass("no-transition");
  }, 50);

  setTimeout(doSlideshow, 5000);

  function doSlideshow() {
    if (roundCount >= maxRounds) {
      console.log("Slideshow has finished after 2 rounds.");
      return;
    }

    var nextIndex = (currentIndex + 1) % images.length;

    var frontSlide = $(".slide-" + currentSlide);
    var backSlide = $(".slide-" + (currentSlide === "a" ? "b" : "a"));

    backSlide.css("background-image", "url(" + images[nextIndex] + ")");
    backSlide.addClass("visible");

    frontSlide.removeClass("visible");

    setTimeout(() => {
      currentIndex = nextIndex;
      if (currentIndex === 0) roundCount++;
      currentSlide = currentSlide === "a" ? "b" : "a";
      setTimeout(doSlideshow, 5000);
    }, 1000);
  }
}

// var firstSlide = $(".slide-a");
// firstSlide.addClass("no-transition visible");
// firstSlide.css("background-image", "url(" + images[currentIndex] + ")");

// setTimeout(() => {
//   firstSlide.removeClass("no-transition");
// }, 50);

// setTimeout(doSlideshow, 5000);

// function doSlideshow() {
//   if (roundCount >= maxRounds) {
//     console.log("Slideshow has finished after 2 rounds.");
//     return;
//   }

//   var nextIndex = (currentIndex + 1) % images.length;

//   var frontSlide = $(".slide-" + currentSlide);
//   var backSlide = $(".slide-" + (currentSlide === "a" ? "b" : "a"));

//   backSlide.css("background-image", "url(" + images[nextIndex] + ")");
//   backSlide.addClass("visible");

//   frontSlide.removeClass("visible");

//   setTimeout(() => {
//     currentIndex = nextIndex;
//     if (currentIndex === 0) roundCount++;
//     currentSlide = currentSlide === "a" ? "b" : "a";
//     setTimeout(doSlideshow, 5000);
//   }, 1000);
// }
