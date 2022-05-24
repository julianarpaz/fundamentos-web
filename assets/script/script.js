/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')  /*se fosse classe tinha . antes no lugar do hashtag*/
let assunto = document.querySelector('#assunto')
let validaNome = false
let validaEmail = false
let validaAssunto = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%' 
email.style.width = '100%'

function validacaoNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'  
        txt.style.color = 'red' 
        validaNome = false
    } else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        validaNome = true
    }
}

function validacaoEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'  
        txtEmail.style.color = 'red' 
        validaEmail = false
    } else{
        txtEmail.innerHTML = 'Nome válido'
        txtEmail.style.color = 'green'
        validaEmail = true
    }
}

function validacaoAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caractéres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.block = 'block'
        validaAssunto = false
    } else{
        txtAssunto.style.display = 'none'
        validaAssunto = true
    }
}

function enviar(){
    if(validaAssunto == true && validaEmail == true && validaNome == true){
        alert ('Formulário enviado com sucesso!')
    } else{
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}


