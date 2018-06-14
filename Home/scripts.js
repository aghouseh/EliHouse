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
  // setTimeout("plusSlides(+1)", 3000); Automatic
}

// slideshow end
