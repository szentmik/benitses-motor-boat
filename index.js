const faqBtns = document.querySelectorAll(".faq-btns");
const faqPage = document.querySelector(".faq-page");
const faqCloseBtn = document.querySelector(".faq-close span")
const heroImgs = document.querySelectorAll(".hero-img");
const heroTexts = document.querySelectorAll(".hero-text");
const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");
const mobileMenuBtns = document.querySelectorAll(".nav-item");

// faqBtn.addEventListener("click", ()=>{
//     faqPage.classList.toggle("show-faq");
// });

mobileNavBtns.forEach((navBtn, n) => {
    navBtn.addEventListener("click", () => {
        mobileNavBtns[0].classList.toggle("show-mm-btn");
        mobileNavBtns[1].classList.toggle("show-mm-btn");
        document.querySelector(".nav-items").classList.toggle("show-navigation");
    });
});

mobileMenuBtns.forEach((menuBtn, n) => {
    menuBtn.addEventListener("click", () => {
        document.querySelector(".nav-items").classList.remove("show-navigation");
        mobileNavBtns[0].classList.add("show-mm-btn");
        mobileNavBtns[1].classList.remove("show-mm-btn");
    });
})

faqBtns.forEach((btn, n) => {
    btn.addEventListener("click", () => {
        faqPage.classList.toggle("show-faq");
        faqCloseBtn.classList.toggle("rotate");
        console.log(btn);
    });
});



let slideIndex = 0;
const carousel = () => {
    heroImgs.forEach((heroImg) => {
        heroImg.classList.remove("show-hero-img");
    });

    heroTexts.forEach((heroText) => {
        heroText.classList.remove("show-hero-text");
    });

    slideIndex++;
    if (slideIndex > heroImgs.length - 1) {
        slideIndex = 0;
    }

    heroImgs[slideIndex].classList.add("show-hero-img");
    heroTexts[slideIndex].classList.add("show-hero-text");

}
setInterval(carousel, 4000);

