// Disable right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable Ctrl+U
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.key === 'u') || (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});