let tiempoRestante = 20 * 60;
        let intervalo = setInterval(actualizarCronometro, 1000);
        document.querySelector('#pista1').style.display = 'block';
        
        let respuestasCorrectas = ['', '', ''];
        
        function actualizarCronometro() {
            let minutos = Math.floor(tiempoRestante / 60);
            let segundos = tiempoRestante % 60;
            document.querySelector('#cronometro').textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
            
            if (tiempoRestante <= 0) {
                clearInterval(intervalo);
                alert('Se acabó el tiempo. ¡Intenta de nuevo!');
                location.reload();
            }
            tiempoRestante--;
        }
        
        function verificarRespuesta(num, correcta) {
            let respuesta = document.querySelector(`#respuesta${num}`).value.trim();
            if (respuesta === correcta) {
                respuestasCorrectas[num - 1] = respuesta;
                actualizarCodigoParcial();
                alert('¡Correcto!');
                document.querySelector(`#pista${num}`).style.display = 'none';
                if (num < 3) {
                    document.querySelector(`#pista${num + 1}`).style.display = 'block';
                } else {
                    document.querySelector('#final').style.display = 'block';
                }
            } else {
                alert('Incorrecto, intenta de nuevo.');
            }
        }
        
        function actualizarCodigoParcial() {
            document.querySelector('#codigoParcial').textContent = respuestasCorrectas.map(n => n || '_').join(' ');
        }
        
        function verificarCodigoFinal() {
            let codigoIngresado = document.querySelector('#respuestafinal').value.trim();
            const urlvars = new URLSearchParams(window.location.search);
            const equipo = urlvars.get('equipo');

            // let codigoGenerado = respuestasCorrectas.join(''); 
            let codigoGenerado = "";

            if (equipo == "pincel") {
                codigoGenerado = "1357";
            } else if (equipo == "paleta") {
                codigoGenerado = "7531";
            }

            if (codigoIngresado === codigoGenerado) {
                clearInterval(intervalo);
                document.querySelector('#final').style.display = 'none';
                document.querySelector('#timer-lock').style.display = 'none';
                document.querySelector('#contenedor-pistas').style.display = 'none';
                document.querySelector('#ganaste').style.display = 'block';
            } else {
                alert('Código incorrecto, intenta de nuevo.');
            }
        }

        function toggleParagraph() {
             var paragraph = document.getElementById("extraParagraph");
             paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
         }

         function toggleParagraph2() {
            var paragraph = document.getElementById("extraParagraph2");
            paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
        }

        function toggleParagraph3() {
            var paragraph = document.getElementById("extraParagraph3");
            paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
        }
