const text = document.getElementById('encrypter-textarea');
const textToDecrypt = document.getElementById('desencrypter-textarea');

function encrypter() {
    let encrypterText = text.value.toLowerCase();
    encrypterText = encrypterText.replace(/e/mg, 'enter');
    encrypterText = encrypterText.replace(/i/mg, 'imes');
    encrypterText = encrypterText.replace(/a/mg, 'ai');
    encrypterText = encrypterText.replace(/o/mg, 'ober');
    encrypterText = encrypterText.replace(/u/mg, 'ufat');
    console.log(encrypterText);

    const expregular = /^[a-z\s]+$/i;
    let validacion = encrypterText.match(expregular);

    if (validacion == null) {
        alert('Ingresa un texto válido. Recuerda que no se admiten mayúsculas, valores especiales, acentos, ni números')
    } else {
        textToDecrypt.innerText = encrypterText;
        display('desencrypter-textarea-container');
        hide('image-text-container');
    } 
}

function decrypter(){
    let encrypterText = text.value.toLowerCase();
    encrypterText = encrypterText.replace(/enter/mg, 'e');
    encrypterText = encrypterText.replace(/imes/mg, 'i');
    encrypterText = encrypterText.replace(/ai/mg, 'a');
    encrypterText = encrypterText.replace(/ober/mg, 'o');
    encrypterText = encrypterText.replace(/ufat/mg, 'u');
    console.log(encrypterText);

    const expregular = /^[a-z\s]+$/i;
    let validacion = encrypterText.match(expregular);

    if (validacion == null) {
        alert('Ingresa un texto válido. Recuerda que no se admiten mayúsculas, valores especiales, acentos, ni números')
    } else {
        textToDecrypt.innerText = encrypterText;
        display('desencrypter-textarea-container');
        hide('image-text-container');
    } 
}

function display(elementToDisplay) {
    document.getElementById(elementToDisplay).style.display = 'block';
}

function hide(elementToHide) {
    document.getElementById(elementToHide).style.display = 'none'; 
}

const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(textToDecrypt.value);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
