document.addEventListener('DOMContentLoaded', () => {
    const imagePaths = [
        "../img/treatments/anti-aging/collagen-biostimulation.jpg",
        "../img/treatments/anti-aging/botox-fullface.jpg",
        "../img/treatments/anti-aging/plasmapen.jpg"
    ];

    const container = document.querySelector('.carousel-images');

    // Crear e insertar imágenes
    imagePaths.forEach((path, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-img');
        if (index === 0) div.classList.add('active');

        const img = document.createElement('img');
        img.src = path;
        img.alt = `img${index + 1}`;

        div.appendChild(img);
        container.appendChild(div);
    });

    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;
    let intervalId;

    function showImage(nextIndex) {
        if (nextIndex === currentIndex) return;

        const currentImage = images[currentIndex];
        const nextImage = images[nextIndex];

        nextImage.style.opacity = 0;
        nextImage.classList.add('active');
        nextImage.style.zIndex = 3;

        currentImage.style.opacity = 1;
        currentImage.style.zIndex = 2;

        nextImage.offsetHeight; 

        currentImage.style.opacity = 0;
        nextImage.style.opacity = 1;

        setTimeout(() => {
            currentImage.classList.remove('active');
            currentImage.style.zIndex = 0;
            nextImage.style.zIndex = 2;
            currentIndex = nextIndex;
        }, 1000);
    }

    function nextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    function prevImage() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(prevIndex);
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        nextImage();
        resetInterval();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        prevImage();
        resetInterval();
    });

    function startInterval() {
        intervalId = setInterval(nextImage, 10000);
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    images.forEach((img, i) => {
        img.style.opacity = i === 0 ? 1 : 0;
        if (i === 0) img.classList.add('active');
    });

    startInterval();
});
