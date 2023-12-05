function scrollToElement(id) {
    event.preventDefault();
    const mediaQuery = window.matchMedia('(max-width: 860px)');

    let element = document.getElementById(id);
    let navHeight = document.querySelector('.nav').offsetHeight;

    let offset;
    if (mediaQuery.matches) {
        offset = element.offsetTop;
    } else {
        offset = element.offsetTop - navHeight;
    }
    window.scrollTo({ top: offset, behavior: 'smooth' });
}

document.querySelectorAll('.navbutton').forEach(function (element) {
    element.addEventListener('click', function (event) {
        scrollToElement(event.target.hash.substring(1));
    });
});
