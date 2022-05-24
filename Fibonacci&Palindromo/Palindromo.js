function verificarPalindromo(frase) {
    const nuevaFrase = frase.replace(/[\W_]/g, "").toLowerCase();
    const fraseReversa = nuevaFrase.split("").reverse().join("");
    return nuevaFrase === fraseReversa ? frase + ": es palindromo" : frase + ": no es palindromo";
}
console.log(verificarPalindromo("A luna ese anula"));
console.log(verificarPalindromo("Ella te da detalle"));
console.log(verificarPalindromo("Ateo poco poeta"));
console.log(verificarPalindromo("Mercat revisara esto"));
console.log(verificarPalindromo("como era muy vieja"));
console.log(verificarPalindromo("Cualquier cosa la verdad"));