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

//Testimonial Section
const testimonials = [
  {
    name: "Christina",
    picture: "../images/courteous.png",
    comment:
      "I love the staff here, they always get my mornings off to the right start.",
  },
  {
    name: "Robert",
    picture: "../images/courteous.png",
    comment: "Their Mauna Kea Freeze is da bomb. Sweet and creamy, so ono!",
  },
  {
    name: "Jayden",
    picture: "../images/courteous.png",
    comment:
      "I love that have so many great events here.I love to connect with new people on Lava Javascript Thursdays.",
  },
  {
    name: "Irena",
    picture: "../images/courteous.png",
    comment:
      "The staff here are so warm and friendly, they really do treat you like Ohana. Like family.",
  },
];

const testimonialSection = document.getElementById("testimonials");

let j = 0;

function nextTestimonial() {
  if (j === testimonials.length - 1) {
    j = 0;
  } else {
    j += 1;
  }
  testimonialSection.innerHTML = `
  <div class="testimonial-card">
    <div class="testimonial-left">

    </div>
    <div class="testimonial-right">
      <p>${testimonials[j].comment}<p>
      <h2>${testimonials[j].name}</h2>
    </div>
  </div>
  `;
}

nextTestimonial();

setInterval(() => {
  nextTestimonial();
}, 5000);
