const formulario = document.getElementById("contactForm");

const listaContactos = document.getElementById("listaContactos");

const mensaje = document.getElementById("mensaje");

let contactos = [];

formulario.addEventListener("submit", function(e){

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  const telefono = document.getElementById("telefono").value;

  const correo = document.getElementById("correo").value;

  if(nombre === "" || telefono === "" || correo === ""){

    mostrarMensaje("Todos los campos son obligatorios","red");

    return;

  }

  const contacto = {
    id: Date.now(),
    nombre,
    telefono,
    correo
  };

  contactos.push(contacto);

  mostrarContactos();

  formulario.reset();

  mostrarMensaje("Contacto agregado","green");

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

      <button onclick="eliminarContacto(${contacto.id})">
        Eliminar
      </button>
    `;

    listaContactos.appendChild(tarjeta);

  });

}

function eliminarContacto(id){

  contactos = contactos.filter(contacto => contacto.id !== id);

  mostrarContactos();

  mostrarMensaje("Contacto eliminado","red");

}

function mostrarMensaje(texto,color){

  mensaje.textContent = texto;

  mensaje.style.color = color;

  setTimeout(() => {

    mensaje.textContent = "";

  },3000);

}