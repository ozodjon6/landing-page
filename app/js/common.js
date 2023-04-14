window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__menu");
    // const selectedProjectsItem = document.querySelectorAll('.selected-projects__item');


    hamburger.addEventListener("click", function(e) {
        headerMenu.classList.toggle("open-modal");
        document.body.classList.toggle('position-fixed');
    });



    // for(let i = 0; i < selectedProjectsItem.length; i++) {
    //     selectedProjectsItem[i].addEventListener("click", function(e) {
    //         e.preventDefault();
    //     });
    // }

});
