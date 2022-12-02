(() => {
  // variables
  var horasT = 0;
  var minutosT = 0;
  var segundosT = 0;
  var contador = 0;

  // magia
  const $t3_boton = document.querySelector("#t3-boton");
  const $t3_strong = document.querySelector("#t3-strong");
  $t3_boton.onclick = () => {
    let horas = Number(document.querySelector("#t3-horas").value);
    let minutos = Number(document.querySelector("#t3-minutos").value);
    let segundos = Number(document.querySelector("#t3-segundos").value);
    if (horas && minutos && segundos) {
      horasT += horas;
      minutosT += minutos;
      segundosT += segundos;
      contador++;
      document.querySelector("#t3-horas").value = "";
      document.querySelector("#t3-minutos").value = "";
      document.querySelector("#t3-segundos").value = "";
      if (contador == 25) {
        $t3_boton.remove();
        display();
      } else {
        $t3_strong.innerText = String(Number($t3_strong.innerText) + 1);
      }
    }
  };

  function display() {
    const $t3_div = document.querySelector("#t3-div");
    const $t3_p = document.querySelector("#t3-div p");
    // el prettier me arruina los paréntesis, asi que los hago separadamente......
    const minutosC = segundosT / 60;
    const horasC = minutosC / 60;
    const horasF = horasT + horasC;
    $t3_p.innerText = "Horas totales: " + horasF.toFixed(2);
    $t3_div.style.display = "block";
  }
})();
