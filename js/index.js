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
    name: "Christina S.",
    picture: "../images/courteous.png",
    comment:
      "I love the staff here, they always get my mornings off to the right start.",
  },
  {
    name: "Robert P.",
    picture: "../images/courteous.png",
    comment: "Their Mauna Kea Freeze is da bomb. Sweet and creamy, so ono!",
  },
  {
    name: "Jayden A.",
    picture: "../images/courteous.png",
    comment:
      "I love that have so many great events here.I love to connect with new people on Lava Javascript Thursdays.",
  },
  {
    name: "Irena P.",
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
  <div class="testimonial-card fade-out">
    <div class="testimonial-left">
      <img src="${testimonials[j].picture}" alt="${testimonials[j].picture}"/>
    </div>
    <div class="testimonial-right">
      <p>${testimonials[j].comment}</p>
      <h2>${testimonials[j].name}</h2>
    </div>
  </div>
  `;
}

function fadeIn() {
  let testimonialCard = document.querySelector(".testimonial-card");
  console.log(testimonialCard);
  testimonialCard.classList.remove("fade-out");
}

nextTestimonial();
fadeIn();

setInterval(() => {
  nextTestimonial();
  setTimeout(() => {
    fadeIn();
  }, 10);
}, 5000);
