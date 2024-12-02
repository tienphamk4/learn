
var menu = document.querySelector('.header_menu')

menu.addEventListener('click', function (e) {
    e.stopPropagation();
    var dropdown = document.querySelector('.dropdown')
    dropdown.classList.toggle('hide');
})
document.addEventListener('click', function (e) {

    var dropdown = document.querySelector('.dropdown')
    if (!dropdown.classList.contains('hide')) {
        dropdown.classList.add('hide')
        console.log('ok')
    }
})