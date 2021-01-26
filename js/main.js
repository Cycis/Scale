const navItems = document.querySelectorAll('.nav-items');
const navBar = document.querySelector('.header')

const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close');

const gotoTop = document.querySelector('.goto-top');



hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})

closeNav.addEventListener('click', () => {
    nav.classList.remove('show')
})

navItems.forEach(items => items.addEventListener('click', navigation));

function navigation() {
    navItems.forEach(items => items.classList.remove('active'));
    this.classList.toggle('active');
    nav.classList.remove('show');
}
window.addEventListener('scroll', e => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add('fix__nav');
    } else {
        navBar.classList.remove('fix__nav');
    }

    if (scrollHeight > 300) {
        gotoTop.classList.add('show-top');
    } else {
        gotoTop.classList.remove('show-top');
    }
});