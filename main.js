let prueba = document.querySelector('#prueba')
let menu = document.querySelector('.menu')
let ul = document.querySelector('#lista-menu')
let header = document.querySelector('#nav')


window.addEventListener('scroll', function(){
    prueba.classList.remove('hide')
    ul.classList.add('none')
    header.classList.remove('header')
})

menu.addEventListener('click', function(){
    ul.classList.remove('none')
    header.classList.add('header')
})

