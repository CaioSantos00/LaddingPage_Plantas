const images = document.getElementById("img")
function addClass() {
    images.classList.add('anima');
}

document.getElementById("b1").addEventListener('click', () => {
     images.src="./imagens/plantas-ornamentais-sala12.jpg"
}) 
document.getElementById("b2").addEventListener('click', () => {
     images.src="./imagens/ambiente-com-plantas.jpg"
     addClass()
})

document.getElementById("b3").addEventListener('click', () => {
     images.src="./imagens/planta.jpg"
     addClass()
})
document.getElementById("b4").addEventListener('click', () => {
     images.src="./imagens/planta4.png"
     addClass()
})

