(function () {

  var bv = new Bideo();
  bv.init({
    
    videoEl: document.querySelector('#background_video'),

    container: document.querySelector('body'),

    resize: true,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),
    
    src: [
      {
        src: 'back.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());



// FUNCION ENTER PRINCIPAL ---------------------------------------------------------

// Variable con un contador por los intentos de entrar
var attempts = 3;

function showToast() {

  function cambiarTexto() {
    // Obtener el elemento div por su ID
    var miDiv = document.getElementById('miDiv');
  
    // Cambiar el texto dentro del div
    miDiv.innerText = 'Incorrect username or password left ' + attempts + ' attempts';
  }

  // restamos intentos
  attempts--;

  // empieza el bucle donde nos va mostrando cada vez que clicamos
  if (attempts === 2) {

    desplegarToast();
  
    setTimeout(function () {
      liveToast.classList.remove('animate__animated', 'animate__fadeInRight');
    }, 1000); // Ajusta el tiempo según la duración de la animación

  } else if (attempts === 1) {

    desplegarToast();
    cambiarTexto();

    setTimeout(function () {
      liveToast.classList.remove('animate__animated', 'animate__fadeInRight');
    }, 1000); // Ajusta el tiempo según la duración de la animación

  } else if (attempts === 0) {

    // Cambiar el texto dentro del div
    miDiv.innerText = 'You have reached the maximum numbers of login attemps the system is now locked';

    desplegarToast();
    desplegarToastSup();
    desplegarBlockMsg();

    setTimeout(function () {
      liveToast.classList.remove('animate__animated', 'animate__fadeInRight');
    }, 1000); // Ajusta el tiempo según la duración de la animación

  }
}


// FUNCION ENTER PRINCIPAL ---------------------------------------------------------

function showToastS() {

    var usuario = document.getElementById('usuario').value;
    var contra = document.getElementById('contra').value;

    var toastSuperior2 = document.getElementById('toastSuperior2');
    var divToasSup2 = document.getElementById('divToasSup2')

      // Verificar las credenciales 
      if (usuario === 'admin' && contra === 'admin') {
        toastSuperior2.style.display = 'none';
        salirBlockMsg();
        salirToastSup();
        salirToast();

        attempts = 3

      } else {
        // Si las credenciales son incorrectas, puedes mostrar un mensaje o realizar otra acción
        divToasSup2.style.display = 'block';
        divToasSup2.classList.add('animate__animated', 'animate__shakeX');

        // Después de un tiempo, quitar la clase de animación para permitir que se repita
        setTimeout(function () {
          divToasSup2.classList.remove('animate__animated', 'animate__shakeX');
        }, 1000);
      }

}


// FUNCIONES actualizar tiempo de error -------------------------------------------------------

function actualizarTiempo() {
  // Obtener el elemento que contiene el tiempo
  var tiempoElemento = document.getElementById('temps');

  // Obtener la hora actual
  var now = new Date();

  var minutos = now.getMinutes();
  var tiempoActual = minutos;

  // Actualizar el contenido del elemento con el tiempo actual
  tiempoElemento.innerText = tiempoActual + ' min ago';
  
}

// Llamar a la función por primera vez para establecer el tiempo inicial
actualizarTiempo();

// Configurar un intervalo para actualizar el tiempo cada minuto (60000 milisegundos)
setInterval(actualizarTiempo, 60000);


// FUNCIONES ENSEÑAR TOASTS -------------------------------------------------------

function desplegarToast(){
  var liveToast = document.getElementById('liveToastOr');
  
  liveToast.classList.add('animate__animated', 'animate__fadeInRight');
  liveToast.style.display = 'block';
  liveToast.style.scale = '1.25';
}

function desplegarToastSup(){
  var toastSuperior = document.getElementById('toastSuperior');
 
  toastSuperior.classList.add('animate__animated', 'animate__fadeInRight');
  toastSuperior.style.display = 'block';
}

function desplegarBlockMsg(){
  var blockMsga = document.getElementById('blockMsg');

  blockMsga.style.display = 'block';
}

function desplegarToastSuperior2(){
  var toastSuperior2 = document.getElementById('toastSuperior2');

  toastSuperior2.style.display = 'block';
}

// FUNCIONES QUITAR TOAST -------------------------------------------------------

function salirToast(){
  var liveToast = document.getElementById('liveToastOr');

  liveToast.style.display = 'none';
}

function salirToastSup(){
  var toastSuperior = document.getElementById('toastSuperior');

  toastSuperior.style.display = 'none';
}

function salirBlockMsg(){
  var blockMsga = document.getElementById('blockMsg');

  blockMsga.style.display = 'none';
}





  



 