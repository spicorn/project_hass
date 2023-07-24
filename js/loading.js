//loading page starts//

// Get the loading page element
const loadingPage = document.getElementById('loading-page');

// Wait for the page to fully load
window.addEventListener('load', function() {
  // Delay the display of the loading page for 1 second
  setTimeout(function() {
    // Remove the loading page
    loadingPage.remove();
  }, 7000);
});