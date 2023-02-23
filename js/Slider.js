// Define the image URLs in an object
const images = {
  "image1": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "image2": "https://cdn.pixabay.com/photo/2017/04/25/06/15/father-and-son-2258681__340.jpg",
  "image3": "https://cdn.pixabay.com/photo/2022/11/04/19/17/alone-7570547_640.jpg"
};

// Get the slider container and slider track elements
const sliderContainer = document.querySelector(".slider-container");
const sliderTrack = document.querySelector(".slider-track");
const slider = document.querySelector(".slider");
const sliderBtnPrev = document.querySelector(".slider-btn-prev");
const sliderBtnNext = document.querySelector(".slider-btn-next");

// Loop through the image URLs in the object and create img elements
for (let image in images) {
  const img = document.createElement("img");
  img.setAttribute("src", images[image]);
  sliderTrack.appendChild(img);
}

// Set the width of the slider track based on the number of images
const numImages = Object.keys(images).length;
sliderTrack.style.width = `${numImages * 100}%`;

// Initialize the slider with the first image
let currentIndex = 0;
const sliderImgs = sliderTrack.querySelectorAll("img");
sliderImgs[currentIndex].classList.add("active");

let maxIndex = sliderImgs.length - 1;
function slideTo(index) {
  currentIndex = index;
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

sliderBtnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  } else {
    slideTo(maxIndex);
  }
});

sliderBtnNext.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    slideTo(currentIndex + 1);
  } else {
    slideTo(0);
  }
});

slideTo(currentIndex);

elementsOnhover = [slider, sliderBtnPrev, sliderBtnNext];
elementsOnhover.forEach(
  elm=>{elm.addEventListener("mouseenter", () => {   
    document.querySelectorAll(".slider-btn").forEach(btn=>{btn.style.border='solid';})
    sliderBtnPrev.style.backgroundColor="white";
    sliderBtnNext.style.backgroundColor="white";
  });
  elm.addEventListener("mouseleave", () => {   
    document.querySelectorAll(".slider-btn").forEach(btn=>{btn.style.border='solid';})
    sliderBtnPrev.style.backgroundColor="";
    sliderBtnNext.style.backgroundColor="";
  });
});
                              

