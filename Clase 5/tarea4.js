const $t4_boton = document.querySelector("#t4-boton");
console.log($t4_boton);
$t4_boton.onclick = () => {
  const vectorNumeros = [].map.call(
    document.querySelectorAll("ol li"),
    (tag) => {
      return Number(tag.innerText);
    }
  );
  vectorNumeros.sort((a, b) => a - b);
  console.log(vectorNumeros);
  const menor = vectorNumeros[0];
  const mayor = vectorNumeros.slice(-1);
  const promedio =
    vectorNumeros.reduce((acc, el) => acc + el, 0) / vectorNumeros.length;
  let maxOcurrencias = -1;
  let maxOcurrenciasNum;
  let i = 0;
  while (i < vectorNumeros.length) {
    let actual = vectorNumeros[i];
    let cantActual = 0;
    while (actual == vectorNumeros[i] && i < vectorNumeros.length) {
      cantActual++;
      i++;
    }
    console.log(actual);
    console.log(cantActual);
    if (cantActual > maxOcurrencias) {
      maxOcurrencias = cantActual;
      maxOcurrenciasNum = actual;
    }
  }
  document.querySelector("#em-prom").innerText =
    "El promedio es de " + promedio.toFixed(2) + "\n";
  document.querySelector("#em-min").innerText =
    "El número más chico es " + menor + "\n";
  document.querySelector("#em-max").innerText =
    "El número más grande es " + mayor + "\n";
  document.querySelector("#em-instancias").innerText =
    "El número que más veces aparece es " + maxOcurrenciasNum + "\n";
  document.querySelector("#t4-div").style.display = "block";
  $t4_boton.remove();
};
