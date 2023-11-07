$(document).ready(function () {
    // Retrieve the theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Set the theme based on the saved preference (or default to "light" if not set)
    $("html").attr("data-bs-theme", savedTheme || "light");

    // Handle the Light Theme selection
    $("#lightTheme").click(function () {
        // Set the data-bs-theme attribute to "light"
        $("html").attr("data-bs-theme", "light");
        // Store the theme preference in localStorage
        localStorage.setItem('theme', 'light');
    });

    // Handle the Dark Theme selection
    $("#darkTheme").click(function () {
        // Set the data-bs-theme attribute to "dark"
        $("html").attr("data-bs-theme", "dark");
        // Store the theme preference in localStorage
        localStorage.setItem('theme', 'dark');
    });
});
