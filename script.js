const menuToggle    = document.querySelector('.menu-toggle input');
const nav            = document.querySelector('ul');
const body          = document.getElementsByTagName("body")[0];

// card hover
const cards          = document.querySelectorAll('.card');

// cards.Each.on('mouseover', function(e) {
//     console.log(e)
// })

cards.forEach(card => {
    const genreNama = card.childNodes[1];
    card.addEventListener('mouseover', function(e) {
        genreNama.style.color = '#535353';
    })

    card.addEventListener('mouseout', function(e) {
        genreNama.style.color = 'white';
    })
});



menuToggle.addEventListener('click', function() {
    body.classList.toggle('ohidden');
    nav.classList.toggle('slide');
})