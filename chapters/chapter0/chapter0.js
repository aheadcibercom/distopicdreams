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

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    let index = 0;

    function type() {
        const path = window.location.pathname;
        let contentToType = path.includes('_es.html') ? spanishText : englishText;
        
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

    type();
}); 