function twoToOne(s1, s2) { /* soma strings e reitra letras iguais */
 
    let result = "";
    let result2 = ""
      
    for (let i = 0; i < s1.length; i++) {
        let iquals = 0;
        for (let j = 0; j < s2.length; j++){
          if (s1[i] === s2[j]){ /* compara cada lentra de s1 com s2 */
            iquals++;
          } 
        }
        if (iquals === 0) { /* verifica se tem letras iguais, se n tiver adiciona a letra ao resultado*/
          result += s1[i]; 
        }
    }
    for (let u = 0; u < s2.length; u++) {
        let iquals2 = 0;
        for (let n = 0; n < s1.length; n++){
          if (s2[u] === s1[n]){
            iquals2++;
          } 
        }   
        if (iquals2 === 0) {
          result2 += s2[u];
        } 
    } 
    console.log(result + result2);
}
twoToOne("arquivo", "arquiteto")
