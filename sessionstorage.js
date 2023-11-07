
let CheckCred = () => {
    if (sessionStorage.getItem("user-cred")) {
        console.log(sessionStorage.getItem("user-cred"))
        console.log(1)
        document.getElementById("profilebutton").innerHTML = `

                    <a href="../Login Signup Page/login.html" class="nav-link nav-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            <span>Sign In</span>
                        </a>

                    `

    } else {
        // var name = sessionStorage.getItem("user-info");
        
        console.log(2)
        let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
        var name = UserInfo.username;
        document.getElementById("profilebutton").innerHTML = `

                    <a href="../Profile Page/mainprofile.html" class="nav-link nav-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            <span>${name}</span>
                        </a>

                    `
    }

}

window.addEventListener("load", CheckCred);