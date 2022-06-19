let prueba = document.querySelector('#prueba')


window.addEventListener('scroll', function(){
    prueba.classList.remove('hide')
    // prueba.innerHTML = ` <h3>Portfolio</h3>`
})

let menu = document.querySelector('.menu')
let ul = document.querySelector('#lista-menu')
let header = document.querySelector('#nav')

menu.addEventListener('click', function(){
    ul.classList.toggle('none')
    header.classList.toggle('header')
})