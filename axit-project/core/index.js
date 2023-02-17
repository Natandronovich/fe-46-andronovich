const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".header__burger");

const onBurgerClick = () => {
    sidebar.classList.toggle("sidebar_active");
    burger.classList.toggle("header__burger_active");
}