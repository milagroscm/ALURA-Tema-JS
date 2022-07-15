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

  let pesoEsValido = validarPeso(peso);
  //let pesoEsValido =true;
  let alturaEsValido = validarAltura(altura);

  if (!pesoEsValido) {
    console.log("Peso Incorrecto");
    tdPeso.textContent = "Peso incorrecto";
    paciente.classList.add("paciente-incorrecto");
    pesoEsValido = false;
  }

  //verdadero o falso --> verdadero
  if (!alturaEsValido) {
    console.log("Altura Incorrecto");
    tdAltura.textContent = "Altura incorrecta";
    paciente.classList.add("paciente-incorrecto");    
    alturaEsValido = false;
  }

  if (pesoEsValido && alturaEsValido) {
    let imc = peso / (altura * altura);
    tdIMC.textContent = calcularIMC(peso, altura);
  } else {
    tdIMC.textContent = "dato incorrecto";
  }
}

function calcularIMC(peso, altura){
  let imc = peso / (altura * altura);
  return imc.toFixed(2)
}

function validarPeso(peso){
  return peso >= 0 && peso < 1000;
  // if(peso >= 0 && peso < 1000){
  //   return true;
  // }else{
  //   return false;
  // }
}

function validarAltura(altura){
  return altura >= 0 && altura < 3.00;
  // if(altura >= 0 && altura < 3.00){
  //   return true;
  // }else{
  //   return false;
  // }
}