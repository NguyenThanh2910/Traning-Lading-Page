document.addEventListener('scroll', function () {
    const navbarScrolled = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbarScrolled.classList.add('scrolled');
    } else {
        navbarScrolled.classList.remove('scrolled');
    }
}); 
    
    // Toggle the navigation on click
    document.getElementById('navbar_icon').addEventListener('click', function() {
        const navbarResponsive = document.getElementById('navbar_right');
        navbarResponsive.classList.toggle('show');
        this.classList.toggle('active');
    });