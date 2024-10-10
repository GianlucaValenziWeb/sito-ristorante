const reviews = [
    {
        text: "Il nostro punto di riferimento per le cene speciali. Piatti deliziosi, presentazione impeccabile!",
        name: "Alessandro Verdi",
    },
    {
        text: "La migliore esperienza culinaria che abbia mai avuto! Piatti autentici, atmosfera accogliente e personale gentilissimo.",
        name: "Mario Rossi",
    },
    {
        text: "Un posto meraviglioso, la qualità del cibo è impareggiabile e lo staff è incredibilmente cordiale.",
        name: "Giulia Bianchi",
    },
];


let currentReviewIndex = 0;

function displayReview(index) {
    const reviewTextElement = document.querySelector('.testo-recensioni');
    const clientNameElement = document.querySelector('.cliente-nome');
    const review = reviews[index];
    reviewTextElement.textContent = review.text;
    clientNameElement.textContent = review.name;
}

document.querySelector('.prev-arrow').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentReviewIndex);
});

document.querySelector('.next-arrow').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReview(currentReviewIndex);
});

// Display the first review on page load
displayReview(currentReviewIndex);

//scroll


// menu 
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
});

// home animation 
document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector(".container-corpo h1");
    const p = document.querySelector(".container-corpo p");
    const a = document.querySelector(".container-corpo a");

    function showElements() {
        // Mostra gli elementi uno alla volta
        setTimeout(() => {
            h1.style.opacity = '1';
            h1.style.transform = 'translateY(0)';
        }, 2000);

        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 4000);

        setTimeout(() => {
            a.style.opacity = '1';
            a.style.transform = 'translateY(0)';
        }, 6000);
    }

    function hideElements() {
        // Nascondi gli elementi uno alla volta (prima scompare l'h1, poi il p, infine l'a)
        setTimeout(() => {
            h1.style.opacity = '0';
            h1.style.transform = 'translateY(20px)';
        }, 0);

        setTimeout(() => {
            p.style.opacity = '0';
            p.style.transform = 'translateY(20px)';
        }, 2000);

        setTimeout(() => {
            a.style.opacity = '0';
            a.style.transform = 'translateY(20px)';
        }, 4000);
    }

    function cycleAnimation() {
        hideElements(); // Prima nascondi tutto
        setTimeout(() => {
            showElements(); // Dopo inizia a mostrare di nuovo
        }, 3000); // Attendi 3 secondi prima di ricominciare
    }

    // Richiama la funzione ogni 11 secondi (6 secondi di animazione + 5 di pausa)
    setInterval(cycleAnimation, 18000);

    // Esegui la funzione la prima volta
    showElements();
});









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

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));


