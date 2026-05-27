let numeros = [];

for (let i = 0; i < 7; i++) {

    let numeroAleatorio = Math.floor(Math.random() * 101);

    numeros[i] = numeroAleatorio;

}

console.log("Números gerados:");

for (let i = 0; i < numeros.length; i++) {

    console.log(numeros[i]);

}

alert("Números gerados: " + numeros);