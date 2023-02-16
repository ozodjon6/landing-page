window.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelector(".menu-list");
    const hamburger = document.querySelector(".hamburger");
    const selectedProjectsItem = document.querySelectorAll('.selected-projects__item');


    hamburger.addEventListener("click", function(e) {
        menuList.classList.toggle("open-modal");
        hamburger.classList.toggle("open-modal");
    });

    selectedProjectsItem.addEventListener("click", function(e) {
        e.preventDefault();
    });

});
