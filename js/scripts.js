document.addEventListener('DOMContentLoaded', () => {
    const copyLicense = document.getElementById('license');
    const copyEmail = document.getElementById('copy-btn-email');
    const copyPhone = document.getElementById('copy-btn-phone');
    const toast = document.getElementById('toast');
    const langToggle = document.getElementById('lang-toggle');
    const textWrapper = document.querySelector('.text-wrapper');
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    const gridLast = document.querySelector('.treatment-grid-last');

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
        { title: "Hollywood Peeling", image: "img/treatments/anti-aging/aux.jpg", desc: "Lorem ipsum dolor sit amet." },
        { title: "Rejuvenecimiento Láser", image: "img/treatments/anti-aging/aux.jpg", desc: "Tratamiento avanzado para líneas de expresión." },
        { title: "Mesoterapia Facial", image: "img/treatments/anti-aging/aux.jpg", desc: "Hidratación profunda y nutrición celular." },
        { title: "Lifting sin cirugía", image: "img/treatments/anti-aging/aux.jpg", desc: "Efecto tensor inmediato y duradero." },
        { title: "Plasma Rico en Plaquetas", image: "img/treatments/anti-aging/aux.jpg", desc: "Regeneración natural con tus propias células." },
        { title: "Peeling Químico", image: "img/treatments/anti-aging/aux.jpg", desc: "Renovación de la piel controlada." },
        { title: "Dermapen", image: "img/treatments/anti-aging/aux.jpg", desc: "Microagujas para estimular colágeno." },
        { title: "Dermapen", image: "img/treatments/anti-aging/aux.jpg", desc: "Microagujas para estimular colágeno." },
    ];

    const treatmentsFacialHarmony = [
        { title: "Rinomodelación", image: "img/treatments/anti-aging/aux.jpg", desc: "Moldea la nariz sin cirugía." },
        { title: "Toxina Botulínica", image: "img/treatments/anti-aging/aux.jpg", desc: "Relaja músculos para armonizar el rostro." },
    ];

    const treatmentsPersonalizedAesthetics = [
        { title: "Diseño Facial Personalizado", image: "img/treatments/anti-aging/aux.jpg", desc: "Tratamiento a medida según tus rasgos." },
    ];

    const treatmentsBodyTreatment = [
        { title: "Láser Lipolítico", image: "img/treatments/anti-aging/aux.jpg", desc: "Reducción de grasa localizada." },
        { title: "Cavitación", image: "img/treatments/anti-aging/aux.jpg", desc: "Tratamiento no invasivo para celulitis." },
        { title: "Radiofrecuencia Corporal", image: "img/treatments/anti-aging/aux.jpg", desc: "Tensa y reafirma la piel." },
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
        tab.innerHTML = '';

        const gridMain = document.createElement("div");
        const gridLast = document.createElement("div");
        gridMain.className = "treatment-grid";
        gridLast.className = "treatment-grid treatment-grid-last";

        const fullRows = Math.floor(treatmentList.length / 4) * 4;
        const mainCards = treatmentList.slice(0, fullRows);
        const lastCards = treatmentList.slice(fullRows);

        mainCards.forEach(data => gridMain.appendChild(createTreatmentCard(data)));
        lastCards.forEach(data => gridLast.appendChild(createTreatmentCard(data)));

        tab.appendChild(gridMain);
        if (lastCards.length > 0) {
            tab.appendChild(gridLast);
            adjustLastRow(gridLast);
        }
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
