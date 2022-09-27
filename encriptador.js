let inputTexto = document.querySelector(".input-texto");
let outPut = document.querySelector(".container-output");


function criptografar(){
    let texto = inputTexto.value;
    
    let resultChaveCripto = texto.replace(/a/g, "a/`´i").replace(/e/g, "¨5$").replace(/i/g, "t*%$").replace(/o/g, "out").replace(/u/g, "ufat");

    document.querySelector(".container-output").innerHTML = '<textarea readonly class="input-texto">' + resultChaveCripto + '</textarea>' + '<buttom class="encriptar" id="copiar" onclick="copiar()">Copiar</buttom>'
        
}

function descriptografar () {
    let texto = inputTexto.value;
    
    let resultChaveDescripto = texto.replace(/ai/g, "a").replace(/exe/g, "e").replace(/imes/g, "i").replace(/out/g, "o").replace(/ufat/g, "u");

    document.querySelector(".container-output").innerHTML = '<textarea readonly class="input-texto">' + resultChaveDescripto  + '</textarea>' + '<buttom class="desencriptar" id="copiar" onclick="copiar()">Copiar</buttom>'
}
function copiar(){
    let textoCop = document.querySelector(".input-texto");

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado!");
}
