// Hero Section

const heroRotativo = document.getElementById('hero-rotativo')
let imagenRotativaA = document.getElementById('imagen-rotativa-a')
let imagenRotativaB = document.getElementById('imagen-rotativa-b')
let imagenRotativaC = document.getElementById('imagen-rotativa-c')
let imageContainter = document.getElementById('image-container')
const heroRotativoSrcset = document.getElementById('hero-rotativo-srcset')
const arrayImg = ['media/img/img_1.jpg', 'media/img/img_2.jpg','media/img/img_3.jpg', 'media/img/img_4.jpg']
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