

function mudar(){
    var msg = window.document.querySelector('#mensagem')
    var foto = window.document.querySelector('#foto')
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    console.log(hora, min)
    
    if(hora >= 6 && hora < 12){
        msg.innerText = `São exatamente ${hora} horas e ${min} minuto(s), Bom dia!`
        foto.innerHTML = '<img src="imagens/manha.png" id="foto" alt="Foto sobre a hora do dia"></img>'
        corpo.style.background = "#faf6f3"
    }else if(hora >= 12 && hora < 18){
        msg.innerText = `São exatamente ${hora} horas e ${min} minuto(s), Boa tarde!`
        foto.innerHTML = '<img src="imagens/tarde.png" id="foto" alt="Foto sobre a hora do dia"></img>'
        corpo.style.background = "#85d9ed"
    }else if(hora >= 18 && hora <= 23){
        msg.innerText = `São exatamente ${hora} horas e ${min} minuto(s), Boa noite!`
        foto.innerHTML = '<img src="imagens/noite.png" id="foto" alt="Foto sobre a hora do dia"></img>'
        corpo.style.background = "#0d343c"
    }else{
        msg.innerText = `São exatamente ${hora} horas e ${min} minuto(s), hora de dormir!`
        foto.innerHTML = '<img src="imagens/madrugada.png" id="foto" alt="Foto sobre a hora do dia"></img>'
        corpo.style.background = "#1b1714"
    }

}

var corpo = window.document.querySelector('#carregar')
corpo.addEventListener('onload', mudar())
    

    