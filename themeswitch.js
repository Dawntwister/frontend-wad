$(document).ready(function () {
    // Handle the Light Theme selection
    $("#lightTheme").click(function () {
        // Set the data-bs-theme attribute to "light"
        $("html").attr("data-bs-theme", "light");
    });

    // Handle the Dark Theme selection
    $("#darkTheme").click(function () {
        // Set the data-bs-theme attribute to "dark"
        $("html").attr("data-bs-theme", "dark");
    });
});