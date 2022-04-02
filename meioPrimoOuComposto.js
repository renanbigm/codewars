function retornaMeioPrimoOuComposto(n) { /* retorna o número do meio de N e se ele é primo ou composto*/
    
    var mL = Math.ceil(n / 2);
    var meio;
    var arrayN = [];
    var vezesDivididas;
    
    for (var i = 0; i <= n; i++) {
        arrayN.push(i);
    }
    if (n % 2 !== 0 && n !== 1 && n !== 0) { /* encontra elemento do meio, se existir */
       meio = arrayN[arrayN.length - mL];  
    }  else {
       return "não possui elemento do meio." 
    }
    
    for (var dividendo = 0; dividendo <= meio; dividendo++) {
        vezesDivididas = 0; 
        for (var divisor = 2; divisor < dividendo; divisor++) {
            if (dividendo % divisor === 0) { /* calcula resto da divisão de todos os elementos, caso forem igual a 0 eles n são primos */
             vezesDivididas++; /* adiciona +1 pra cada divisão */
            }    
        } 
    }   

    if (vezesDivididas === 0) { /* define os primos ou compostos. Para ser primo tem q ser 0, pois só é dividido por 1 e ele mesmo. */
        return meio + ", " + "esse número é primo.";
    } else if (vezesDivididas !== 0) {
        return meio + ", " + "esse número é composto.";
    } else {
        return undefined;
    }        
}
console.log(retornaMeioPrimoOuComposto(19))