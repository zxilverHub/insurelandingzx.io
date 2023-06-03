const burger = document.querySelector('.burger'),
      mobile_nav = document.querySelector('.mobile-nav'),
      close = document.querySelector('.clsoe');
let n = 0;


burger.addEventListener('click', () => {
    mobile_nav.classList.toggle('block'); n++;
    changeBurger(n);
})

function changeBurger(b) {
    b%2 == 0? burger.src = './images/icon-hamburger.svg' : burger.src = './images/icon-close.svg'
}