const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle Hamburger Menu
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.contains('active');
        hamburger.classList.toggle('active', !isActive);
        navLinks.classList.toggle('active', !isActive);
        console.log('Hamburger menu toggled:', !isActive);
    });

    // Close menu on link click
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            console.log('Menu gesloten na link klik.');
        });
    });
} else {
    console.error('Hamburger of navLinks niet gevonden.');
}

// Redirect buttons
const learnMoreBtn = document.querySelector('.learn-more');
const workWithMeBtn = document.querySelector('.work-with-me');

if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function () {
        window.location.href = 'https://example.com'; // Modify the link as needed
        console.log('Learn More button geklikt, redirect naar https://example.com');
    });
}

if (workWithMeBtn) {
    workWithMeBtn.addEventListener('click', function () {
        window.location.href = 'https://example.com/contact'; // Modify the link as needed
        console.log('Work With Me button geklikt, redirect naar https://example.com/contact');
    });
}

// Pop-up weergeven
function showPopup() {
    console.log('showPopup functie is aangeroepen');
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'block';
        popup.classList.add('show');
        console.log('Popup zichtbaar gemaakt.');
    } else {
        console.error('Popup element niet gevonden.');
    }
}

// Pop-up verbergen
function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.classList.remove('show');
        popup.style.display = 'none';
        console.log('Pop-up verborgen.');
    } else {
        console.error('Popup element niet gevonden.');
    }
}

// Formulier verzenden
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Formulier verzenden gestart.');
        
        const formData = new FormData(this);

        fetch('./contact.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respons van server:', data);
            if (data.success) {
                showPopup(); // Toon popup bij succes
                setTimeout(() => closePopup(), 3000); // Sluit popup na 3 seconden
            } else {
                alert('Fout: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Fout tijdens fetch:', error);
            alert('Er is een fout opgetreden. Controleer je verbinding en probeer het opnieuw.');
        });
    });
} else {
    console.error('Contactformulier niet gevonden.');
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a'); // Correcte selector gebruiken

    if (sections && sections.length && navLinks && navLinks.length) {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    } else {
        console.warn('Geen sections of navLinks gevonden voor scroll highlight.');
    }
});
