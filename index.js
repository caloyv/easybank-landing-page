const gray = document.querySelector(".gray");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".mobile-menu-container");

menuBtn.addEventListener("click", () => {
    removeActive();
    closeBtn.classList.add("active");
    menu.classList.add("active");
    gray.classList.remove("hidden");
    document.body.classList.add("scroll-lock");
});
closeBtn.addEventListener("click", () => {
    removeActive();
    menuBtn.classList.add("active");
    gray.classList.add("hidden");
});

gray.addEventListener("click", () => {
    removeActive();
    menuBtn.classList.add("active");
    gray.classList.add("hidden");
});

const removeActive = () => {
    menuBtn.classList.remove("active");
    closeBtn.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("scroll-lock");
};
