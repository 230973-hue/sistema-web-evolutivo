const formulario = document.getElementById("contactForm");

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

  formulario.reset();

});