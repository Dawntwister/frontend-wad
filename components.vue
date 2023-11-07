// Create a new Vue instance
const root = Vue.createApp({

    // Data Properties
    data() {
        return{
            
        }
    }
})

// Add components

root.component("fg_scripts",{
    props:[],
    template:
        `

        `
})
root.component("fg_top_green",{
    props:[],
    template:
        `
        <div class="py-1 greencontainer">
        <div class="d-flex flex-wrap align-items-center">
            <!-- Logo Column on Small Viewport -->
            <div class="col-12 col-md-7 mb-2 mb-md-0 text-center text-md-start">
                <a href="../home/home.html" class=" justify-content-center justify-content-md-start text-decoration-none">
                    <img src="../images/logo/logo.png" alt="" class="w-25" >
                </a>
            </div>
    
            <!-- Buttons Column -->
                <!-- This jquery script enables the theme selection -->
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script>
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
                </script>
                <!-- End theme selection script -->
            <div class="col-12 col-md-5 pe-3">
                <ul class="nav text-small justify-content-center justify-content-md-end">
                    <li id="profilebutton">
                        <a href="../Login Signup Page/login.html" class="nav-link nav-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                            Sign In
                        </a>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn btn-success-outline dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                                  </svg>
                                Theme
                            </button>
                            <ul class="dropdown-menu dropdown-menu-top text-center">
                              <li><a class="dropdown-item" href="#" id="lightTheme">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                  </svg>
                                Light
                                </a></li>
                              <li><a class="dropdown-item" href="#" id="darkTheme">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                                  </svg>
                                Dark
                            </a></li>
                            </ul>
                          </div>
                    </li>
                    <li>
                        <a href="../cart/cart.html" class="nav-link nav-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            Cart
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        `
})
root.component("fg_top_grey",{
    props:[],
    template:
        `

        <nav class="navbar navbar-expand-lg navbar-expand-lg nav-underline justify-content-between w-100 border-bottom px-5 navbar-top">
        <div class="container-fluid px-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav w-100 d-flex justify-content-between">
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="../home/home.html" active>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="../products/products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="../vendors/vendors.html">Vendors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="../Event Page/events.html">News & Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="../Education Page/education.html">Education Hub</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="../About/about.html">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        `
})  
root.component("fg_bot",{
    props:[],
    template:
        `
        <div class="container-fluid px-5">
        <footer class="row justify-content-md-evenly justify-content-start row-cols-2 row-cols-md-6 py-5 my-5 border-top">
            <div class="col-12 col-sm mb-3 order-last order-md-0">
                <a href="../home/home.html" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                    <img src="../images/logo/logo_dark.png" alt="Company Logo" class="bi me-2 img-fluid">
                </a>
                <ul class="list-unstyled d-flex justify-content-center">
                    <li class="mx-4"><a href="../home/home.html" class="link-body-emphasis" style="color: #103315;">
                        <i width="24" height="24" class="bi bi-facebook"></i>
                    </a></li>
                    <li class="mx-4"><a href="../home/home.html" class="link-body-emphasis" style="color: #103315;">
                        <i width="24" height="24" class="bi bi-twitter"></i>
                    </a></li>
                    <li class="mx-4"><a href="../home/home.html" class="link-body-emphasis" style="color: #103315;">
                        <i width="24" height="24" class="bi bi-linkedin"></i>
                    </a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>About</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="../About/about.html" class="nav-link p-0 text-body-secondary">About Us</a></li>
                </ul>
            </div>
    
            <div class="col mb-3">
                <h5>Our Offerings</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="../Products/products.html" class="nav-link p-0 text-body-secondary">Products</a></li>
                    <li class="nav-item mb-2"><a href="../Vendors/vendors.html" class="nav-link p-0 text-body-secondary">Vendors</a></li>
                </ul>
            </div>
    
            <div class="col mb-3">
                <h5>Information</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="../Event Page/events.html" class="nav-link p-0 text-body-secondary">News & Events</a></li>
                    <li class="nav-item mb-2"><a href="../Education Page/education.html" class="nav-link p-0 text-body-secondary">Education Hub</a></li>
                </ul>
            </div>
    
            <div class="col mb-3">
                <h5>For Users</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="../Login Signup Page/login.html" class="nav-link p-0 text-body-secondary">Sign In</a></li>
                    <li class="nav-item mb-2"><a href="../Login Signup Page/signup.html" class="nav-link p-0 text-body-secondary">Register</a></li>
                    <li class="nav-item mb-2"><a href="../cart/cart.html" class="nav-link p-0 text-body-secondary">Cart</a></li>
                </ul>
            </div>
        </footer>
    
    


    <!-- End Bottom Section -->

    
    </div>
        `
})


root.mount("#root")
