<div class="container-fluid nav-bar p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
            <h1 class="display-5 text-secondary m-0">
                <img src="img/codingtour log.avif" class="img-fluid" alt="">
            </h1>
        </a>
        <!-- Toggle button for mobile view -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span>
        </button>
        
        <!-- Navbar items -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="index.html" class="nav-item nav-link active" onclick="setActive(this)">Home</a>
                <a href="about.html" class="nav-item nav-link" onclick="setActive(this)">About CT</a>
                <div class="nav-item dropdown">
                    <a href="Courses/etrain-master/cource.html" class="nav-link dropdown-toggle" role="button" aria-expanded="false" onclick="setActive(this)">
                        Programs
                    </a>
                </div>
                <a href="./Coding Tutors/index.html" class="nav-item nav-link" onclick="setActive(this)">Coding Tutors</a>
                <a href="./ctmini/index.html" class="nav-item nav-link" onclick="setActive(this)">CT-Mini</a>
                <a href="faq.html" class="nav-item nav-link" onclick="setActive(this)">FAQ</a>
            </div>
            <a href="" class="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">Orientation</a>
        </div>
    </nav>
</div>

<script>
    // Function to set active class on clicked navbar item
    function setActive(element) {
        // Remove 'active' class from all navbar items
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add 'active' class to the clicked item
        element.classList.add('active');
    }
</script>
