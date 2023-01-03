const texto=document.querySelector(".input");
const encriptarBoton=document.querySelector(".primary-button");
const desencriptarBoton=document.querySelector(".secondary-button");
const cajaImagen=document.querySelector(".caja-imagen");
const cajaInfo=document.querySelector(".caja-info");
const cajonTextos=document.querySelector(".rectangle");
const textoEncriptado=document.querySelector(".text-encriptado");
const copiarBoton=document.querySelector(".copy-button");

encriptarBoton.addEventListener("click",encriptar);
copiarBoton.addEventListener("click",copiarTexto);
desencriptarBoton.addEventListener("click",desencriptar);

const validador=/[a-z]|[0-9]|\s|[¿?!¡]/;

//Funcion para el boton Encriptar
function encriptar(){
    let cadena=texto.value.split("");
    let valido=validarTexto(cadena);
    if(valido===true && texto.value!==""){
        cajaImagen.classList.add("inactive");
        cajaInfo.classList.add("inactive");
        cajonTextos.style.justifyContent="space-between";
        textoEncriptado.classList.remove("inactive");
        copiarBoton.classList.remove("inactive");
        textoEncriptado.innerText=realizarEncrip(cadena);
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
        if(arr[i]=='e') {arr[i]='enter'};
        if(arr[i]=='i') {arr[i]='imes'};
        if(arr[i]=='a') {arr[i]='ai'};
        if(arr[i]=='o') {arr[i]='ober'};
        if(arr[i]=='u') {arr[i]='ufat'};
    }
    return arr.join("");
}

//Funcion para copiar texto encriptado al portapapales
function copiarTexto(){
    let textoEnc=textoEncriptado.innerText;
    navigator.clipboard.writeText(textoEnc)
    .then(()=>{
        console.log("Texto copiado exitosamente");
    })
    .catch(err=>{
        console.log("Error al copiar", err);
    })
}

//Funcion para el boton de desencriptar
function desencriptar(){
    let cadena=texto.value.split("");
    let valido=validarTexto(cadena);
    let arrEncrip=texto.value.split(" ");
    if(valido===true && texto.value!==""){
        cajaImagen.classList.add("inactive");
        cajaInfo.classList.add("inactive");
        cajonTextos.style.justifyContent="space-between";
        textoEncriptado.classList.remove("inactive");
        copiarBoton.classList.remove("inactive");
        textoEncriptado.innerText=realizarDesencrip(arrEncrip);
    }
}

//Funcion para desencriptar el texto
function realizarDesencrip(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes('enter')) {arr[i]=arr[i].replace(/enter/g,"e")};
        if(arr[i].includes('imes')){arr[i]=arr[i].replace(/imes/g,"i")};
        if(arr[i].includes('ai')){arr[i]=arr[i].replace(/ai/g,"a")};
        if(arr[i].includes('ober')){arr[i]=arr[i].replace(/ober/g,"o")};
        if(arr[i].includes('ufat')){arr[i]=arr[i].replace(/ufat/g,"u")};
    }
    return arr.join(" ");
}