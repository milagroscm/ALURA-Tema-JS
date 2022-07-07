let botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function(evento){
    evento.preventDefault();

    let form = document.querySelector("#form-adicionar");
    let nombre = form.nombre.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    
    let tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");

    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso, altura);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);
});