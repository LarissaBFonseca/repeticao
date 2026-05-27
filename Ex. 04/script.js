let numeros = [];

let semDuplicados = [];

let posicao = 0;


for (let i = 0; i < 10; i++) {

    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número:"));

}

for (let i = 0; i < 10; i++) {

    let repetido = false;


    for (let j = 0; j < posicao; j++) {

        if (numeros[i] === semDuplicados[j]) {

            repetido = true;

        }

    }


    if (repetido === false) {

        semDuplicados[posicao] = numeros[i];

        posicao++;

    }

}

console.log("Vetor original:");
console.log(numeros);

console.log("Vetor sem duplicados:");
console.log(semDuplicados);

alert(
    "Vetor original: " + numeros +
    "\nVetor sem duplicados: " + semDuplicados
);