function olaMundo() {
    console.log("Olá, mundo!");
    alert("Olá mundo!");
}

function validarFormulario() {
    let campoNome = document.getElementById("campoNome").value;
    let campoEmail = document.getElementById("campoEmail").value;
    let campoSenha = document.getElementById("campoSenha").value;
    let campoDataNascimento = document.getElementById("campoDataNascimento").value;
    let campoSexo = document.getElementById("campoSexo").value;;
    let tecnologias = validarCheckbox();
    let tempoExperiencia = validarRadioButton();
    
    let anos5_10 = document.getElementById("5-10").checked;

    console.log("Nome: " + campoNome);
    console.log("E-mail: " + campoEmail);
    console.log("Senha: " + campoSenha);
    console.log("Data de Nascimento: " + campoDataNascimento);
    console.log("Sexo: " + campoSexo);
    console.log("Texto XP: " + tempoExperiencia)
    
}

function validarRadioButton() {
    if (document.getElementById("0-3").checked) {
        return "Tempo de XP: 0 a 3 anos"   
    } else if (document.getElementById("3-5").checked) {
        return "Tempo de XP: 3 a 5 anos"
    } else if (document.getElementById("5-10").checked) {
        return "Tempo de XP: 5 a 10 anos"
    } else {
        return "Nenhum foi selecionado"
    }

}

function validarCheckbox() {
    let resposta;
    if (document.getElementById('html').checked) {
        
    } 