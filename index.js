const navbar = document.querySelector(".navbar");

window.onscroll = (e) => {
  if (this.scrollY > 50) {
    navbar.classList.add("bgScrolled");
  } else {
    navbar.classList.remove("bgScrolled");
  }
};

const justALanding = document.querySelectorAll(".inactive");

justALanding[0].addEventListener("click", () => {
  alert("This is just a landing page, so for now, no about section!");
});
justALanding[1].addEventListener("click", () => {
  alert("This is just a landing page, so for now, no services section!");
});
