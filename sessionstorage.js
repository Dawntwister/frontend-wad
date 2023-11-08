function updateDisplayedUsername() {
    const userInfo = JSON.parse(sessionStorage.getItem("user-info"));
    if (userInfo) {
        const name = userInfo.username;
        document.getElementById("profilebutton").innerHTML = `
            <a href="../Profile Page/mainprofile.html" class="nav-link nav-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>${name}</span>
            </a>
        `;
    } else {
        document.getElementById("profilebutton").innerHTML = `
            <a href="../Login Signup Page/login.html" class "nav-link nav-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>Sign In</span>
            </a>
        `;
    }
}

// Initialize the displayed username when the page loads
window.addEventListener("load", updateDisplayedUsername);

// Other session storage-related code can go here