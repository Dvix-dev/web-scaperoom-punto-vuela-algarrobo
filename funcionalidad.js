let tiempoRestante = 20 * 60;
        let intervalo = setInterval(actualizarCronometro, 1000);
        document.getElementById('pista1').style.display = 'block';
        
        let respuestasCorrectas = ['', '', '', ''];
        
        function actualizarCronometro() {
            let minutos = Math.floor(tiempoRestante / 60);
            let segundos = tiempoRestante % 60;
            document.getElementById('cronometro').textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
            
            if (tiempoRestante <= 0) {
                clearInterval(intervalo);
                alert('Se acabó el tiempo. ¡Intenta de nuevo!');
                location.reload();
            }
            tiempoRestante--;
        }
        
        function verificarRespuesta(num, correcta) {
            let respuesta = document.getElementById(`respuesta${num}`).value.trim();
            if (respuesta === correcta) {
                respuestasCorrectas[num - 1] = respuesta;
                actualizarCodigoParcial();
                alert('¡Correcto!');
                document.getElementById(`pista${num}`).style.display = 'none';
                if (num < 4) {
                    document.getElementById(`pista${num + 1}`).style.display = 'block';
                } else {
                    document.getElementById('final').style.display = 'block';
                }
            } else {
                alert('Incorrecto, intenta de nuevo.');
            }
        }
        
        function actualizarCodigoParcial() {
            document.getElementById('codigoParcial').textContent = respuestasCorrectas.map(n => n || '_').join(' ');
        }
        
        function verificarCodigoFinal() {
            let codigoIngresado = document.getElementById('codigoFinal').value.trim();
            let codigoGenerado = respuestasCorrectas.join('');
            if (codigoIngresado === codigoGenerado) {
                clearInterval(intervalo);
                document.getElementById('ganaste').style.display = 'block';
            } else {
                alert('Código incorrecto, intenta de nuevo.');
            }
        }