function scrollToElement(id) {
    event.preventDefault();

    let element = document.getElementById(id);
    let navHeight = document.querySelector('.nav').offsetHeight;
    let offset = element.offsetTop - navHeight;

    window.scrollTo({ top: offset, behavior: 'smooth' });
}

document.querySelectorAll('.navbutton').forEach(function (element) {
    element.addEventListener('click', function (event) {
        scrollToElement(event.target.hash.substring(1));
    });
});
