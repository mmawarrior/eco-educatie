/**
 * Cookies.js - Beheer cookies (instellen, lezen en verwijderen)
 */

// Cookie instellen
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Geldigheidsduur in dagen
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
}

// Cookie lezen
function getCookie(name) {
    const nameEQ = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Cookie verwijderen
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Cookiebanner beheren
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const acceptFunctionalButton = document.getElementById('accept-functional');
    const acceptAllButton = document.getElementById('accept-all');

    // Controleer of cookies al zijn geaccepteerd
    if (!getCookie('cookieConsent')) {
        cookieBanner?.classList.add('show');
    }

    // Alleen functionele cookies accepteren
    acceptFunctionalButton?.addEventListener('click', () => {
        setCookie('cookieConsent', 'functional', 365); // Functionele cookies
        cookieBanner?.classList.remove('show');
        console.log('Alleen functionele cookies geaccepteerd.');
    });

    // Alle cookies accepteren
    acceptCookiesButton?.addEventListener('click', () => {
        setCookie('cookieConsent', 'all', 365); // Alle cookies
        cookieBanner?.classList.remove('show');
        console.log('Alle cookies geaccepteerd.');
    });

    // Optionele knop om cookies opnieuw te accepteren
    acceptAllButton?.addEventListener('click', () => {
        setCookie('cookieConsent', 'all', 365);
        cookieBanner?.classList.remove('show');
        console.log('Alle cookies opnieuw geaccepteerd.');
    });
});

/**
 * Controleer of bepaalde cookies nodig zijn
 * Bijvoorbeeld voor Google Analytics
 */
function isAnalyticsAllowed() {
    return getCookie('cookieConsent') === 'all';
}

if (isAnalyticsAllowed()) {
    console.log('Analytics ingeschakeld. Hier voeg je je trackingcode toe.');
    // Voeg hier de Google Analytics-code of andere trackingtools in
}

