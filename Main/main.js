window.addEventListener('scroll', function() {
    var bannerEnd = document.querySelector('.banner-end');
    if (window.scrollY > 100) { // Adjust this value to control when the div appears
        bannerEnd.classList.add('visible');
    } else {
        bannerEnd.classList.remove('visible');
    }
});





