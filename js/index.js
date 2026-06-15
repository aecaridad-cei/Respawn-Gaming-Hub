// Hero Section

const heroRotativo = document.getElementById('hero-rotativo')
const imagenRotativa = document.getElementById('imagen-rotativa')
const imageContainter = document.getElementById('image-container')
const heroRotativoSrcset = document.getElementById('hero-rotativo-srcset')
const arrayImg = ['media/img/ciberpunk.jpg', 'media/img/resident.jpg']
let indiceArray = 0
let interval
const delayImg = 3000

function cambioImg() {
    
    setTimeout( () => {
        indiceArray++
        indiceArray >= arrayImg.length ? indiceArray = 0 : ""
        heroRotativo.src = arrayImg[indiceArray]
        heroRotativoSrcset.srcset = arrayImg[indiceArray]
    }, 300)
}
    
function iniciarIntervalo() {
    interval = setInterval(cambioImg, delayImg)
}

function detenerIntervalo() {
    clearInterval(interval)
}

// imagenRotativa.addEventListener('mouseenter', detenerIntervalo)
// imagenRotativa.addEventListener('mouseleave', iniciarIntervalo)

iniciarIntervalo()

//  / Hero Carrusel