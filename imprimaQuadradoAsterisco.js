function imprimaQuadradoAsterisco(n) { 
    
    for (var linhas = 0; linhas < n; linhas++) {
        var linhaDeAsteriscos = "";
        
        for (var asteriscos = 0; asteriscos < n; asteriscos++) {
            if(asteriscos === 2) {
                linhaDeAsteriscos = linhaDeAsteriscos + "*"
            } else {
                linhaDeAsteriscos = linhaDeAsteriscos + "*";
            }         
        }       
     console.log(linhaDeAsteriscos);
    }  
}
imprimaQuadradoAsterisco(8)