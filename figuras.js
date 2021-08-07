/// Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perímetro del cuadrado: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado: " + areaCuadrado + "cm2");

console.groupEnd();
// Codigo del triangulo
console.group("triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}
// console.log("El perimetro del triangulo el de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cm2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
//console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El PI es de: " + PI);

// Citcunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log("El perimetro es de: " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

//console.log("El area del circulo es de: " + areaCirculo + "cm2");

console.groupEnd();

// Interaccion con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function trinagulo(lado1, lado2, base, altura) {
  let perimetroT = lado1 + lado2 + base;
  let areaT = (base * altura) / 2;

  console.group("Triangulo");
  console.log(`El perímetro del triangulo es: ${perimetroT}cm`);
  console.log(`El área del triangulo es: ${areaT}cm^2`);
  console.groupEnd();
}

function triangulo2() {
  let lado1 = document.getElementById("tLado1");
  let tLado1 = parseFloat(lado1.value);

  let lado2 = document.getElementById("tLado2");
  let tLado2 = parseFloat(lado2.value);

  let base = document.getElementById("tBase");
  let tBase = parseFloat(base.value);

  let altura = document.getElementById("tAltura");
  let tAltura = parseFloat(altura.value);

  let tPerimetro = tLado1 + tLado2 + tBase;
  let tArea = (tBase * tAltura) / 2;

  alert(
    `El perímetro del triangulo es: ${tPerimetro}cm y el área es de ${tArea}cm^2`
  );
}

trinagulo(6, 6, 4, 5.5);
