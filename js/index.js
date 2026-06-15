

// Hero Section
// Aumentar el indice del carrrusel mini
// Realizar todo en una funcion sincronizada
const arrayImg = ['media/img/Ciberpunk__hero.jpg', 'media/img/Rs__hero.jpg', 'media/img/Ciberpunk__hero.jpg']
let indiceArray = 0
let interval
const delayImg = 3000

const imagenRotativa = document.getElementById('imagen-rotativa')

function cambioImg() {
    
    imagenRotativa.style.opacity = 0
    setTimeout( () => {
        indiceArray++
        indiceArray >= arrayImg.length ? indiceArray = 0 : ""
        // Es otra forma de escribir el if y el else
        imagenRotativa.src = arrayImg[indiceArray]
        imagenRotativa.style.opacity = '100%'
    }, 300)
}
    
function iniciarIntervalo() {
    interval = setInterval(cambioImg, delayImg)
}

function detenerIntervalo() {
    clearInterval(interval)
}

imagenRotativa.addEventListener('mouseenter', detenerIntervalo)
imagenRotativa.addEventListener('mouseleave', iniciarIntervalo)

iniciarIntervalo()
//  / Hero Carrusel