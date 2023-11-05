function openTab(tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";

    // Activate the clicked tab link
    document.getElementById(tabName + "TabButton").classList.add("active");
}

function startQuiz() {
    // Hide the quiz description text and "Start Quiz" button
    document.getElementById("quizDescription").style.display = "none";
    document.getElementById("startQuizButton").style.display = "none";

    // Show the quiz content
    var quizFrame = document.getElementById("quizFrame");
    quizFrame.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const categoryFilter = document.getElementById("category-filter");
    const ecards = document.querySelectorAll(".ecards_item");

    categoryFilter.addEventListener("change", function() {
        const selectedCategory = this.value;

        ecards.forEach(item => {
            const itemCategory = item.getAttribute("data-category");
            if (selectedCategory === "all" || itemCategory === selectedCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



// By default, display the "Explore" tab with other tabs hidden
document.getElementById("Explore").style.display = "block";
document.getElementById("ExploreTabButton").classList.add("active");