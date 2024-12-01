document.addEventListener('scroll', function () {
    var header = this.documentElement.querySelector('.header');
    const scrollY = window.scrollY;

    if (scrollY <= 150) {
        header.classList.remove('scrolled')
    } else {
        header.classList.add('scrolled')

    }
})

var menu = document.querySelector('.header_menu')

menu.addEventListener('click', function () {
    var dropdown = document.querySelector('.dropdown')
    dropdown.classList.toggle('hide');
    console.log(dropdown)
})