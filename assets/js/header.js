document.addEventListener('scroll', function () {
    var header = this.documentElement.querySelector('.header');
    const scrollY = window.scrollY;

    if (scrollY <= 150) {
        header.classList.remove('scrolled')
    } else {
        header.classList.add('scrolled')

    }
})

document.addEventListener('click', function () {
    var dropdown = this.documentElement.querySelector('.dropdown')
    dropdown.classList.toggle('hide');
})