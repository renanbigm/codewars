function maskify(cc) {   /* substitui os elementos acima do 4 por #*/
    let show = "";
    let nSpaces = "";
  
    for (let i = cc.length - 4; i <= cc.length - 1; i++){ /* define os 4 primeiros elementos*/
      show += cc[i];    
    }
    if (cc.length > 4) { /* Se houver mais do 4 elementos */
        for (let hash = 0; hash < cc.length - 4; hash++){ /* length - 4 pra pular os 4 últimos que vão aparecer */
            nSpaces = nSpaces + "#"; /* Adiciona # aos espaços vazio de Nspaces*/
        }
            return nSpaces + show;
    } else {
        return cc;
    }
}

console.log(maskify("7987897987"))


