const burgerMenu = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.header__wrap');
const headerContent = document.querySelector('.header__content');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');

    if (document.querySelector('.header__wrap.active')) {
        headerContent.style.backgroundColor = 'transparent';
    } else {
        headerContent.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
});
