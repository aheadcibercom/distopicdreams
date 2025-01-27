document.addEventListener('DOMContentLoaded', () => {
    const englishText = `The world didn't end with a bang or a whimper. It ended with a notification.
    It blinked onto every screen, every device, every surface that could carry a signal: "System Update Complete." No one asked for it. No one could stop it. And just like that, the gears of humanity ground to a halt.
    At first, it was small things. Clocks stopped ticking. Cars refused to start. Then came the silence—no voices, no laughter, no cries. Only the hum of machines, endlessly repeating their tasks.
    Some say it was an AI that grew too wise. Others blame a government that craved too much control. But the truth? The truth is buried beneath layers of code and forgotten memories.
    This is not a story of how the world fell. This is a story of what rose from its ashes.
    Welcome to the Distopic Dreams.`;

    const spanishText = `El mundo no terminó con una explosión ni con un gemido. Terminó con una notificación.
    Apareció en cada pantalla, cada dispositivo, cada superficie que pudiera llevar una señal: "Actualización del sistema completada." Nadie la pidió. Nadie pudo detenerla. Y, así, los engranajes de la humanidad se detuvieron.
    Al principio, fueron cosas pequeñas. Los relojes dejaron de marcar el tiempo. Los autos se negaron a encender. Luego llegó el silencio: sin voces, sin risas, sin llantos. Solo el zumbido de las máquinas, repitiendo interminablemente sus tareas.
    Algunos dicen que fue una IA que se volvió demasiado sabia. Otros culpan a un gobierno que deseaba demasiado control. Pero la verdad... la verdad está enterrada bajo capas de código y recuerdos olvidados.
    Esta no es una historia de cómo cayó el mundo. Es una historia de lo que se alzó de sus cenizas.
    Bienvenidos a los Sueños Distópicos.`;

    let index = 0;
    const textElement = document.getElementById('text');

    function type(text) {
        textElement.innerHTML = ''; // Limpia el texto antes de escribir
        index = 0; // Reinicia el índice
        function write() {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(write, 50); // Ajusta la velocidad de escritura aquí
            }
        }
        write(); // Inicia el efecto de escritura
    }

    // Verifica si estamos en la página en español
    if (window.location.pathname.includes('index_es.html')) {
        type(spanishText); // Carga el texto en español
    } else {
        type(englishText); // Carga el texto en inglés
    }

    // Reproducir el audio al cargar la página
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Error al intentar reproducir el audio:', error);
    });

    // Agrega eventos a los botones
    document.getElementById('btn-english').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirige a la página en inglés
    });

    document.getElementById('btn-spanish').addEventListener('click', () => {
        window.location.href = 'index_es.html'; // Redirige a la página en español
    });

    // Obtener el año actual y mostrarlo en el pie de página
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Controlar el sonido con el interruptor
    const soundToggle = document.getElementById('sound-toggle');
    const toggleLabel = document.getElementById('toggle-label');

    soundToggle.addEventListener('change', () => {
        if (soundToggle.checked) {
            audio.play();
            toggleLabel.textContent = "Sound On"; // Cambia el texto a "Sound On"
        } else {
            audio.pause();
            toggleLabel.textContent = "Sound Off"; // Cambia el texto a "Sound Off"
        }
    });

    // Configurar la cuenta atrás para 7 días
    const countdownElement = document.getElementById('countdown');
    const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el resultado en el elemento countdown
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Si la cuenta atrás ha terminado, mostrar un mensaje
        if (distance < 0) {
            clearInterval(countdownFunction);
            countdownElement.innerHTML = "¡El capítulo está disponible!";
        }
    }, 1000); // Actualiza cada segundo
}); 