let numeros = [];

let somaPares = 0;

for (let i = 0; i < 10; i++) {

    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));

    numeros[i] = numero;

}

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {

        somaPares = somaPares + numeros[i];

    }

}

console.log("Vetor:", numeros);
console.log("Soma dos números pares:", somaPares);

alert("Soma dos números pares: " + somaPares);