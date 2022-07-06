let titulo = document.querySelector(".titulo");
titulo.addEventListener("click", mostrarMensaje);

function mostrarMensaje(){
    console.log("usted hizo clic en el titulo");
}

let agregar = document.querySelector(".bto-principal");
agregar.addEventListener("click", agregarDatos);

function agregarDatos(){
    console.log("mentidita");
}



let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdIMC = paciente.querySelector(".info-imc");
  let imc = peso / (altura * altura);
  tdIMC.textContent = imc;

  let pesoEsValido = true;
  let alturaEsValido = true;

  //verdadero o falso --> verdadero
  if (peso <= 0 || peso >= 1000) {
    console.log("Peso Incorrecto");
    tdPeso.textContent = "Peso incorrecto";
    paciente.classList.add("paciente-incorrecto");
    pesoEsValido = false;
  }

  //verdadero o falso --> verdadero
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Incorrecto");
    tdAltura.textContent = "altura incorrecta";
    paciente.classList.add("paciente-incorrecto");    
    alturaEsValido = false;
  }

  //verdadero y verdadero --> verdadero
  //verdadero Y falso --> falso
  //falaso Y falso --> falso
  if (pesoEsValido && alturaEsValido) {
    let imc = peso / (altura * altura);
    tdIMC.textContent = imc.toFixed(2);
  } else {
    tdIMC.textContent = "dato incorrecto";
  }
}

//console.log(paciente);
//console.log(tdPeso);
//console.log(peso);
//console.log(tdAltura);
//console.log(altura);

//imc = peso/ altura * altura
//console.log(imc);
