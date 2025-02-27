document.addEventListener('DOMContentLoaded', () => {
    // Reproducir el audio al cargar la página
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Error al intentar reproducir el audio:', error);
    });

    // Controlar el sonido con el interruptor
    const soundToggle = document.getElementById('sound-toggle');
    const toggleLabel = document.getElementById('toggle-label');

    soundToggle.addEventListener('change', () => {
        if (soundToggle.checked) {
            audio.play();
            toggleLabel.textContent = "Sound On";
        } else {
            audio.pause();
            toggleLabel.textContent = "Sound Off";
        }
    });

    // Funcionalidad del menú de capítulos
    const menuButton = document.getElementById('menuButton');
    const chaptersMenu = document.getElementById('chaptersMenu');

    menuButton.addEventListener('click', function() {
        chaptersMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !chaptersMenu.contains(event.target)) {
            chaptersMenu.classList.remove('active');
        }
    });

    // Obtener el año actual y mostrarlo en el pie de página
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}); 