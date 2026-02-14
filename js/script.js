const boton = document.getElementById('miBoton');
const contenedor = document.getElementById('paleta');

function generarColorHex() { //genera el color hex
    const numero = Math.floor(Math.random() * 16777215);
    return "#" + numero.toString(16).padStart(6, "0");
}

function generarPaleta(cantidad) {

  contenedor.innerHTML = ""; //limpia la paleta anterior

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHex();

    const section = document.createElement("section");
    section.classList.add("color-box");
    section.style.backgroundColor = color;
    section.textContent = color;

    contenedor.appendChild(section);
  }
}

boton.addEventListener("click", () => {
  generarPaleta(5);
});




