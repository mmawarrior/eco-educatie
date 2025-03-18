document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'block'; // Forceer de weergave van de banner

    const acceptButton = document.getElementById('accept-cookies');

    // Controleer of de gebruiker al cookies heeft geaccepteerd
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // Verberg de banner en sla de keuze op
    acceptButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
});
