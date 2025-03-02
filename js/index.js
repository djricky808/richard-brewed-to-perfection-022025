//Promo carousel
const promoSlides = document.querySelectorAll(".promo-slide");

console.log(promoSlides);

let currentSlide = 0;

function transition() {
  console.log("transition");
  console.log(currentSlide);
  currentSlide++;
  if (currentSlide === promoSlides.length) {
    currentSlide = 0;
  }
  for (i = 0; i < promoSlides.length; i++) {
    console.log(promoSlides[i].classList);
    if (promoSlides[i].classList.contains("visible")) {
      promoSlides[i].classList.remove("visible");
      promoSlides[i].classList.add("invisible");
    }
    if (i === currentSlide) {
      promoSlides[i].classList.remove("invisible");
      promoSlides[i].classList.add("visible");
    }
  }
}

setInterval(() => {
  transition();
}, 5000);
