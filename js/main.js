/* =================================================================== */
/*  main.js - Core JavaScript for the Lipunx Reboot Project          */
/* =================================================================== */

// Wait for the entire HTML document to be loaded and parsed before running the script.
// This is a best practice to prevent errors from trying to manipulate elements that don't exist yet.
document.addEventListener('DOMContentLoaded', function() {

    // --- Sticky Header Scroll Effect ---
    // This function adds a class to the header when the user scrolls down,
    // which allows us to change its style with CSS (e.g., add a background color).

    // Get a reference to the header element from the HTML.
    const header = document.getElementById('main-header');

    // We only want to run this code if the header actually exists on the page.
    if (header) {
        // Listen for the 'scroll' event on the window.
        window.addEventListener('scroll', function() {
            // window.scrollY gives us the number of pixels the page has been scrolled vertically.
            // We check if the scroll position is greater than 50 pixels from the top.
            if (window.scrollY > 50) {
                // If it is, add the 'scrolled' class to the header's class list.
                // Our CSS file has a rule for '#main-header.scrolled'.
                header.classList.add('scrolled');
            } else {
                // If the user scrolls back to the top, remove the 'scrolled' class.
                // This will make the header transparent again.
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Future JavaScript can go here ---
    // For example, code for a mobile navigation menu, a band search filter,
    // or an interactive photo gallery would be added below.

});