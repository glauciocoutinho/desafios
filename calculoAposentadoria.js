// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribucao = 40;

const calculoContribuiu = idade + contribucao;

const podeAposentarHomem = sexo == 'M' && contribucao >= 35 && calculoContribuiu >= 95;
const podeAposentarMulher = sexo == 'F' && contribucao >= 30 && calculoContribuiu >= 85;

if ( podeAposentarHomem || podeAposentarMulher){
    console.log(`${nome}, você pode se aposentar.`)
} else {
  console.log(`${nome}, você não pode se aposentar.`)
}


