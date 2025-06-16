document.addEventListener('DOMContentLoaded', () => {

    const treatmentList = [
        {
            id: "hyaluronic-acid-biostimulation",
            title: "Bioestimulación con Ácido Hialurónico",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "collagen-biostimulation",
            title: "Bioestimulación con Colágeno",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "prp-biostimulation",
            title: "Bioestimulación PRP",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "botox-fullface",
            title: "Botox Full-Face",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "chemical-peel",
            title: "Peeling Químico",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "plasmapen",
            title: "Plasmapen",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "bichectomy",
            title: "Bichectomía Enzimática",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "platelet-rich-plasma",
            title: "Plasma Rico en Plaquetas",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "double-chin-reduction",
            title: "Reducción de Papada",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "lip-filler",
            title: "Relleno de Labios",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "tear-trough-filler",
            title: "Relleno de Ojeras",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "non-surgical-rhinoplasty",
            title: "Rinomodelación con Ácido Hialurónico",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "botulinum-toxin",
            title: "Toxina Botulínica",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "alopecia",
            title: "Alopecia",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "anti-acne",
            title: "Anti Ácne",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "hollywood-peel",
            title: "Hollywood Peel",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "gummy-smile",
            title: "Sonrisa Gingival",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "IV-therapy",
            title: "Sueroterapia",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "vampire-facial",
            title: "Vampiro Facial",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "fat-reduction",
            title: "Disminución de Grasa",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "lipolytic-enzymes",
            title: "Encimas Lipolíticas",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "mesotherapy",
            title: "Mesoterapia",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "scar-reduction",
            title: "Reducción de Cicatrices",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        },
        {
            id: "wart-removal",
            title: "Retiro de verrugas",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ]
        }
    ];

    const phrases = [
        { title: "Confianza y Estilo", subtitle: "Luce tu mejor versión" },
        { title: "Tu Esencia, Mejorada", subtitle: "Vive tu mejor versión" },
        { title: "Detalles que Transforman", subtitle: "Despierta tu mejor versión" },
        { title: "Cuidado Personalizado", subtitle: "Tu mejor versión empieza aquí" },
        { title: "Tratamientos con Propósito", subtitle: "Conquista tu mejor versión" }
    ];

    const params = new URLSearchParams(window.location.search);
    const treatmentId = params.get('id');
    const currentTreatment = treatmentList.find(t => t.id === treatmentId) || treatmentList[0];
    const container = document.querySelector('.carousel-images');
    const titleElement = document.querySelector('.treatment-title');
    const titleTagline = document.querySelector('.treatment-tagline-title');
    const subtitleTagline = document.querySelector('.treatment-tagline-subtitle');

    let currentIndex = 0;
    let currentIndexTagline = Math.floor(Math.random() * 5);
    let intervalId;

    // ================================================== TagLine 
    titleTagline.style.opacity = 0;
    subtitleTagline.style.opacity = 0;

    function updateTagline() {
        titleTagline.style.opacity = 0;
        subtitleTagline.style.opacity = 0;

        setTimeout(() => {
            const phrase = phrases[currentIndexTagline];

            titleTagline.textContent = phrase.title;
            subtitleTagline.textContent = phrase.subtitle;

            requestAnimationFrame(() => {
                titleTagline.style.opacity = 1;
                subtitleTagline.style.opacity = 1;
            });

            currentIndexTagline = (currentIndexTagline + 1) % phrases.length;
        }, 1000);
    }

    (function initialFadeIn() {
        const phrase = phrases[currentIndexTagline];

        titleTagline.textContent = phrase.title;
        subtitleTagline.textContent = phrase.subtitle;

        requestAnimationFrame(() => {
            titleTagline.style.opacity = 1;
            subtitleTagline.style.opacity = 1;
        });

        currentIndexTagline = (currentIndexTagline + 1) % phrases.length;
    })();

    setInterval(updateTagline, 20000);

    // ================================================== Carrusel dinámico
    titleElement.textContent = currentTreatment.title;
    currentTreatment.images.forEach((path, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-img');
        if (index === 0) div.classList.add('active');

        const img = document.createElement('img');
        img.src = path;
        img.alt = `img${index + 1}`;

        div.appendChild(img);
        container.appendChild(div);
    });


    let images = document.querySelectorAll('.carousel-img');

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
