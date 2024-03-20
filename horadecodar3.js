function lerValor(mensagem) {
    let valor;
    do {
        valor = parseFloat(prompt(mensagem));
    } while (isNaN(valor) || valor <= 0); // continua lendo enquanto não for um número válido ou for menor ou igual a zero
    return valor;
}

// Leitura dos valores informados pelo usuário
let valor1 = lerValor("Digite o primeiro valor:");
let valor2 = lerValor("Digite o segundo valor (não pode ser zero ou negativo):");

// Verificação e cálculo da divisão
if (valor2 <= 0) {
    alert("O segundo valor não pode ser zero ou negativo. Insira um novo valor.");
} else {
    let resultado = valor1 / valor2;
    alert(`O resultado da divisão de ${valor1} por ${valor2} é: ${resultado}`); 
}



//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
var i = 30;
var final = 0;

while (i > 0) {
    var texto = "Está perto..." + i + "<br/>";
    console.log(texto)
    document.write(texto);
    i--;
}
document.write("EXPLOSÃO!!!!")

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva() {
    let tempo = 30;
    let intervalo = setInterval(function() {
        if (tempo >= 0) {
            document.write(tempo + "<br>");
            tempo--;
        } else {
            clearInterval(intervalo); // Parar o intervalo quando a contagem chegar a zero
            document.write("EXPLOSÃO");
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Iniciar a contagem regressiva
iniciarContagemRegressiva();


//3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
//Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (let i = 10; i >= 1; i--) {
    document.write(i);
    if (i > 1) {
        document.write(', ');
    }
}


//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

let soma = 0;
let contador = 0;


for (let i = 15; i <= 100; i++) {
  
    soma += i;

    contador++;

    var texto = i 

}

let media = soma / contador;

alert ("média aritmética dos números inteiros entre 15 e 100 é " + media)


//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

function calcularMediaAritmetica(num1, num2) {
    return (num1 + num2) / 2;
}

// Função para exibir todos os números inteiros entre os dois números
function exibirNumerosInteiros(num1, num2) {
    let numeros = '';
    for (let i = num1 + 1; i < num2; i++) {
        numeros += i + ', ';
    }
    return numeros;
}

// Leitura dos números informados pelo usuário
let numero1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let numero2 = parseInt(prompt("Digite o segundo número inteiro (maior que o primeiro): "));

// Verificação se o segundo número é realmente maior que o primeiro
if (numero1 >= numero2) {
    alert("Erro: o segundo número deve ser maior que o primeiro.");
} else {
    // Cálculo da média aritmética
    let media = calcularMediaAritmetica(numero1, numero2);
    alert(`A média aritmética de ${numero1} e ${numero2} é: ${media}`);
    
    // Exibição dos números inteiros entre os dois números
    let numerosInteiros = exibirNumerosInteiros(numero1, numero2);
    alert(`Números inteiros entre ${numero1} e ${numero2}: ${numerosInteiros}`);
}


//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.


let alunosAprovados = 0;

do {
    // Leitura das notas do aluno
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));

    // Cálculo da média final
    let media = (nota1 + nota2) / 2;

    // Verificação da aprovação e contagem de alunos aprovados
    if (media >= 9.5) {
        alunosAprovados++;
    }

    // Exibição da média final
    alert(`Média Final: ${media.toFixed(1)}`);

    // Pergunta se deseja calcular a média de outro aluno
    let resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();

    // Verificação da resposta para continuar ou encerrar o programa
    if (resposta !== 'S') {
        break;
    }
} while (true);

// Exibição da quantidade de alunos aprovados
alert(`Quantidade de alunos aprovados: ${alunosAprovados}`);


//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

function lerNota(numeroNota) {
    let nota;
    do {
        nota = parseFloat(prompt("Digite a " + numeroNota + "ª nota (de 0 a 10):"));
    } while (nota < 0 || nota > 10); 
    return nota;
}


function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}


function main() {
    let notas = [];
    for (let i = 1; i <= 6; i++) {
        let nota = lerNota(i);
        notas.push(nota);
    }
    let media = calcularMedia(notas);
    alert("A média das notas é: " + media.toFixed(2));
}


main();


//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
//N  é um valor informado pelo usuário

function lerValor() {
    return parseInt(prompt("Digite um valor inteiro maior que zero:"));
}

function imprimirValores(N) {
    for (var i = 1; i <= N; i++) {
        document.write(i);
        console.log(i);
    }
}

function main() {
    var N = lerValor();
    imprimirValores(N);
}

main();

//9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

var tabuada = parseInt(prompt("Digite um número de tabuada: "));

for (var i = 1; i <= tabuada; i++) {
    for (var j = 1; j <= 10; j++) {
        document.write(`${i} * ${j} = ${i * j}<br>`);
    }
}

//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

function lerValor() {
    return parseInt(prompt("Digite um valor inteiro:"));
}

function imprimirTabuada(numero, limite) {
    for (let i = 1; i <= limite; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    }
    document.write("<br>");
}

function main() {
    let N = lerValor();
    for (let i = 1; i <= N; i++) {
        imprimirTabuada(i, 10);
    }
}

main();


//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 1; i <= 10; i++) {
    let valor = parseFloat(prompt(`Digite o valor ${i}: `));

    if (valor >= 24 && valor <= 42) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
}

document.write(`Quantidade de valores dentro do intervalo [24, 42]: ${dentroIntervalo}<br>`);
document.write(`Quantidade de valores fora do intervalo [24, 42]: ${foraIntervalo}`);
