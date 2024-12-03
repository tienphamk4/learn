var users = document.querySelectorAll('.vote_user')

function filter(data) {
    users.forEach(user => {
        if (user.dataset.filter === data || data === 'all') {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

