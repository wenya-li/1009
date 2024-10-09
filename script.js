const videoGallery = document.querySelector('.video-gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const videoWidth = 580; // 包括 iframe 的寬度和邊距

nextButton.addEventListener('click', () => {
    if (currentIndex < videoGallery.children.length - 1) {
        currentIndex++;
        updateGalleryPosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGalleryPosition();
    }
});

function updateGalleryPosition() {
    const offset = -currentIndex * videoWidth; // 計算偏移量
    videoGallery.style.transform = `translateX(${offset}px)`; // 更新位置
}