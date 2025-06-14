document.addEventListener('DOMContentLoaded', () => {
    // ======================================= Componentes ======================================= 
    document.getElementById("top-bar-container").innerHTML = `
    <div class="top-bar">
        <img src="img/logo-dark.png" alt="Logo" class="logo">
        <div class="title-wrapper">
        <h1 class="topBar-title">~ Medicina Estética ~</h1>
        </div>
        <div class="contact-icons-group">
        <div class="social-media-container">
            <button class="icon-button" onclick="window.open('https://www.instagram.com/', '_blank')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg>
            </button>
        </div>
        <span class="separator">&#124;</span>
        <div class="contact-section">
            <a href="https://wa.me/5212213677773?text=Hola,%20quisiera%20más%20información%20sobre%20los%20tratamientos%20de%20medicina%20estética,%20por%20favor." target="_blank" class="whatsapp-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            <h2>Mensaje WhatsApp</h2>
            </a>
        </div>
        </div>
    </div>
    `;

    document.getElementById("nav-container").innerHTML = `
    <nav id="main-nav">
        <div class="nav-content">
        <a id="contact-nav" href="index.html#">Inicio</a>
        <a id="contact-nav" href="index.html#contact-section">Contacto</a>
        <a id="treatments-nav" href="index.html#treatments-section">Tratamientos</a>
        <a id="location-nav" href="index.html#location-section">Ubicación</a>
        </div>
    </nav>
    `;

    document.getElementById("footer-container").innerHTML = `
    <footer class="main-footer">
        <img src="img/logo-light.png" alt="Logo" class="footer-logo" />
        <div class="footer-content">
        <a href="https://www.instagram.com/" target="_blank" class="footer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
            </svg>
        </a>
        <div class="footer-contact">
            <h3>dr.aguilarmestetico@gmail.com</h3>
            <h3>(+52) 2213677773</h3>
        </div>
        </div>
        <p class="copyright" id="copyright">
        © 2025 Dr. César Aguilar – Médico Estético. Todos los derechos reservados.
        </p>
        <div id="privacy-link-container"></div>
    </footer>
    `;

    if (!window.location.pathname.includes('privacy-notice.html')) {
        const privacyContainer = document.getElementById('privacy-link-container');
        privacyContainer.innerHTML = `<a class="privacy" href="privacy-notice.html">Aviso de Privacidad</a>`;
    }

    // ======================================= NavBar Sticky ======================================= 
    window.addEventListener('scroll', () => {
        const nav = document.getElementById("main-nav");
        const topBar = document.querySelector(".top-bar");
        if (!topBar || !nav) return;

        const topBarHeight = topBar.offsetHeight;

        if (window.scrollY >= topBarHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

});