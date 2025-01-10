// Hamburger Menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__menu li a');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Sluit het menu automatisch als een link wordt aangeklikt
if (menuLinks) {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Active link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header__menu li a');

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
});

// Event listener voor formulier verzenden
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('./contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.success) {
                showPopup();
                setTimeout(closePopup, 3000);
            } else {
                alert('Er is iets misgegaan: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Fout:', error);
            alert('Er is een fout opgetreden. Probeer het opnieuw.');
        });
    });
}

// Popup functies
function showPopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'none';
}
