function ImageSlider() {
  let SlideImages = document.querySelectorAll(".slider-container img"),
    SlideNumber = document.getElementById("slide-number"),
    CurrentSlideNumber = 1,
    NextBtn = document.getElementById("next"),
    PrevBtn = document.getElementById("prev"),
    NumberOfImages = SlideImages.length;
  SlideNumber.innerHTML = `#${CurrentSlideNumber}`;

  NextBtn.addEventListener("click", () => {
    if (CurrentSlideNumber < NumberOfImages) {
      CurrentSlideNumber++;
      SlideNumber.innerHTML = `#${CurrentSlideNumber}`;
      Checker();
    }
  });
  PrevBtn.addEventListener("click", () => {
    if (CurrentSlideNumber > 1) {
      CurrentSlideNumber--;
      SlideNumber.innerHTML = `#${CurrentSlideNumber}`;
      Checker();
    }
  });

  SlideImages.forEach((img, index) => {
    img.setAttribute("data-index", index + 1);
  });

  function Checker() {
    removeAllActive();

    SlideImages[CurrentSlideNumber - 1].classList.add("active");
    if (CurrentSlideNumber === NumberOfImages) {
      NextBtn.classList.add("disable");
    } else if (CurrentSlideNumber <= 1) {
      PrevBtn.classList.add("disable");
    } else {
      PrevBtn.classList.remove("disable");
      NextBtn.classList.remove("disable");
    }
  }
  // Remove All Active Classes From Images and Pagination Bullets
  function removeAllActive() {
    // Loop Through Images
    SlideImages.forEach(function (img) {
      img.classList.remove("active");
    });
  }
}
ImageSlider();
