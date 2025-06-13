document.addEventListener('DOMContentLoaded', () => {
    const copyLicense = document.getElementById('license');
    const copyEmail = document.getElementById('copy-btn-email');
    const copyPhone = document.getElementById('copy-btn-phone');
    const toast = document.getElementById('toast');
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    const renderCache = {};

    // ======================================= Toast ======================================= 
    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    if (copyLicense) {
        copyLicense.addEventListener('click', () => {
            navigator.clipboard.writeText('13196138')
                .then(showToast)
                .catch(err => console.error('Error al copiar: ', err));
        });
    }

    if (copyEmail) {
        copyEmail.addEventListener('click', () => {
            navigator.clipboard.writeText('dr.aguilarmestetico@gmail.com')
                .then(showToast)
                .catch(err => console.error('Error al copiar: ', err));
        });
    }

    if (copyPhone) {
        copyPhone.addEventListener('click', () => {
            navigator.clipboard.writeText('2213677773')
                .then(showToast)
                .catch(err => console.error('Error al copiar: ', err));
        });
    }

    // ======================================= Tratamientos ======================================= 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => {
                content.style.display = 'none';
                content.querySelectorAll('.treatment-card').forEach(card => {
                    card.classList.remove('animate-in');
                });
            });

            const tabId = button.getAttribute('data-tab');
            const activeContent = document.getElementById(tabId);
            activeContent.style.display = 'block';
            button.classList.add('active');

            setTimeout(() => {
                activeContent.querySelectorAll('.treatment-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 100);
                });
            }, 50);
        });
    });

    // Ejecutar animación al cargar página
    window.addEventListener('load', () => {
        const activeContent = document.querySelector('.tab-content.active');
        if (activeContent) {
            activeContent.querySelectorAll('.treatment-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 100);
            });
        }
    });

    // Orden de Tarjetas
    const treatmentsAntiAging = [
        { title: "Bioestimulación con Ácido Hialurónico", image: "img/treatments/anti-aging/hyaluronic-acid-biostimulation.jpg", desc: "Hidrata profundamente y estimula la producción natural de colágeno para una piel tersa, firme y revitalizada." },
        { title: "Bioestimulación con Colágeno", image: "img/treatments/anti-aging/collagen-biostimulation.jpg", desc: "Estimula la producción de colágeno desde el interior, restaurando la elasticidad y firmeza natural de tu piel." },
        { title: "Bioestimulación PRP", image: "img/treatments/anti-aging/prp-biostimulation.jpg", desc: "Activa la regeneración celular con tu propio plasma, mejorando textura, firmeza y luminosidad en rostro y cuello." },
        { title: "Botox Full-Face", image: "img/treatments/anti-aging/botox-fullface.jpg", desc: "Rejuvenece tu rostro al relajar arrugas y líneas de expresión con una aplicación integral y de efecto natural." },
        { title: "Peeling Químico", image: "img/treatments/anti-aging/chemical-peel.jpg", desc: "Renueva tu piel eliminando imperfecciones, manchas y células muertas para lograr un rostro más uniforme y luminoso." },
        { title: "Plasmapen", image: "img/treatments/anti-aging/plasmapen.jpg", desc: "Tensa la piel, reduce arrugas finas y mejora la firmeza facial con esta técnica de plasma no invasiva y precisa." },
    ];

    const treatmentsFacialHarmony = [
        { title: "Bichectomía Enzimática", image: "img/treatments/facial-harmony/bichectomy.jpg", desc: "Reduce el volumen de las mejillas para un rostro más definido y estilizado con un procedimiento no quirúrgico." },
        { title: "Plasma Rico en Plaquetas", image: "img/treatments/facial-harmony/platelet-rich-plasma.jpg", desc: "Estimula la regeneración y mejora la textura de la piel usando tus propias plaquetas para un rostro rejuvenecido." },
        { title: "Reducción de Papada", image: "img/treatments/facial-harmony/double-chin-reduction.jpg", desc: "Moldea el contorno facial eliminando grasa localizada en la zona del cuello para un perfil más definido." },
        { title: "Relleno de Labios", image: "img/treatments/facial-harmony/lip-filler.jpg", desc: "Aumenta el volumen y define la forma de tus labios con rellenos naturales para un aspecto más atractivo y juvenil." },
        { title: "Relleno de Ojeras", image: "img/treatments/facial-harmony/tear-trough-filler.jpg", desc: "Corrige hundimientos y ojeras con ácido hialurónico para un contorno de ojos más fresco y descansado." },
        { title: "Rinomodelación con Ácido Hialurónico", image: "img/treatments/facial-harmony/non-surgical-rhinoplasty.jpg", desc: "Moldea la nariz sin cirugía, corrigiendo irregularidades y perfilando su forma con ácido hialurónico." },
        { title: "Toxina Botulínica", image: "img/treatments/facial-harmony/botulinum-toxin.jpg", desc: "Relaja arrugas y líneas de expresión para un rostro más liso y rejuvenecido con un tratamiento rápido y efectivo." },
    ];

    const treatmentsPersonalizedAesthetics = [
        { title: "Alopecia", image: "img/treatments/personalized-aesthetics/alopecia.jpg", desc: "Tratamiento especializado para la caída del cabello, fortaleciendo los folículos y estimulando el crecimiento natural." },
        { title: "Anti Ácne", image: "img/treatments/personalized-aesthetics/anti-acne.jpg", desc: "Controla y reduce brotes de acné con tratamientos personalizados para mejorar la salud y apariencia de la piel." },
        { title: "Hollywood Peel", image: "img/treatments/personalized-aesthetics/hollywood-peel.jpg", desc: "Renueva la piel con un peeling láser que elimina impurezas y da luminosidad para un rostro radiante y uniforme." },
        { title: "Peeling Químico", image: "img/treatments/personalized-aesthetics/chemical-peel.jpg", desc: "Elimina células muertas y manchas para revelar una piel más suave, uniforme y rejuvenecida." },
        { title: "Plasma Rico en Plaquetas", image: "img/treatments/personalized-aesthetics/platelet-rich-plasma.jpg", desc: "Regenera la piel y mejora su textura usando factores de crecimiento presentes en tu propio plasma." },
        { title: "Plasmapen", image: "img/treatments/personalized-aesthetics/plasmapen.jpg", desc: "Técnica precisa que tensa la piel y reduce arrugas mediante energía de plasma no invasiva." },
        { title: "Sonrisa Gingival", image: "img/treatments/personalized-aesthetics/gummy-smile.jpg", desc: "Corrige la exposición excesiva de encías al sonreír para una sonrisa más armónica y estética." },
        { title: "Sueroterapia", image: "img/treatments/personalized-aesthetics/IV-therapy.jpg", desc: "Tratamiento revitalizante que hidrata y nutre la piel con sueros especializados para un brillo saludable." },
        { title: "Toxina Botulínica", image: "img/treatments/personalized-aesthetics/botulinum-toxin.jpg", desc: "Reduce arrugas y líneas de expresión para un rostro más liso y rejuvenecido con un método seguro y rápido." },
        { title: "Vampiro Facial", image: "img/treatments/personalized-aesthetics/vampire-facial.jpeg", desc: "Estimula colágeno y rejuvenece la piel mediante microperforaciones y plasma rico en plaquetas." },
    ];

    const treatmentsBodyTreatment = [
        { title: "Disminución de Grasa", image: "img/treatments/body-treatment/fat-reduction.jpg", desc: "Tratamiento localizado para reducir cúmulos de grasa resistente, mejorando la silueta sin necesidad de cirugía." },
        { title: "Encimas Lipolíticas", image: "img/treatments/body-treatment/lipolytic-enzymes.jpg", desc: "Tratamiento que disuelve grasa localizada mediante enzimas naturales. Ideal para moldear zonas específicas del cuerpo." },
        { title: "Mesoterapia", image: "img/treatments/body-treatment/mesotherapy.jpg", desc: "Microinyecciones de activos en la piel para mejorar firmeza, hidratación y reducir grasa o celulitis según el objetivo." },
        { title: "Reducción de Cicatrices", image: "img/treatments/body-treatment/scar-reduction.png", desc: "Técnica estética que suaviza cicatrices visibles, devolviendo uniformidad y textura natural a la piel tratada." },
        { title: "Retiro de verrugas", image: "img/treatments/body-treatment/wart-removal.jpg", desc: "Eliminación segura y estética de verrugas en distintas zonas, sin dejar marcas visibles y con mínima molestia." },
    ];

    const tabData = {
        "anti-aging": treatmentsAntiAging,
        "facial-harmony": treatmentsFacialHarmony,
        "personalized-aesthetics": treatmentsPersonalizedAesthetics,
        "body-treatment": treatmentsBodyTreatment,
    };

    function createTreatmentCard({ title, image, desc }) {
        const card = document.createElement("div");
        card.className = "treatment-card";
        card.innerHTML = `
      <div class="treatment-front">
        <div class="treatment-image" style="background-image: url('${image}');"></div>
        <h3 class="treatment-title">${title}</h3>
      </div>
      <div class="treatment-back">
        <h3 class="treatment-title">${title}</h3>
        <p class="treatment-desc">${desc}</p>
        <button class="treatment-btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="treatment-btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
            </svg>
            Ver más
        </button>
      </div>
    `;
        return card;
    }

    // Función Render
    function renderTreatmentGrid(containerId, treatmentList) {
        const tab = document.getElementById(containerId);

        if (renderCache[containerId]) {
            tab.innerHTML = '';
            tab.appendChild(renderCache[containerId]);
            return;
        }

        const gridWrapper = document.createElement("div");

        const gridMain = document.createElement("div");
        const gridLast = document.createElement("div");
        gridMain.className = "treatment-grid";
        gridLast.className = "treatment-grid treatment-grid-last";

        const fullRows = Math.floor(treatmentList.length / 4) * 4;
        const mainCards = treatmentList.slice(0, fullRows);
        const lastCards = treatmentList.slice(fullRows);

        mainCards.forEach(data => gridMain.appendChild(createTreatmentCard(data)));
        lastCards.forEach(data => gridLast.appendChild(createTreatmentCard(data)));

        gridWrapper.appendChild(gridMain);
        if (lastCards.length > 0) {
            gridWrapper.appendChild(gridLast);
            adjustLastRow(gridLast);
        }

        tab.innerHTML = '';
        tab.appendChild(gridWrapper);

        renderCache[containerId] = gridWrapper.cloneNode(true);
    }

    // Ajuste de Fila
    function adjustLastRow(gridLast) {
        if (!gridLast) return;
        const cards = Array.from(gridLast.querySelectorAll('.treatment-card'));
        const cardCount = cards.length;
        gridLast.querySelectorAll('.filler-card').forEach(el => el.remove());

        gridLast.style.display = 'flex';
        gridLast.style.justifyContent = 'center';
        gridLast.style.width = '100%';

        const cardWidth3 = '33.3333%';
        const cardWidth4 = '25%';

        cards.forEach(card => {
            card.style.flex = `0 0 ${cardWidth3}`;
            card.style.maxWidth = cardWidth3;
        });

        if (cardCount === 1) {
            const firstCard = cards[0];
            gridLast.innerHTML = '';

            const leftFiller = document.createElement('div');
            leftFiller.classList.add('treatment-card', 'filler-card');
            leftFiller.style.flex = `0 0 ${cardWidth3}`;
            leftFiller.style.maxWidth = cardWidth3;
            leftFiller.style.backgroundColor = '#000';
            leftFiller.style.boxShadow = 'none';
            leftFiller.style.pointerEvents = 'none';

            const rightFiller = leftFiller.cloneNode(true);

            gridLast.appendChild(leftFiller);
            gridLast.appendChild(firstCard);
            gridLast.appendChild(rightFiller);
            firstCard.style.flex = `0 0 ${cardWidth3}`;
            firstCard.style.maxWidth = cardWidth3;
            return;
        }

        if (cardCount === 2) {
            const [firstCard, secondCard] = cards;
            gridLast.innerHTML = '';

            const filler = document.createElement('div');
            filler.classList.add('treatment-card', 'filler-card');
            filler.style.flex = `0 0 ${cardWidth4}`;
            filler.style.maxWidth = cardWidth4;
            filler.style.backgroundColor = '#000';
            filler.style.boxShadow = 'none';
            filler.style.pointerEvents = 'none';

            firstCard.style.flex = `0 0 ${cardWidth4}`;
            firstCard.style.maxWidth = cardWidth4;
            secondCard.style.flex = `0 0 ${cardWidth4}`;
            secondCard.style.maxWidth = cardWidth4;

            gridLast.appendChild(filler.cloneNode(true));
            gridLast.appendChild(firstCard);
            gridLast.appendChild(secondCard);
            gridLast.appendChild(filler.cloneNode(true));
            return;
        }

        if (cardCount === 3) {
            const fillersNeeded = 3 - cardCount;
            for (let i = 0; i < fillersNeeded; i++) {
                const filler = document.createElement('div');
                filler.classList.add('treatment-card', 'filler-card');
                filler.style.flex = `0 0 ${cardWidth3}`;
                filler.style.maxWidth = cardWidth3;
                filler.style.backgroundColor = '#000';
                filler.style.boxShadow = 'none';
                filler.style.pointerEvents = 'none';
                gridLast.appendChild(filler);
            }
        }
    }

    // Init para el Tab-Content Active
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');

            const tabId = button.getAttribute('data-tab');
            const tabEl = document.getElementById(tabId);
            if (tabEl) {
                tabEl.style.display = 'block';
                renderTreatmentGrid(tabId, tabData[tabId]);
            }
        });
    });

    renderTreatmentGrid("anti-aging", treatmentsAntiAging);
});
