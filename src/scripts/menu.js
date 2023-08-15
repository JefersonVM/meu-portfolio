let menuIcons = document.querySelector('.menu-icon')
let menuItens = document.querySelector('.menu')

menuIcons.addEventListener('click', menuToggle)
function menuToggle(){
  menuIcons.classList.toggle('active')
  menuItens.classList.toggle('active')
}