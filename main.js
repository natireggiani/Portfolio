let prueba = document.querySelector('#prueba')
let menu = document.querySelector('.menu')
let ul = document.querySelector('#lista-menu')
let header = document.querySelector('#nav')


window.addEventListener('scroll', function(){
    prueba.classList.remove('hide')
})

menu.addEventListener('click', function(){
    ul.classList.toggle('none')
    header.classList.toggle('header')
})

