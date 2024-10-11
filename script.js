// Cambio di recensione
const recensioni = [
    {
        testo: "Questo locale è fantastico! Servizio eccellente e atmosfera unica.",
        nome: "Mario Rossi"
    },
    {
        testo: "Ottimo cibo, location fantastica. Torneremo sicuramente!",
        nome: "Giulia Bianchi"
    },
    {
        testo: "Personale cordiale e sempre disponibile. Esperienza fantastica.",
        nome: "Luca Verdi"
    }
];

let currentReviewIndex = 0;

// Elementi DOM
const testoRecensioni = document.getElementById('recensione-testo');
const clienteNome = document.getElementById('cliente-nome');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

// Funzione per aggiornare la recensione
function aggiornaRecensione(index, direction) {
    // Aggiunge la scia in uscita, direzione dipende da freccia
    if (direction === 'next') {
        testoRecensioni.classList.add('scia-uscita');
        clienteNome.classList.add('scia-uscita');
    } else {
        testoRecensioni.classList.add('scia-uscita-prev');
        clienteNome.classList.add('scia-uscita-prev');
    }

    setTimeout(() => {
        // Aggiorna immediatamente il testo della recensione e il nome del cliente
        testoRecensioni.textContent = recensioni[index].testo;
        clienteNome.textContent = recensioni[index].nome;

        // Rimuove la scia di uscita
        testoRecensioni.classList.remove('scia-uscita', 'scia-uscita-prev');
        clienteNome.classList.remove('scia-uscita', 'scia-uscita-prev');

        // Aggiunge la scia in entrata
        if (direction === 'next') {
            testoRecensioni.classList.add('scia-entrata-next');
            clienteNome.classList.add('scia-entrata-next');
        } else {
            testoRecensioni.classList.add('scia-entrata');
            clienteNome.classList.add('scia-entrata');
        }

        // Rimuove la scia in entrata dopo la transizione
        setTimeout(() => {
            testoRecensioni.classList.remove('scia-entrata', 'scia-entrata-next');
            clienteNome.classList.remove('scia-entrata', 'scia-entrata-next');
        }, 1000);  // Durata della transizione (1 secondo)
    }, 0);  // Riduce il ritardo prima di aggiornare a 100ms (quasi immediato)
}

// Eventi per le frecce
nextArrow.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % recensioni.length;  // Avanza alla prossima recensione
    aggiornaRecensione(currentReviewIndex, 'next');
});

prevArrow.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + recensioni.length) % recensioni.length;  // Torna alla recensione precedente
    aggiornaRecensione(currentReviewIndex, 'prev');
});

/* FINE RECENSIONI */

// Menu
window.onload = function () {
    showMenu('antipasti');
};

function showMenu(menuId) {
    // Nasconde tutti i contenuti dei menu
    var menus = document.getElementsByClassName('menu-details');
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = 'none';
    }

    // Rimuove la barra arancione da tutte le sezioni
    var bars = document.getElementsByClassName('menu-bar');
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = '#ccc';
    }

    // Mostra il menu selezionato
    document.getElementById(menuId).style.display = 'block';

    // Colora la barra sotto la sezione selezionata
    document.getElementById(menuId + '-bar').style.backgroundColor = '#ff7003';
}

/* FINE MENU */

// Scroll
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var check = document.getElementById('check');
    var backToHome = document.querySelector('.arrow-up');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            check.checked = false;
        });
    });

    // Aggiunge/rimuove la classe 'active' ai link di navigazione in base alla sezione visibile
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach(function (section) {
        observer.observe(section);
    });

    // Freccetta su 
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight) {
            backToHome.style.display = 'block';
        } else {
            backToHome.style.display = 'none';
        }
    });

    // Aggiungi scroll fluido alla freccia
    backToHome.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scorrimento fluido
        });
    });
});
/* FINE SCROLL + FRECCIA */

// Effetti pagine
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

/* FINE EFFETTI PAGINE */

// Foto Gallery
document.addEventListener('DOMContentLoaded', function () {
    const item = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Aggiunge la classe quando il box è visibile
            } else {
                entry.target.classList.remove('visible');  // Rimuove la classe quando il box esce dal viewport
            }
        });
    }, { threshold: 0.2 });

    item.forEach(function (box) {
        observer.observe(box);
    });
});
/* FINE FOTO GALLERY */