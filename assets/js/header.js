
var menu = document.querySelector('.header_menu')

menu.addEventListener('click', function () {
    var dropdown = document.querySelector('.dropdown')
    dropdown.classList.toggle('hide');
    console.log(dropdown)
})