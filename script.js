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

    // Modificar los textos del Capítulo 1
    const chapter1Text = `In a city where electricity was a relic of the past, the last candle became a symbol of hope. It flickered weakly in Marta's hands as she walked through the abandoned streets, its light barely piercing the thick fog that had swallowed the world.

    The government had promised eternal energy, but the machines had failed, leaving only silence and shadows. Now, the candle was more than light—it was resistance.

    Marta reached the old library, where a group of survivors gathered. She placed the candle in the center, its flame trembling but alive. "As long as it burns," she said, "we remember what it means to be human."

    Outside, the drones circled, their red eyes scanning for any sign of life. But in that small room, the last candle defied the darkness.`;

    const chapter1TextES = `En una ciudad donde la electricidad era un relicto del pasado, la última vela se convirtió en un símbolo de esperanza. Titilaba débilmente en las manos de Marta mientras caminaba por las calles abandonadas, su luz apenas atravesaba la espesa niebla que había devorado el mundo.

    El gobierno había prometido energía eterna, pero las máquinas fallaron, dejando solo silencio y sombras. Ahora, la vela era más que luz: era resistencia.

    Marta llegó a la antigua biblioteca, donde un grupo de supervivientes se reunía. Colocó la vela en el centro, su llama temblorosa pero viva. "Mientras arda," dijo, "recordamos lo que significa ser humanos."

    Afuera, los drones circulaban, sus ojos rojos escaneando en busca de cualquier señal de vida. Pero en aquella pequeña habitación, la última vela desafiaba a la oscuridad.`;

    let index = 0;
    const textElement = document.getElementById('text');

    // Modificar la función type para manejar diferentes capítulos
    function type() {
        const path = window.location.pathname;
        let contentToType = '';
        
        if (path.includes('chapter0')) {
            contentToType = path.includes('_es.html') ? spanishText : englishText;
        } else {
            contentToType = path.includes('_es.html') ? chapter1TextES : chapter1Text;
        }
        
        textElement.innerHTML = '';
        index = 0;
        
        function write() {
            if (index < contentToType.length) {
                textElement.innerHTML += contentToType.charAt(index);
                index++;
                setTimeout(write, 50);
            }
        }
        write();
    }

    // Iniciar la animación de texto al cargar la página
    type();

    // Reproducir el audio al cargar la página
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Error al intentar reproducir el audio:', error);
    });

    // Modificar los event listeners de los botones de idioma
    document.getElementById('btn-english').addEventListener('click', () => {
        const path = window.location.pathname;
        if (path.includes('chapter1')) {
            window.location.href = 'chapter1.html'; // Si estamos en el capítulo 1, vamos a su versión en inglés
        } else {
            window.location.href = 'index.html'; // Si estamos en el índice, vamos a su versión en inglés
        }
    });

    document.getElementById('btn-spanish').addEventListener('click', () => {
        const path = window.location.pathname;
        if (path.includes('chapter1')) {
            window.location.href = 'chapter1_es.html'; // Si estamos en el capítulo 1, vamos a su versión en español
        } else {
            window.location.href = 'index_es.html'; // Si estamos en el índice, vamos a su versión en español
        }
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
}); 