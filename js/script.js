// тень nav при пролистывании
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    const sticky = nav.offsetTop;

    if (window.scrollY >= sticky) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
//

