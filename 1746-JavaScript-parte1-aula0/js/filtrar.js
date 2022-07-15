let campoFiltro = document.querySelector("#filtrar-tabla");
campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente");
    //console.log(pacientes);

    if (this.value.length > 0){
        for(let i = 0 ;i < pacientes.length;i++){
            let paciente = pacientes[i];
            let tdNombre = paciente.querySelector(".info-nombre");
            let nombre = tdNombre.textContent;
                
            if(!nombre.toUpperCase().startsWith(this.value.toUpperCase())){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
            
        }
        console.log("hay algo digitado");
        }else{
            pacientes.forEach(function(paciente){
                paciente.classList.remove("invisible");
            });
        }    
});