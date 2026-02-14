const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
    console.log('Apretratste el boton');
})

const modoOscuro = document.getElementById('modoOscuro');
modoOscuro.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    event.tarjet.textContent = 'Modo Claro';
    event.tarjet.id = 'modoClaro';
})