function recebeDisplay() {
    var displayOn = document.getElementById('codificadores');
    var incremento = document.getElementById('increment');

    if (document.querySelector('#codificadores').value == "codigo de césar") {
        document.querySelector('#entregarC')
        document.querySelector('.incremento2').style.visibility = 'visible';
        document.querySelector('.incremento2').style.width = "400px";
        document.querySelector('.incremento2').style.height = "30px";
        document.querySelector('.incremento2').style.background = 'none';
        document.querySelector('#receberC').style.display = "initial";
        document.querySelector('#receberC').style.width = "430px";
        document.querySelector('#receberC').style.height = "180px";
        document.querySelector('#entregarC').style.display = "block";
        document.querySelector('#entregar').style.display = "none";
        document.querySelector('#receber').style.display = "none";
    } else if (document.querySelector('#codificadores').value == "base64") {
        document.querySelector('.incremento2').style.visibility = 'hidden';
        document.querySelector('#receberC').style.display = "none";
        document.querySelector('#entregarC').style.display = "none";
        document.querySelector('#entregar').style.display = "block";
        document.querySelector('#receber').style.display = "block";
    } else {

    }
}



function decisao() {
    if (document.querySelector('#codificadores').value == "base64") {
        base64()
    } else
        validaIncremento()

}



function validaIncremento() {
    document.getElementById('escolhaC')
    var incremento = document.getElementById("increment").value;
    incremento = incremento % 26; //recebe o resto da divisão por 26 que sao as letras do alfabeto
    var radioDecodificar = document.getElementById('decodificar');
    if (radioDecodificar.checked) {
        incremento = incremento * (-1);
    }
    cesar(incremento) //chama a função cesar que tem o incremento como parametro
}
//validando o Incremento do codigo de Cesar
function cesar(incremento) {

    var textoDeEntrada = document.querySelector("#receberC").value;
    var textoDeSaida = document.querySelector("#entregarC");
    var transiçao = ""; //variavel que receberá o valor charcode para ser mudado depois
    textoDeSaida.innerHTML = ""; //textofinal

    for (var i = 0; i < textoDeEntrada.length; i++) { //for para pegar letra por letra e para incremneta-los
        transiçao = textoDeEntrada.charCodeAt(i); //numero da letra dentro do for

        if (transiçao >= 65 && transiçao <= 90) { //condição para letras maiusculas
            transiçao = transiçao + incremento; //soma ao charCode o incremento
            if (transiçao > 90) {
                transiçao = transiçao - 26; //Caso o incremento estoure a condição
            } else if (transiçao < 65) {
                transiçao = transiçao + 26; //Caso o incremento estoure a condição
            }
        }
        if (transiçao >= 97 && transiçao <= 122) { //condiçao para letras minusculas
            transiçao = transiçao + incremento; //soma ao charCode o incremento
            if (transiçao > 122) {
                transiçao = transiçao - 26; //Caso o incremento estoure a condição
            } else if (transiçao < 97) {
                transiçao = transiçao + 26; //Caso o incremento estoure a condição
            }
        }

        document.getElementById('entregarC').innerHTML += String.fromCharCode(transiçao); //transfromando o charcode em string para exibi-lo
    }

}