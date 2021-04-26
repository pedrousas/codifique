function base64() {


    if (document.getElementById('codificar').checked) {
        event.preventDefault();
        let b64 = document.getElementById('receber').value;
        let tradutor = btoa(b64);
        document.getElementById('entregar').innerHTML = tradutor;
    }
    if (document.getElementById('decodificar').checked) {
        event.preventDefault();
        let b64 = document.getElementById('receber').value;
        let tradutor = atob(b64);
        document.getElementById('entregar').innerHTML = tradutor;
    }

}


function botao() {
    var botaoCode = document.querySelector('.bparagrafo')
    botaoCode.textContent = 'Codificar';
    botaoCode.style.fontSize = '18px';
    botaoCode.style.color = 'green';
}

function botaoDesc() {
    var botaoCode = document.querySelector('.bparagrafo')
    botaoCode.textContent = 'Decodificar';
    botaoCode.style.fontSize = '18px';
    botaoCode.style.color = 'red';
}