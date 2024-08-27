let slideIndex = 0;
let timer;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  clearTimeout(timer);
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("slide").length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = document.getElementsByClassName("slide").length}
  showSlidesManual(slideIndex);
}

function currentSlide(n) {
  clearTimeout(timer);
  slideIndex = n;
  showSlidesManual(slideIndex);
}

function showSlidesManual(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 3000); // Restart automatic sliding
}