let currentSlide = 1;
const totalSlides = 13;

const videos = document.querySelectorAll('.image-container video');
const dots = document.querySelectorAll('.dot-container button');

function showSlide(slideIndex) {
    if (slideIndex > totalSlides) {
        currentSlide = 1;
    } else if (slideIndex < 1) {
        currentSlide = totalSlides;
    } else {
        currentSlide = slideIndex;
    }

    videos.forEach((video, index) => {
        video.classList.remove('active');
        video.muted = true;
        video.pause();
        if (index === currentSlide - 1) {
            video.classList.add('active');
            video.currentTime = 0;  
            video.muted = false;
            video.play();
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide - 1) {
            dot.classList.add('active');
        }
    });
}

function next() {
    showSlide(currentSlide + 1);
}

function prev() {
    showSlide(currentSlide - 1);
}

function dot(slideIndex) {
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
