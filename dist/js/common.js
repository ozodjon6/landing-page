window.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelector(".menu-list");
    const hamburger = document.querySelector(".hamburger");


    hamburger.addEventListener("click", function(e) {
        menuList.classList.toggle("open-modal");
        hamburger.classList.toggle("open-modal");
    });

});
