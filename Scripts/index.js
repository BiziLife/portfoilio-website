function changeNavMenu() {
    var navbar = document.getElementById('navBar');
    var scrollValue = window.scrollY;
    if (scrollValue < 20) {
        navbar.classList.remove('bg-nav-color');
    } else {
        navbar.classList.add('bg-nav-color');
    }
}

window.addEventListener('scroll', changeNavMenu);