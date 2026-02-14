const boton = document.getElementById('miBoton');
const contenedor = document.getElementById('paleta');

function generarColorHex() { //genera el color hex
    const numero = Math.floor(Math.random() * 16777215);
    return "#" + numero.toString(16).padStart(6, "0");
}
function esColorOscuro(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  const luminosidad = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminosidad < 128;
}

function generarPaleta(cantidad) {

  contenedor.innerHTML = ""; //limpia la paleta anterior

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHex();

    const section = document.createElement("section");
    section.classList.add("color-box");
    section.style.backgroundColor = color;
    section.textContent = color;

    if (esColorOscuro(color)) {
        section.style.color = "white";
    } else {
        section.style.color = "black";
    }


    contenedor.appendChild(section);
  }
}

boton.addEventListener("click", () => {
  generarPaleta(6);
});




