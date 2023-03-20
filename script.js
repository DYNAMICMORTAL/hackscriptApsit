const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");
const movingContainer = document.querySelector(".marquee")

searchButton.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
})
closeButton.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
})
overlay.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}