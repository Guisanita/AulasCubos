let x = 0 / 2; // Normal, conta dá para ser feita
console.log(x);

x = 2 / 0; // Infinity - Ele aproxima e um numero dividido por um 0,0000000000000001 por ex dá um numero muito grande, infinito
console.log(x);

x = 0 / 0; // NaN - É um numero indefinido, não está nos reais, qualquer numero serve. 
console.log(x);