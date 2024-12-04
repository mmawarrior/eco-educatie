// Get elements
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.nav-links');

// Add event listener for hamburger click
hamburger.addEventListener('click', () => {
    // Toggle menu visibility
    menu.classList.toggle('active');  // Toggle the 'active' class to show/hide menu
    hamburger.classList.toggle('active');  // Change hamburger icon to "X" or reset
});

// Close the menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');  // Close the menu
        hamburger.classList.remove('active');  // Reset hamburger icon to default
    });
});
