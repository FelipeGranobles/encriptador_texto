function validarTexto(texto) {
  return /^[a-z]+$/.test(texto);
}

function encriptarTexto() {
  let texto = document.getElementById("texto").value.trim();
  let contenedor_resultado = document.getElementById("contenedor_resultado");
  let contenedor_resultado_mensaje = document.getElementById("contenedor_resultado_mensaje");
  let contenedor_resultado_encriptado = document.getElementById("contenedor_resultado_encriptado");

  if (texto.length !== 0 && validarTexto(texto)) {
    let textoCifrado = texto.replace(/[aeiou]/gi, function(match) {
      switch (match.toLowerCase()) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'a':
          return 'ai';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return match;
      }
    });

    contenedor_resultado_mensaje.textContent = "Texto encriptado:";
    contenedor_resultado_encriptado.textContent = textoCifrado; 
  } else {
    contenedor_resultado_mensaje.textContent = "Ningún mensaje fue encontrado";
    contenedor_resultado_encriptado.textContent = "Ingresa solo letras minúsculas para encriptar.";
    alert("Debes ingresar solo letras minúsculas sin acentos");
  }
}

function desencriptarTexto() {
  let texto = document.getElementById("texto").value.trim(); 
  let contenedor_resultado = document.getElementById("contenedor_resultado");
  let contenedor_resultado_mensaje = document.getElementById("contenedor_resultado_mensaje");
  let contenedor_resultado_encriptado = document.getElementById("contenedor_resultado_encriptado");

  if (texto.length !== 0 && validarTexto(texto)) {
    let textoDesencriptado = texto.replace(/(enter|imes|ai|ober|ufat)/gi, function(match) {
      switch (match.toLowerCase()) {
        case 'enter':
          return 'e';
        case 'imes':
          return 'i';
        case 'ai':
          return 'a';
        case 'ober':
          return 'o';
        case 'ufat':
          return 'u';
        default:
          return match;
      }
    });

    contenedor_resultado_mensaje.textContent = "Texto desencriptado:";
    contenedor_resultado_encriptado.textContent = textoDesencriptado; 
  } else {
    contenedor_resultado_mensaje.textContent = "Ningún mensaje fue encontrado";
    contenedor_resultado_encriptado.textContent = "Ingresa solo letras minúsculas para desencriptar.";
    alert("Debes ingresar solo letras minúsculas sin acentos");
  }
}
