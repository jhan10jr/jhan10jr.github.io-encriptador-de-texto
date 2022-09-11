

const inputTexto = document.querySelector(".areaTexto");
const  mensaje = document.querySelector(".areaTexto2");


function btnEncriptar(){

    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}


function encriptar(stringEncriptada){

let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["y","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i<matrizCodigo.length;i++){

    if(stringEncriptada.includes(matrizCodigo[i][0])){

        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
}

return stringEncriptada;
}


function btnDesencriptar(){

    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["y","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length;i++){
    
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
    
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    
    }
    
    return stringDesencriptada;
    }


function btnCopiar(){

    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

