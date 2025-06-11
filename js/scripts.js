document.addEventListener('DOMContentLoaded', () => {
    const copyLicense = document.getElementById('license');
    const copyEmail = document.getElementById('copy-btn-email');
    const copyPhone = document.getElementById('copy-btn-phone');
    const toast = document.getElementById('toast');
    const langToggle = document.getElementById('lang-toggle');
    const textWrapper = document.querySelector('.text-wrapper');
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');


    /* ================================== Animación idioma =================================== */
    function ajustarPosicionTextoIdioma() {
        if (!langToggle || !textWrapper) return;

        const isSpanish = langToggle.checked;
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1024) {
            textWrapper.style.left = isSpanish ? '28px' : '47px';
        } else {
            textWrapper.style.left = '42px';
        }
    }

    window.addEventListener('resize', ajustarPosicionTextoIdioma);

    if (langToggle) {
        langToggle.addEventListener('change', () => {
            setTimeout(ajustarPosicionTextoIdioma, 10);
            const lang = langToggle.checked ? 'es' : 'en';
            document.documentElement.setAttribute('data-lang', lang);
        });
    }

    ajustarPosicionTextoIdioma();

    /* ======================================= Toast ======================================= */
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

    /* ======================================= Tratamientos ======================================= */
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.style.display = 'none');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';
            button.classList.add('active');
        });
    });
});
