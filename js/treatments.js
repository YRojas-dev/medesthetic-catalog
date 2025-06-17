document.addEventListener('DOMContentLoaded', () => {

    const treatmentList = [
        {
            id: "hyaluronic-acid-biostimulation",
            title: "Bioestimulación con Ácido Hialurónico",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ],
            description: "Es un tratamiento que mejora la hidratación y elasticidad de la piel desde el interior. Ideal para personas que quieren prevenir el envejecimiento o mejorar la apariencia cansada y opaca del rostro.",
            benefits: [
                "Hidrata profundamente la piel",
                "Mejora firmeza y elasticidad",
                "Aporta luminosidad al rostro",
                "Suaviza líneas de expresión finas"
            ],
            treatment: "Se aplican microinyecciones con ácido hialurónico de baja densidad en áreas específicas del rostro. Mínimamente invasivo, sin necesidad de reposo, puedes continuar tu día normalmente.",
            sessions: [[2, 4], [2, 4, "semanas"], [30, 45, "minutos"]],
            results: [
                "Piel más hidratada y luminosa desde la primera sesión",
                "Mejoras progresivas en textura y firmeza en 4 a 6 semanas",
            ],
            recommendations: [
                "Evitar exposición al sol directa por 24-48 horas",
                "Usar protector solar e hidratar la piel",
                "No masajear la zona ni realizar ejercicio intenso el mismo día"
            ],
            indications: "Ideal para pieles deshidratadas, personas jóvenes que desean prevenir arrugas",
            contraindications: "No se recomienda en embarazadas, personas con infecciones activas en la piel o enfermedades autoinmunes",
            aftereffect: "Enrojecimiento leve o pequeños moretones en la zona tratada, que desaparecen en pocos días"
        },
        {
            id: "collagen-biostimulation",
            title: "Bioestimulación con Colágeno",
            images: [
                "../img/treatments/anti-aging/botox-fullface.jpg",
                "../img/treatments/anti-aging/collagen-biostimulation.jpg",
                "../img/treatments/anti-aging/plasmapen.jpg"
            ],
            description: "Es un tratamiento que mejora la hidratación y elasticidad de la piel desde el interior. Ideal para personas que quieren prevenir el envejecimiento o mejorar la apariencia cansada y opaca del rostro.",
            benefits: [
                "Hidrata profundamente la piel",
                "Mejora firmeza y elasticidad",
                "Aporta luminosidad al rostro",
                "Suaviza líneas de expresión finas"
            ],
            treatment: "Se aplican microinyecciones con ácido hialurónico de baja densidad en áreas específicas del rostro. Mínimamente invasivo, sin necesidad de reposo, puedes continuar tu día normalmente.",
            sessions: [[2, 4], [2, 4, "semanas"], [30, 45, "minutos"]],
            results: [
                "Piel más hidratada y luminosa desde la primera sesión",
                "Mejoras progresivas en textura y firmeza en 4 a 6 semanas",
            ],
            recommendations: [
                "Evitar exposición al sol directa por 24-48 horas",
                "Usar protector solar e hidratar la piel",
                "No masajear la zona ni realizar ejercicio intenso el mismo día"
            ],
            indications: "Ideal para pieles deshidratadas, personas jóvenes que desean prevenir arrugas",
            contraindications: "No se recomienda en embarazadas, personas con infecciones activas en la piel o enfermedades autoinmunes",
            aftereffect: "Enrojecimiento leve o pequeños moretones en la zona tratada, que desaparecen en pocos días"
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

    // ===================== OBTENER TRATAMIENTO =====================
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const treatmentId = getQueryParam('id');
    const treatment = treatmentList.find(t => t.id === treatmentId) || treatmentList[0];

    // ===================== ELEMENTOS DOM =====================
    const container = document.querySelector('.carousel-images');
    const treatmentTitle = document.querySelector('.treatment-title');
    const treatmentDescription = document.querySelector('.treatment-description');
    const treatmentBenefits = document.querySelector('.benefits-dots');
    const treatmentMethod = document.querySelector('.applicationMethod-text');
    const benefitsImg = document.querySelector('.benefits-image img');
    const sessionsContent = document.querySelector('.sessions-content');
    const wrapper = document.querySelector('.design-wrapper');
    const resultsContainer = document.getElementById("results-section");
    const recommendationsContainer = document.getElementById("recommendations-section");
    const indicationsContainer = document.getElementById("indicationsContraindications-section");
    const aftereffectContainer = document.getElementById("aftereffect-section");
    const whatsappBtn = document.getElementById('whatsapp-button');

    // ===================== CARRUSEL =====================
    let currentIndex = 0;
    let intervalId;

    function renderCarousel(images) {
        images.forEach((path, index) => {
            const div = document.createElement('div');
            div.classList.add('carousel-img');
            if (index === 0) div.classList.add('active');

            const img = document.createElement('img');
            img.src = path;
            img.alt = `img${index + 1}`;

            div.appendChild(img);
            container.appendChild(div);
        });
    }

    function showImage(nextIndex) {
        if (nextIndex === currentIndex) return;

        const images = document.querySelectorAll('.carousel-img');
        const currentImage = images[currentIndex];
        const nextImage = images[nextIndex];

        nextImage.style.opacity = 0;
        nextImage.classList.add('active');
        nextImage.style.zIndex = 3;
        currentImage.style.opacity = 1;
        currentImage.style.zIndex = 2;

        void nextImage.offsetHeight;

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
        const images = document.querySelectorAll('.carousel-img');
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    function prevImage() {
        const images = document.querySelectorAll('.carousel-img');
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(prevIndex);
    }

    function startInterval() {
        intervalId = setInterval(nextImage, 10000);
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    // ===================== CONTENIDO PRINCIPAL =====================
    renderCarousel(treatment.images);
    document.getElementById('next-btn').addEventListener('click', () => { nextImage(); resetInterval(); });
    document.getElementById('prev-btn').addEventListener('click', () => { prevImage(); resetInterval(); });

    treatmentTitle.textContent = treatment.title;
    treatmentDescription.textContent = treatment.description;
    treatmentMethod.textContent = treatment.treatment;
    wrapper.classList.add('reveal');

    // ===================== BENEFICIOS =====================
    const benefitImages = [
        "../img/treatments/view-img/benefits-img1.jpg",
        "../img/treatments/view-img/benefits-img2.jpg",
        "../img/treatments/view-img/benefits-img3.jpg",
        "../img/treatments/view-img/benefits-img4.jpg",
        "../img/treatments/view-img/benefits-img5.jpg",
        "../img/treatments/view-img/benefits-img6.jpg",
    ];

    benefitsImg.src = benefitImages[Math.floor(Math.random() * benefitImages.length)];
    treatmentBenefits.innerHTML = treatment.benefits.map(b => `<li>${b}</li>`).join("");

    // ===================== SESIONES =====================
    const sessionData = [
        {
            title: "Número de sesiones",
            icon: "session-icon1.png",
            range: treatment.sessions[0],
            format: r => r.length === 1 ? `${r[0]} sesiones` : `${r[0]} a ${r[1]} sesiones`
        },
        {
            title: "Cada",
            icon: "session-icon2.png",
            range: treatment.sessions[1],
            format: r => r.length === 2 ? `${r[0]} ${r[1]}` : `${r[0]} a ${r[1]} ${r[2]}`
        },
        {
            title: "Duración aproximada",
            icon: "session-icon3.png",
            range: treatment.sessions[2],
            format: r => r.length === 2 ? `${r[0]} ${r[1]}` : `${r[0]} a ${r[1]} ${r[2]}`
        }
    ];

    sessionsContent.innerHTML = sessionData.map((item, i) => `
    <div class="session-card ${i === 1 ? "middle" : ""}">
        <div class="session-icon">
            <img src="../img/treatments/view-img/${item.icon}" alt="icon">
        </div>
        <h3>${item.title}</h3>
        <p>${item.format(item.range)}</p>
    </div>
    `).join("");

    // ===================== RESULTADOS =====================
    if (treatment.results?.length) {
        resultsContainer.innerHTML = `
        <div class="results-left">
            <div class="circle">
                <img src="../img/treatments/view-img/results-icon1.png" alt="Resultados">
            </div>
        </div>
        <div class="results-right">
            <h2>Resultados</h2>
            <div class="line"></div>
            <div class="text">
                <ul>${treatment.results.map(r => `<li>${r}</li>`).join("")}</ul>
            </div>
        </div>
    `;
    }

    // ===================== RECOMENDACIONES =====================
    if (treatment.recommendations?.length) {
        recommendationsContainer.innerHTML = `
        <div class="recommendations-left">
            <h2>Cuidados y Recomendaciones</h2>
            <div class="line"></div>
            <div class="text">
                <ul>${treatment.recommendations.map(r => `<li>${r}</li>`).join("")}</ul>
            </div>
        </div>
        <div class="recommendations-right">
            <div class="circle">
                <img src="../img/treatments/view-img/results-icon2.png" alt="Recomendaciones">
            </div>
        </div>
    `;
    }

    // ===================== INDICACIONES =====================
    indicationsContainer.innerHTML = `
    <div class="indication-box">
        <img src="../img/treatments/view-img/indications-icon.png" alt="Indicaciones">
        <h3>Indicaciones</h3>
        <p>${treatment.indications}</p>
    </div>
    <div class="contraindication-box">
        <img src="../img/treatments/view-img/contraindications-icon.png" alt="Contraindicaciones">
        <h3>Contraindicaciones</h3>
        <p>${treatment.contraindications}</p>
    </div>
`;

    // ===================== EFECTOS SECUNDARIOS =====================
    if (treatment.aftereffect) {
        aftereffectContainer.innerHTML = `
        <div class="aftereffect-title">
            <h3>Posibles Efectos Secundarios</h3>
        </div>
        <p class="aftereffect-text">${treatment.aftereffect}</p>
    `;
    }

    // ===================== WHATSAPP =====================
    function actualizarLinkWhatsApp() {
        if (!whatsappBtn) return;

        const mensaje = treatment
            ? `Hola, quisiera más información sobre el tratamiento de ${treatment.title}, por favor.`
            : 'Hola, quisiera más información sobre el tratamiento de medicina estética, por favor.';

        const mensajeCodificado = encodeURIComponent(mensaje);
        const numero = '5212213677773';

        whatsappBtn.href = `https://wa.me/${numero}?text=${mensajeCodificado}`;
    }

    window.addEventListener('DOMContentLoaded', () => {
        actualizarLinkWhatsApp();
        startInterval();
    });

});