function sliderMaker(slider,videos, images,pid){
  //console.log("videos",videos);
  // Get the slider container and slider track elements
  const sliderContainer = slider;
  const sliderTrack = slider.querySelector(".slider-track");
  const sliderBtnPrev = slider.querySelector(".slider-btn-prev");
  const sliderBtnNext = slider.querySelector(".slider-btn-next");
  //console.log("slider",slider);
  // Loop through the image URLs in the object and create img elements
  let s=0;
  for(i=0;i<videos.length;i++){
    video_id = `video-${pid}-${i}`
    console.log("videos:"+i,videos[i]);
    const videodiv = document.createElement("div");
    const video = document.createElement('video');
    video.muted = true;
    video.preload="auto";
    const source = document.createElement('source');
    source.src = "https://www.w3schools.com/tags/movie.mp4"; //videos[i];
    source.type = "video/mp4";
    video.id = video_id
    video.appendChild(source)
    const PlayButton = document.createElement("div");
    PlayButton.class="play-button";
    video.appendChild(PlayButton)
    videodiv.appendChild(video);

    const playButton = document.createElement('img');
    playButton.src = '/images/play.png';
    playButton.style.width = '50%';
    playButton.style.height = '50%';
    playButton.style.cursor = 'pointer';
    playButton.addEventListener('click', () => {
      video.play();
      overlay.style.display = 'none';
    });
    overlay.appendChild(playButton);
    videodiv.appendChild(overlay);
    sliderTrack.appendChild(videodiv);
  }
  
  for (let image in images) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("id", `${pid}_product_image`);
    img.setAttribute("src", images[image]);
    div.appendChild(img);
    sliderTrack.appendChild(div);
  }
  // Set the width of the slider track based on the number of images and videos
  const numImages = Object.keys(images).length;
  let maxIndex = numImages + videos.length;
  sliderTrack.style.width = `${(maxIndex)*100}%`;

  // Initialize the slider with the first image
  let currentIndex = 0;
  const sliderImgs = sliderTrack.querySelectorAll("img");
  sliderImgs[currentIndex].classList.add("active");

  function slideTo(index) {
    currentIndex = index;
    sliderTrack.style.transform = `translateX(-${(currentIndex * 100)/maxIndex}%)`;
  }

  sliderBtnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    } else {
      slideTo(maxIndex-1);
    }
  });

  sliderBtnNext.addEventListener("click", () => {
    if (currentIndex < maxIndex-1) {
      slideTo(currentIndex + 1);
    } else {
      slideTo(0);
    }
  });

  slideTo(currentIndex);

  let elementsOnhover = [sliderContainer, sliderBtnPrev, sliderBtnNext];
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

  imgs= sliderContainer.querySelectorAll("div.slider-track img");
  videos= sliderContainer.querySelectorAll("div.slider-track video");
  let rm=0;
  setTimeout(()=>{
    imgs.forEach(img=>{
      const aspectRatio = img.naturalWidth/img.naturalHeight;
      const newHeight = 300/aspectRatio;
      rm = (newHeight>rm) ? newHeight:rm;
      sliderContainer.style.width="300px";
      sliderContainer.style.height=`${rm}px`;
      if(aspectRatio<1){
        img.style.height=`${rm}px`;
      }
      img.style.width="300px";
    });      
  },900);
  videos.forEach(video=>{
    video.style.width="300px";
  })
}
