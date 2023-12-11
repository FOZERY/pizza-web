$(document).ready(function () {
    let carousel = $('.h-carousel-items');
    let items = carousel.find('.b-carousel-block');
    let currentIndex = 0;
    let itemWidth = items.first().outerWidth(true);
    let visibleItems = 4;
    let totalItems = items.length;
    let wrapperWidth = itemWidth * visibleItems;

    function scrollItem(index) {
        let newPosition = -index * itemWidth;
        carousel.animate({ left: newPosition }, 500);
        currentIndex = index;
    }

    $('.b-carousel-button-left').click(function () {
        if (currentIndex > 0) {
            scrollItem(currentIndex - 1);
        } else {
            scrollItem(totalItems - visibleItems);
        }
    });

    $('.b-carousel-button-right').click(function () {
        if (currentIndex < totalItems - visibleItems) {
            scrollItem(currentIndex + 1);
        } else {
            scrollItem(0);
        }
    });

    scrollItem(currentIndex);
});
