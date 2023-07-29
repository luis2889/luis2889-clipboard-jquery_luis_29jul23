$(document).ready(function () {
  // hacer dos funciones que agreguen y remuevan la clase en la etiqueta span
  function add() {
    $(".copied").addClass("d-none");
  }
  function remove() {
    $(".copied").removeClass("d-none");
  }

  // Llamamos  a las funciones y copiamos el texto con el click en el botón
  add();
  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");
    remove();
    setTimeout(add, 800);
  });
});