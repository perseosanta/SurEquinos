document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Formulario enviado. ¡Gracias por contactarnos!');
  this.reset();
});
