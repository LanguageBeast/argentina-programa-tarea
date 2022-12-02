const $t2_boton = document.querySelector("#t2-boton");
$t2_boton.onclick = () => {
  // obtengo la información
  const primerNombre = document.querySelector("#t2-primer-nombre").value;
  const segundoNombre = document.querySelector("#t2-segundo-nombre").value;
  const apellido = document.querySelector("#t2-apellido").value;
  const edad = document.querySelector("#t2-edad").value;
  // compruebo si todos los campos se llenaron
  if (primerNombre && segundoNombre && apellido && edad) {
    // obtengo los elementos HTML y edito su innerText
    const $t2_pre = document.querySelector("#t2-pre");
    $t2_pre.innerText = `
  Esta es tu información:
  PRIMER NOMBRE: ${primerNombre}
  SEGUNDO NOMBRE: ${segundoNombre}
  APELLIDO: ${apellido}
  EDAD: ${edad}
  `;
    const $t2_title = document.querySelector("#t2-titulo");
    $t2_title.innerText = `¡Bienvenido, ${primerNombre}!`;
    const $t2_div = document.querySelector("#t2-div");
    $t2_div.style.display = "block";
  }
};
