window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const headerMenu = document.querySelector(".header__menu");
  const scrollToTopButton = document.querySelector(".scroll-top");

  hamburger.addEventListener("click", function (e) {
    headerMenu.classList.toggle("open-modal");
    document.body.classList.toggle("position-fixed");
  });

 try {

  if(scrollToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 500) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    });
  }
 } catch(e) {
  console.log(e);
 }

  function scrollToTop() {
    if(scrollToTopButton) {
      scrollToTopButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    }
  }

  scrollToTop();
});
