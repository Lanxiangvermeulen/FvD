// Dit is de breedte van het scherm. Met innerwidth pak je de hele schermbreedte
var eenAfbeelding = window.innerWidth;

// Hiermee spreek je de volledige UL aan in de HTML
var carousel = document.querySelector("#foto-carousel");

// Met de Scrollwidth pak je de hele carousel, dus ook wat je iet op het scherm ziet
var carouselBreedte = carousel.scrollWidth;

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth

// De afstand tussen de carousel en de linkerkant van het scherm
var carouselScrollLinks = 0;

function scrollDeCarousel() {
  if (carouselScrollLinks >= carouselBreedte - eenAfbeelding) {
    carouselScrollLinks = 0;
  } else {
    carouselScrollLinks += eenAfbeelding;
  }
  // Hiermee spreek je de HTML aan en verplaatst de carousel zich daadwerkelijk, Je spreekt namelijk de UL aan met de Var
  carousel.scrollTo({
    left: carouselScrollLinks,
    behavior: "smooth",
  });
}

setInterval(scrollDeCarousel, 5000);


