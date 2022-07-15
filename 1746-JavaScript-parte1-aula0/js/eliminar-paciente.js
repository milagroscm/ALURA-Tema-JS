//let pacientesN = document.querySelectorAll(".paciente");
let tabla =document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove(); 
    },500);
});

/*
pacientesN.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});*/