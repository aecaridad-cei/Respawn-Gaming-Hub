const gamesData = [
    {
        genre: 'RPG / ACCIÓN',
        publisher: 'CD PROJEKT RED',
        title: 'CIBERPUNK 2077',
        description: 'Un RPG de ciencia ficción donde la identidad, el cuerpo y el alma se compran y se venden en las calles húmedas de neón.',
        themeClass: 'hero--ciberpunk',
        heroBg: 'media/webp/ciberpunk__hero.webp'
    },
    {
        genre: 'ACCIÓN / MUNDO ABIERTO',
        publisher: 'ROCKSTAR GAMES',
        title: 'GTA VI',
        description: 'Regresa a las calles de Vice City en la experiencia de mundo abierto más ambiciosa e impactante de la industria.',
        themeClass: 'hero--gta',
        heroBg: 'media/webp/gta__hero.webp'
    },
    {
        genre: 'ACCIÓN / AVENTURA',
        publisher: 'SANTA MONICA STUDIO',
        title: 'GOD OF WAR: RAGNARÖK',
        description: 'Embárcate en un viaje épico y conmovedor a través de los Nueve Reinos junto a Kratos y Atreus en su lucha contra el destino.',
        themeClass: 'hero--god',
        heroBg: 'media/webp/god__hero.webp'
    },
    {
        genre: 'CARRERA / MUNDO ABIERTO',
        publisher: 'PLAYGROUND GAMES',
        title: 'FORZA HORIZON 6',
        description: 'Explora los paisajes de mundo abierto más deslumbrantes a máxima velocidad dentro del festival de conducción definitivo.',
        themeClass: 'hero--forza',
        heroBg: 'media/webp/forza__hero.webp'
    },
    {
        genre: 'SURVIVAL / HORROR',
        publisher: 'CAPCOM',
        title: 'RESIDENT EVIL REQUIEM',
        description: 'Enfréntate al terror biológico más visceral y sobrevive a una pesadilla claustrofóbica en esta sobrecogedora entrega.',
        themeClass: 'hero--resident',
        heroBg: 'media/webp/resident__hero.webp'
    }
];

// Referencia al contenedor principal de la sección Hero
const heroElement = document.getElementById('hero');

// Selección de los nodos del DOM dentro del Hero
const heroBackground = heroElement ? heroElement.querySelector('.hero__background') : null;
const heroCards = heroElement ? heroElement.querySelectorAll('.hero__rotative .hero__image img') : [];
const heroGenre = heroElement ? heroElement.querySelector('.hero__top-bar .label') : null;
const heroPublisher = heroElement ? heroElement.querySelector('.hero__tittle span') : null;
const heroTitle = heroElement ? heroElement.querySelector('.hero__tittle h1') : null;
const heroDescription = heroElement ? heroElement.querySelector('.hero__body .label') : null;

// Botones de navegación manual (Atrás / Adelante)
const backBtn = document.getElementById('back-carrousel');
const nextBtn = document.getElementById('next-carrousel');

// Elementos que muestran el indice actual del hero
const arrayIndex = document.getElementById('array-index');
const arrayLength = document.getElementById('array-length');

// Controles para la apertura y cierre del menú desplegable móvil
const menuToggle = document.querySelector('#menu-toggle');
const menuClose = document.querySelector('#menu-close');
const nav = document.querySelector('#nav');

// Índice de la posición del videojuego activo en el carrusel (comienza en 
let currentIndex = 0;

// Referencia del temporizador del intervalo para la rotación automática.

let autoPlayTimer = null;

// Sincroniza y renderiza en el DOM la información completa del videojuego correspondiente

// `currentIndex`, aplicando la clase de tema CSS en la sección Hero.

function updateHeroContentHandler() {
    // Detiene la ejecución de forma segura si la sección Hero no está presente en la página actual
    if (!heroElement) return;

    // Recupera la información del juego activo desde el arreglo de datos
    const currentGame = gamesData[currentIndex];
    if (!currentGame) return;

    // Actualizar textos descriptivos de la cabecera e información del juego
    if (heroGenre) heroGenre.textContent = currentGame.genre;
    if (heroPublisher) heroPublisher.textContent = currentGame.publisher;
    if (heroTitle) heroTitle.textContent = currentGame.title;
    if (heroDescription) heroDescription.textContent = currentGame.description;

    //Actualizar la imagen de fondo principal del Hero
    if (heroBackground) {
        heroBackground.src = currentGame.heroBg;
        heroBackground.alt = `Fondo temático promocional de ${currentGame.title}`;
    }

    //Recorrer y actualizar las miniaturas rotativas de vista previa a la derecha
    heroCards.forEach((card, i) => {
        const nextCardIndex = (currentIndex + i + 1) % gamesData.length;
        card.src = gamesData[nextCardIndex].heroBg;
        card.alt = `Vista previa del juego ${gamesData[nextCardIndex].title}`;
    });

    // Actualizar los indicadores numéricos del contador
    if (arrayIndex) arrayIndex.textContent = currentIndex + 1;
    if (arrayLength) arrayLength.textContent = gamesData.length;

    // Asignar la clase temática dinámica al contenedor principal del Hero
    heroElement.className = 'hero block';
    heroElement.classList.add(currentGame.themeClass);
}

// Manejador de evento: Avanza el carrusel a la siguiente posición.

function nextGameHandler() {
    currentIndex = (currentIndex + 1) % gamesData.length;
    updateHeroContentHandler();
    resetAutoplayHandler();
}
// Manejador de evento: Retrocede el carrusel a la posición anterior.

function prevGameHandler() {
    currentIndex = (currentIndex - 1 + gamesData.length) % gamesData.length;
    updateHeroContentHandler();
    resetAutoplayHandler();
}

// Reinicia el temporizador de reproducción automática (3000ms = 3 segundos).

function resetAutoplayHandler() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
    }
    autoPlayTimer = setInterval(nextGameHandler, 3000);
}

// Manejador de evento: Despliega el menú lateral móvil añadiendo la clase 'active'.

function menuToggleHandler() {
    if (nav) nav.classList.add('active');
}

// Manejador de evento: Oculta el menú lateral móvil removiendo la clase 'active'.

function menuCloseHandler() {
    if (nav) nav.classList.remove('active');
}

// Asignación de controladores de evento de clic a los botones del carrusel
if (backBtn) backBtn.addEventListener('click', prevGameHandler);
if (nextBtn) nextBtn.addEventListener('click', nextGameHandler);

// Asignación de controladores de evento de clic para la navegación móvil
if (menuToggle) menuToggle.addEventListener('click', menuToggleHandler);
if (menuClose) menuClose.addEventListener('click', menuCloseHandler);

// Inicialización de la vista e inicio del temporizador si la sección Hero está cargada
if (heroElement) {
    updateHeroContentHandler();
    resetAutoplayHandler();
}