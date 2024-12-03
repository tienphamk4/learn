var tabs = document.querySelectorAll('.nav button')
var items = document.querySelectorAll('.item')
var filter_search = document.querySelector('.filter_search')


filter_search.addEventListener('keyup', function (e) {
    // so sanh theo ten k phan biet hoa thuong
    var value = e.target.value.toLowerCase();
    items.forEach(item => {
        var name = item.querySelector('h3').textContent;
        console.log(name);

        if (name.toLowerCase().indexOf(value) !== -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
})
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active') })
        tab.classList.add('active')
    })
})


function filter(data) {
    items.forEach(item => {
        if (item.dataset.category === data) {
            item.style.display = 'flex'
        }
        else {
            item.style.display = 'none'
        }
    })
}
// them href cho the a
var aElement = document.querySelectorAll('.item_image')
aElement.forEach(a => {
    a.href = 'product_detail.html'
})

// them vao gio hang

