const menuItems = document.querySelector(".menu__items");
const menuBtn = document.querySelector(".menu__btn");
const headerContainer = document.querySelector(".header__container");

const openMenu = () => {
    menuItems.style.height = `${menuItems.scrollHeight}px`;
    headerContainer.style.marginBottom = `${menuItems.scrollHeight}px`;
}

const closeMenu = () => {
    menuItems.style.height = "";
    headerContainer.style.marginBottom = "";
}

menuBtn.addEventListener('click', (e) => {
    if (menuItems.offsetHeight == 0) {
        openMenu();
    }
    else {
        closeMenu();
    }
})

window.addEventListener('resize', (e) => {
    if (window.screen.width >= 1244 && menuItems.offsetHeight != 0) {
        closeMenu();
    }
})