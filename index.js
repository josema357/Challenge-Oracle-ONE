const texto=document.querySelector(".input");
const encriptarBoton=document.querySelector(".primary-button");
const desencriptarBoton=document.querySelector(".secondary-button");
const cajaImagen=document.querySelector(".caja-imagen");
const cajaInfo=document.querySelector(".caja-info");
const textoEncriptado=document.querySelector(".text-encriptado");
const copiarBoton=document.querySelector(".copy-button");

encriptarBoton.addEventListener("click",encriptar);

const validador=/[a-z]|[0-9]|\s/;

//Funcion para el boton Encriptar
function encriptar(){
    cajaImagen.classList.add("inactive");
    cajaInfo.classList.add("inactive");
    textoEncriptado.classList.remove("inactive");
    copiarBoton.classList.remove("inactive");
    let cadena=texto.value.split("");
    valido=validarTexto(cadena);
    if(valido===true){
        console.log(realizarEncrip(cadena))
    }
}

//Funcion para validar el texto del input
function validarTexto(arr){
    for(let i=0;i<arr.length;i++){
        if(validador.test(arr[i])===false){return false;}
    }
    return true;
}

//Funcion para encriptar el texto
function realizarEncrip(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='e') {arr[i]='enter'} 
        if(arr[i]=='i') {arr[i]='imes'}
        if(arr[i]=='a') {arr[i]='ai'}
        if(arr[i]=='o') {arr[i]='ober'}
        if(arr[i]=='u') {arr[i]='ufat'}
    }
    return arr;
}