function toggleMenu() {
    const navOverlay = document.querySelector('.nav-overlay');
    navOverlay.classList.toggle('active');
}

document.querySelector('.nav-overlay').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        toggleMenu(); 
    }
});