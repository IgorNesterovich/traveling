const burgerMenu = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.header__wrap');
const headerContent = document.querySelector('.header__content');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');

    if (document.querySelector('.header__wrap.active')) {
        headerContent.style.backgroundColor = 'transparent';
    } else {
        headerContent.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
});

const tabBtns = document.querySelectorAll('.tab__nav-btn');
const tabItems = document.querySelectorAll('.tab__item');

tabBtns.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        let deskId = currentBtn.getAttribute("data-desk");
        let currentDesk = document.querySelector(deskId);

        if(!currentBtn.classList.contains('active')) {
            tabBtns.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            currentDesk.classList.add('active');
        }
    });
});

document.querySelector('.tab__nav-btn').click();
