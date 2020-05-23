// Cálculo de IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Carlos";
const peso = 106;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30){
    console.log(`${nome}, o seu IMC é ${imc}, viiixiii, então você está acima do peso.`)
}else {
    console.log(`${nome} o seu IMC é ${imc}, tá beleza, você não está acima do peso.`)
}
