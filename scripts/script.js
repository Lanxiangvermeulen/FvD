// Dit is de breedte van het scherm. Met innerwidth pak je de hele schermbreedte
var eenAfbeelding = window.innerWidth;

// Hiermee spreek je de volledige UL aan in de HTML
var carousel = document.querySelector("body>header>ul:nth-of-type(2)");

if (carousel) {
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
}

var menu = document.querySelector("body>header>nav:nth-of-type(2)");
var overlay = document.querySelector("body>header>div");

var openKnop = document.querySelector("body>header>nav>ul>li>button");
var sluitKnop = document.querySelector(
  "body>header>nav:nth-of-type(2)>ul>li>button"
);

// https://dlo.mijnhva.nl/d2l/le/content/437031/viewContent/1547172/View
sluitKnop.addEventListener("click", sluitMenu);
openKnop.addEventListener("click", openMenu);

function sluitMenu() {
  menu.classList.add("verstopt-alleen-mobiel");
  overlay.classList.add("verstopt-alleen-mobiel");
}

function openMenu() {
  menu.classList.remove("verstopt-alleen-mobiel");
  overlay.classList.remove("verstopt-alleen-mobiel");
}

var assortimentKnop = document.querySelector(
  "header>nav:first-of-type>ul>li:nth-of-type(3)>button"
);
var assortiment = document.querySelector(
  "header>nav:first-of-type>ul>li:nth-of-type(3)>ul"
);

assortimentKnop.addEventListener("click", openAssortiment);

function openAssortiment() {
  assortiment.classList.toggle("verstopt-alles");
}

var winkelwagenTotaal = document.querySelector(
  "body>main>section>ul>li>p:nth-of-type(2)"
);
var winkelwagenPrijs = document.querySelector("body>main>ul>li>section>strong");

var winkelwagenInput = document.querySelector(
  "body>main>ul>li>section>menu>li>input"
);

var winkelwagenMinus = document.querySelector(
  "body>main>ul>li>section>menu>li:first-of-type>button"
);

var winkelwagenPlus = document.querySelector(
  "body>main>ul>li>section>menu>li:nth-of-type(3)>button"
);

if (winkelwagenPlus) {
  winkelwagenPlus.addEventListener("click", plusWinkelwagen);
}

if (winkelwagenMinus) {
  winkelwagenMinus.addEventListener("click", minusWinkelwagen);
}

function plusWinkelwagen() {
  // Als ik '+= 1' schrijf, komt er letterlijk een 1 erachter. Ik heb geen idee waarom.
  // Maar als ik een ++ doe dan telt hij wel gewoon op.
  // Ik kreeg de tip van Sjors van Holst om ++ te gebruiken
  winkelwagenInput.value++;

  winkelwagenPrijs.innerHTML = "€" + winkelwagenInput.value * 799 + ",00";
  winkelwagenTotaal.innerHTML = "€" + winkelwagenInput.value * 799 + ",00";
}

function minusWinkelwagen() {
  if (winkelwagenInput.value > 1) {
    winkelwagenInput.value--;
  } else {
    // https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
    window.location.replace("winkelwagen_leeg.html");
  }
}
