window.addEventListener('scroll', function() {
    var bannerEnd = document.querySelector('.banner-end');
    if (window.scrollY > 100) { 
        bannerEnd.classList.add('visible');
    } else {
        bannerEnd.classList.remove('visible');
    }
});

const modal = document.getElementById('confirmation-modal');
const followBtn = document.getElementById('follow-btn');
const followBtn2 = document.getElementById('follow-btn-2');
const followBtn3 = document.getElementById('follow-btn-3');
const followBtn4 = document.getElementById('follow-btn-4');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');


followBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});
followBtn2.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});
followBtn3.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});
followBtn4.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});


confirmYes.addEventListener('click', function() {
    modal.style.display = 'none';
  
    alert('Đã theo dõi!');
});


confirmNo.addEventListener('click', function() {
    modal.style.display = 'none';
});
//
document.addEventListener('scroll', function() {
    const bannerEnd = document.querySelector('.banner-end');
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

 
    if (scrollTop + viewportHeight < documentHeight) {
        bannerEnd.classList.add('show');
        bannerEnd.classList.remove('hide');
    } else {
       
        bannerEnd.classList.add('hide');
        bannerEnd.classList.remove('show');
    }
});


window.addEventListener('resize', function() {
    const bannerEnd = document.querySelector('.banner-end');
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + viewportHeight < documentHeight) {
        bannerEnd.classList.add('show');
        bannerEnd.classList.remove('hide');
    } else {
        bannerEnd.classList.add('hide');
        bannerEnd.classList.remove('show');
    }
});