document.querySelectorAll('#detail-list .nav-link').forEach(function(tab) {
    tab.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-bs-target');
        document.querySelector(target).classList.add('active');
    })
})

var tabList = document.querySelectorAll('#detail-list .nav-link');
tabList.forEach(function(tab) {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Remove 'active' class from all tabs
        tabList.forEach(function(t) {
            t.classList.remove('active');
        });

        // Add 'active' class to clicked tab
        this.classList.add('active');

        // Hide all tab panes
        var tabContent = document.querySelectorAll('.tab-pane');
        tabContent.forEach(function(tc) {
            tc.classList.remove('active');
            tc.setAttribute('aria-hidden', 'true');
        });

        // Show clicked tab pane
        var target = this.getAttribute('data-bs-target');
        var tabPane = document.querySelector(target);
        tabPane.classList.add('active');
        tabPane.setAttribute('aria-hidden', 'false');
    });
});