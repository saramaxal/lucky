// MENU SETTINGS

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

// ANIMATION SPIN

const startSpin = () => {
    const heroFlags = document.querySelectorAll(".hero__wrap-flag, .hero__flag");
    heroFlags.forEach(element => {
        element.style.setProperty("--spinState", "running");
    });
}

setTimeout(startSpin, 7000);

//FORM SETTINGS
const buttonFind = document.querySelector('.hero__button-find');
const formFind = document.querySelector('.hero__form');
const heroInput = document.querySelector('.hero__input');
const heroWrapInput = document.querySelector('.hero__wrap-input');

const errorSubmit = (errorText, event) => {
    heroWrapInput.classList.add("hero__wrap-input_error");
    heroWrapInput.style.setProperty("--error-val", errorText);
    event.preventDefault();
    console.error("Отправка не удалась");
}

const formSubmit = (event) => {
    if (heroInput.value.length < 4) {
        errorSubmit("'Длина меньше 4 символов'", event);
    }
    else if (heroInput.value.search(/[\!\@\#\$\%\^\&\*\(\)]/) >= 0) {
        errorSubmit("'Недопустимые символы: !@#$%^&*()'", event);
    }

    else {
        if (heroWrapInput.classList.contains("hero__wrap-input_error"))
            heroWrapInput.classList.remove("hero__wrap-input_error");
        console.log("Отправка удалась");
    }
}

const inputTextChange = (event) => {
    if (heroWrapInput.classList.contains("hero__wrap-input_error"))
        heroWrapInput.classList.remove("hero__wrap-input_error");
    if (heroInput.value.search(/[\!\@\#\$\%\^\&\*\(\)]/) >= 0) {
        heroInput.value = heroInput.value.replace(/[\!\@\#\$\%\^\&\*\(\)]/, '');
    }
}

formFind.addEventListener("submit", formSubmit);
heroInput.addEventListener("input", inputTextChange);