
/*
Js é case sensitive para as palavras reservadas.

por tag: getElementByTagName()
por Id: getElementById()
por nome:getElementsbyName()
por classe: getElementsbyClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validateName() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
    txtNome.innerHTML = "Este campo precisa conter mais de 2 caracteres."
    txtNome.style.color = "#900020"
    }
    else {
    txtNome.innerHTML = "Yasss!"
    txtNome.style.color = "#D48C70"
    nomeOk = true
    }
}

function validateEmail(){
    let txtEmail = document.querySelector("#txtEmail") 
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)  
    {
        txtEmail.innerHTML = "Endereço de e-mail inválido."
        txtEmail.style.color = "#900020"
    }
    else {
        txtEmail.innerHTML = "Yasss!" 
        txtEmail.style.color = "#D48C70"
        emailOK = true
    }
}

function validateSubject (){
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Máximo de 100 caracteres atingido."
    txtAssunto.style.color = "#900020"
    txtAssunto.style.display = "block"
    }
    else {
    txtAssunto.style.display = "none"
    assuntoOK = true
    }
}

function enviar() {
    if (nomeOk == true && emailOK == true && assuntoOK == true) {
        alert ("Mensagem enviada com sucesso!")
    }
    else {
        alert ("Preencha corretamente todos os campos do formuário!")
    }
}

function mapaZoom () {
    mapa.style.width = "900px"
    mapa.style.height = "700px"
}

function mapaNormal () {
    mapa.style.width = "600px"
    mapa.style.height = "450px"

}
