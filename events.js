function setupTabs() {
    function openTab(tabName) {
      var i;
      var tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
  
      var tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  
      document.getElementById(tabName).style.display = "block";
    }
  
    // Add event listeners to your tab buttons here
    var eventsTabButton = document.getElementById("EventsTabButton");
    var newsTabButton = document.getElementById("NewsTabButton");
  
    eventsTabButton.addEventListener("click", function () {
      openTab("Events");
      eventsTabButton.className += " active";
      newsTabButton.className = newsTabButton.className.replace(" active", "");
    });
  
    newsTabButton.addEventListener("click", function () {
      openTab("News");
      newsTabButton.className += " active";
      eventsTabButton.className = eventsTabButton.className.replace(" active", "");
    });
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", setupTabs);