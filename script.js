let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY >= 100) {
    imgImprovise.style.transform = "none";
    imgImprovise.style.opacity = 1;
  }

  if (window.scrollY >= 500 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
