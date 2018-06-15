// slideshow attempt
  // var i = 0; // starting point
  // var images = document.querySelectorAll('.mySlides');
  // var mySlide = document.getElementById('slideshow-image');
  // var currentSlide = images[i];
  //
  // function plusSlides(i) {
  //   changeImg(currentSlide += i);
  // }
  //
  // function minusSlides(i) {
  //   changeImg(currentSlide =- i);
  // }
  //
  // function changeImg() {
  //   if (i < images.length - 1) {
  //     i++;
  //   } else {
  //     i = 0;
  //   }
  //   images[i].style.display = "block";
  //   images[i-1].style.display = "none";
  // }
  //
  // window.onload = changeImg();






// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

  // setTimeout("plusSlides(+1)", 3000);


// slideshow end

// mobile hamburger Menu

var menuOpenButton = document.getElementById("menu-button");
var menuCancelButton = document.getElementById("cancel-button");
var nav = document.getElementById("nav-ul");

function showMenu() {
  nav.style.display = "block";
}

function hideMenu() {
  nav.style.display = "none";
}

function changeToCancel() {
  menuOpenButton.style.display = "none";
  menuCancelButton.style.display = "block";
}

function changeToMenu() {
  menuCancelButton.style.display = "none";
  menuOpenButton.style.display = "block";
}

menuOpenButton.addEventListener("click", function() {
  showMenu();
  changeToCancel();
});

menuCancelButton.addEventListener("click", function() {
    hideMenu();
    changeToMenu();
});

// mobile hamburger menu end
