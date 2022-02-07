var resultados = 0
function letrasIguais(frase, letra) {
  frase=frase.toUpperCase();
  letra=letra.toUpperCase(); 
    for (var i = 0; i < frase.length; i++) {
     if (frase[i] === letra) {
        resultados++
        }        
    }  
  console.log(resultados)
}

letrasIguais("aaaa", "a")
































