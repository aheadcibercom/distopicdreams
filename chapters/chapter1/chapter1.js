const chapter1Text = `In a city where electricity was a relic of the past, the last candle became a symbol of hope. It flickered weakly in Marta's hands as she walked through the abandoned streets, its light barely piercing the thick fog that had swallowed the world.

The government had promised eternal energy, but the machines had failed, leaving only silence and shadows. Now, the candle was more than light—it was resistance.

Marta reached the old library, where a group of survivors gathered. She placed the candle in the center, its flame trembling but alive. "As long as it burns," she said, "we remember what it means to be human."

Outside, the drones circled, their red eyes scanning for any sign of life. But in that small room, the last candle defied the darkness.`;

const chapter1TextES = `En una ciudad donde la electricidad era un relicto del pasado, la última vela se convirtió en un símbolo de esperanza. Titilaba débilmente en las manos de Marta mientras caminaba por las calles abandonadas, su luz apenas atravesaba la espesa niebla que había devorado el mundo.

El gobierno había prometido energía eterna, pero las máquinas fallaron, dejando solo silencio y sombras. Ahora, la vela era más que luz: era resistencia.

Marta llegó a la antigua biblioteca, donde un grupo de supervivientes se reunía. Colocó la vela en el centro, su llama temblorosa pero viva. "Mientras arda," dijo, "recordamos lo que significa ser humanos."

Afuera, los drones circulaban, sus ojos rojos escaneando en busca de cualquier señal de vida. Pero en aquella pequeña habitación, la última vela desafiaba a la oscuridad.`;

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    let index = 0;

    function type() {
        const path = window.location.pathname;
        let contentToType = path.includes('_es.html') ? chapter1TextES : chapter1Text;
        
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