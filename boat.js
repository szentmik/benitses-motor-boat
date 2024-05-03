const faqBtns = document.querySelectorAll(".faq-btns");
const faqPage = document.querySelector(".faq-page");
const faqCloseBtn = document.querySelector(".faq-close span")
const heroImgs = document.querySelectorAll(".hero-img");
const heroTexts = document.querySelectorAll(".hero-text");
const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");
const mobileMenuBtns = document.querySelectorAll(".nav-item");
const topBtn = document.querySelector(".top-btn");

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

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});