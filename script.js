const formulario = document.getElementById("contactForm");

const listaContactos = document.getElementById("listaContactos");

let contactos = [];

formulario.addEventListener("submit", function(e){

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  const telefono = document.getElementById("telefono").value;

  const correo = document.getElementById("correo").value;

  const contacto = {
    nombre,
    telefono,
    correo
  };

  contactos.push(contacto);

  mostrarContactos();

  formulario.reset();

});

function mostrarContactos(){

  listaContactos.innerHTML = "";

  contactos.forEach(contacto => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("contacto");

    tarjeta.innerHTML = `
      <h3>${contacto.nombre}</h3>
      <p>${contacto.telefono}</p>
      <p>${contacto.correo}</p>
    `;

    listaContactos.appendChild(tarjeta);

  });

}