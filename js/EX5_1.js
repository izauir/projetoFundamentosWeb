var pacientes = [];
function adicionarPacientes(){
    var nome =document.getElementById("inPaciente").value;
    var outLista = document.getElementById("outLista");
    if(nome == ""){
        alert("Informe o nome do paciente");
        document.getElementById("inPaciente").focus();
        return;
    }
    pacientes.push(nome);
    var lista ="";
    for(i=0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i]+"\n";
    }
    outLista.textContent = lista;
    document.getElementById("inPaciente").value = "";
    document.getElementById("inPaciente").focus();
    

}
var btAdcionar = document.getElementById("btAdiconar");
btAdcionar.addEventListener("click",adicionarPacientes);


function atendimentoUrgencia(){
    var nome =document.getElementById("inPaciente").value;
    var outLista = document.getElementById("outLista");
    if(nome==""){
        alert("Informe o nome do paciente");
        document.getElementById("inPaciente").focus();
        return;
    }
    pacientes.unshift(nome);
    var lista ="";
    for(i=0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i]+"\n";
    }
    outLista.textContent = lista;
    document.getElementById("inPaciente").value = "";
    document.getElementById("inPaciente").focus();
    
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click",atendimentoUrgencia);

function atenderPaciente(){
    var atendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        document.getElementById("inPaciente").focus();
        return;
    }
   var atender = pacientes.shift();
   atendimento.textContent = atender;
    var lista ="";
    for(i=0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i]+"\n";
    }
    outLista.textContent = lista;
    document.getElementById("inPaciente").value = "";
    document.getElementById("inPaciente").focus();
    
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click",atenderPaciente);

function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else{
        itens.style.display == 'block'
    }


}


