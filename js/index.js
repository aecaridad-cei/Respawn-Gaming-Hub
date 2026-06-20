let index = 0
const hero = document.getElementById('hero')
const gallery = [
    '/media/img/img_1.jpg',
    '/media/img/img_2.jpg',
    '/media/img/img_3.jpg',
    '/media/img/img_4.jpg',
]

setInterval(rotateHero, 3000)

function rotateHero(start) {
    const heroBackground = hero.querySelector('.hero__background')
    const heroCard = hero.querySelectorAll('.hero__image img')
    const backCarrousel = document.getElementById('back-carrousel')
    const nextCarrosuel = document.getElementById('next-carrousel')

    start ? index = 0 : index++
   
    if (index >= gallery.length) {
        index = index - gallery.length
        heroBackground.src = gallery[index]
    } else {
        heroBackground.src = gallery[index]
    }

    heroCard.forEach((card, i) => {
        let cardIndex = (index + i) + 1
        let arrayIndex = document.getElementById('array-index')
        arrayIndex.textContent = index + 1

        arrayIndex >= gallery.length ? arrayIndex = arrayIndex - gallery.length : arrayIndex.textContent = index + 1

        if (cardIndex >= gallery.length) {
            cardIndex = cardIndex - gallery.length
            card.src = gallery[cardIndex]
        }
        else {
            card.src = gallery[cardIndex]
        }
        
    backCarrousel.addEventListener('click', () => {
        index--
    })

        console.log('Card ' + i + ': ' + cardIndex)
    })
}

rotateHero(true)