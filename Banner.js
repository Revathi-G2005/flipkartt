// JavaScript for handling banner change
const banners = ['assets/banner.png', 'assets/banner2.png', 'assets/banner3.png'];
let currentIndex = 0;

function handleNext() {
  currentIndex = (currentIndex + 1) % banners.length;
  document.getElementById('bannerImage').src = banners[currentIndex];
}

function handlePrev() {
  currentIndex = (currentIndex - 1 + banners.length) % banners.length;
  document.getElementById('bannerImage').src = banners[currentIndex];
}
