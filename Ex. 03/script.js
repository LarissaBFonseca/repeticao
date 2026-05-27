let numeros = [];

for (let i = 0; i < 10; i++) {

    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));

    numeros[i] = numero;

}


let numeroProcurado = parseInt(prompt("Digite um número para verificar quantas vezes ele aparece no vetor:"));


let quantidade = 0;


for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === numeroProcurado) {

        quantidade++;

    }

}


console.log("Vetor:", numeros);
console.log("Número procurado:", numeroProcurado);
console.log("Quantidade de vezes que aparece:", quantidade);

alert("O número " + numeroProcurado + " aparece " + quantidade + " vez(es) no vetor.");