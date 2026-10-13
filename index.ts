import * as tf from "@tensorflow/tfjs";

type Pessoa = {
  nome: string;
  idade: number;
  cor: string;
  localizacao: string;
};

const pessoas: Pessoa[] = [
  {
    nome: "Erick",
    idade: 30,
    cor: "azul",
    localizacao: "São Paulo",
  },
  {
    nome: "Ana",
    idade: 25,
    cor: "vermelho",
    localizacao: "Rio",
  },
  {
    nome: "Carlos",
    idade: 40,
    cor: "verde",
    localizacao: "Curitiba",
  },
  {
    nome: "Neia",
    idade: 42,
    cor: "amarela",
    localizacao: "Brasília",
  },
];

console.log(pessoas[0].nome);
console.log(pessoas[1].nome);
console.log(pessoas[2].nome);
console.log(pessoas[3].nome, pessoas[3].idade);

console.log("Total de pessoas: ", pessoas.length);

function apresentarPessoa(nome: string, idade: number): void {
  console.log("Nome:", nome);
  console.log("Idade:", idade);
}

apresentarPessoa(pessoas[3].nome, pessoas[3].idade);

console.log("-------------------------------------");

function calcularIdadeFutura(idade: number, anos: number): number {
  return idade + anos;
}
const resultadoIdade = calcularIdadeFutura(pessoas[3].idade, 10);
console.log("Idade Futura: ", resultadoIdade);

console.log("-------------------------------------");

const calcularDobro = (idade: number): number => {
  return idade * 2;
};

console.log("Dobro da idade:", calcularDobro(pessoas[3].idade));

console.log("---------------MAP----------------------");

const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log("Imprima os nomes:", nomes);

console.log("---------------MAP()----------------------");

const idadesFuturas = pessoas.map((idade) => idade.idade + 10);
console.log("Idades futuras:", idadesFuturas);

console.log("---------------One-Hot Encoding!----------------------");
console.log();
console.log(
  "A expressão: cor === 'azul' ? 1 : 0, ",
  "Significa que se a cor for azul, retorna 1, se não, retorna 0",
);
console.log();

function testarCor(cor: string): number[] {
    const azul = cor === "azul" ? 1 : 0;
    const vermelho = cor === "vermelho" ? 1 : 0;
    const verde = cor === "verde" ? 1 : 0;
    const amarela = cor === "amarela" ? 1 : 0;

    return [azul, vermelho, verde, amarela];
}


console.log(testarCor("verde"));
console.log();
console.log("---------------One-Hot Encoding! Exercícios----------------------");
console.log();

function converterCor(cor: string): number[] {
  const azul = cor === "azul" ? 1 : 0;
  const vermelho = cor === "vermelho" ? 1 : 0;
  const verde = cor === "verde" ? 1 : 0;
  const amarela = cor === "amarela" ? 1 : 0;

  return [azul, vermelho, verde, amarela];
}

console.log(converterCor("azul"));
console.log(converterCor("vermelho"));
console.log(converterCor("verde"));
console.log();
console.log("---------------One-Hot Encoding! Desafio----------------------");
console.log();

const coresConvertidas = pessoas.map((pessoa) => converterCor(pessoa.cor));

coresConvertidas.forEach((vetor) => console.log(vetor));

console.log();
console.log("---------------Spread Operator (...)----------------------");
console.log();

const numeros1 = [10, 20, 30];
const numeros2 = [40, 50, 60];

const todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros);
console.log("O Spread Operator (...) ESPALHA os elementos. A junção é uma consequência de onde você coloca esses elementos.");
console.log();
const dadosPessoais = {
  nome: "Neia",
  idade: 42,
};

const endereco = {
  cidade: "Brasília",
  estado: "DF",
};

const pessoaCompleta = {
  ...dadosPessoais,
  ...endereco,
};

console.log(pessoaCompleta);

const a = [1, 2];
const b = [3, 4];

const resultado = [...a, ...b];
console.log(resultado);
console.log();
console.log("--------------------------Aula 02 — Parte 3: Preparando os dados para a IA--------------------------");
console.log();

const idadeNormalizada = 0.42;
const corConvertida = [0, 0, 0, 1];

const dadosPessoa = [idadeNormalizada, ...corConvertida];

console.log(dadosPessoa);
console.log();
console.log("--------Converter localização em número-----------");

function converterLocalizacao(localizacao: string): number[] {
  const saoPaulo = localizacao === "São Paulo" ? 1 : 0;
  const rio = localizacao === "Rio" ? 1 : 0;
  const curitiba = localizacao === "Curitiba" ? 1 : 0;
  const brasilia = localizacao === "Brasília" ? 1 : 0;

  return [saoPaulo, rio, curitiba, brasilia];
}

const idadePessoa = 0.42;
const corPessoa = converterCor("amarela");
const localizacaoPessoa = converterLocalizacao("Brasília");

const entradaRedeNeural = [idadePessoa, ...corPessoa, ...localizacaoPessoa];
console.log(JSON.stringify(entradaRedeNeural));

console.log();
console.log("--------------------------Aula 02 — Parte 4: Usando .map() para preparar os dados--------------------------");
console.log();

const idadesNormalizadas = pessoas.map((pessoa) => pessoa.idade / 100);
console.log("Idades normalizadas:", idadesNormalizadas);

console.log();
console.log("--------------------------Aula 02 — Parte 5: .map() + Spread Operator--------------------------");
console.log();

const entradasRedesNeural = pessoas.map((pessoa) => {
  const idade = pessoa.idade / 100;
  const cor = converterCor(pessoa.cor);
  const localizacao = converterLocalizacao(pessoa.localizacao);

  return [idade, ...cor, ...localizacao];
});
console.log(entradasRedesNeural);
console.log();
console.log("--------------------------Aula 02 — Parte 6: Nosso primeiro tensor 2D--------------------------");
console.log();

const tensorEntradas = tf.tensor2d(entradasRedesNeural);
tensorEntradas.print();
console.log("Formato: ", tensorEntradas.shape);
console.log();
console.log("--------------------------Aula 02 — Parte 7: Entendendo o que falta para a IA aprender-----------");
console.log();

const classificacoes = [
    [1, 0, 0], // Erick - Premium
    [0, 1, 0], // Ana - Médio
    [0, 0, 1], // Carlos - Básico
    [1, 0, 0]  // Neia - Premium
];

const tensorSaidas = tf.tensor2d(classificacoes)
tensorSaidas.print();
console.log("Formato das saidas:", tensorSaidas.shape);

console.log();
console.log("--------------------------Aula 02 — Parte 8: Criando nossa primeira rede neural-----------");
console.log();
//Vamos conhecer dois comandos do TensorFlow.js:
//tf.sequential() — cria um modelo de rede neural no qual as camadas são organizadas em sequência.
//tf.layers.dense() — cria uma camada em que cada neurônio recebe informações de todos os neurônios da camada anterior.

const modelo = tf.sequential();

modelo.add(tf.layers.dense({
    inputShape: [9],
    units: 8,
    activation: "relu"
}));

modelo.add(tf.layers.dense({
    units: 3,
    activation: "softmax"
}));
modelo.summary();

// 9 entradas: representam idade, cor e localização.
// 8 neurônios: são unidades da camada oculta, que vão aprender combinações e padrões de dados.
// 3 saídas: representam Premium, Médio e Básico.
// A função relu ajuda a rede a aprender relações não lineares.
// A softmax transforma as três saídas em valores entre 0 e 1 que somam 1, permitindo interpretá-los como probabilidades estimadas.

console.log();
console.log("--------------------------Aula 02 — Parte 9: Como os neurônios aprendem?-----------");
console.log();
//Agora vamos conhecer um dos conceitos mais importantes do Machine Learning: os pesos (weights).

const idade = 0.42;
const corAmarela = 1;

const pesoIdade = 1.0;
const pesoCor = 0.3;
const bias = 0.1;

const resultadoBias = (idade * pesoIdade) + 
                      (corAmarela * pesoCor) + 
                      (bias);

console.log("bias:", resultadoBias, " - ", "bias como um valor adicional que permite ao neurônio ajustar seu resultado, mesmo quando as entradas são zero.");

console.log();
console.log("-----------Aula 9 — Último conceito: função de ativação ReLU-------------");
console.log();

function relu(valor: number): number {
    return Math.max(0, valor);
}
console.log(relu(0.82)); // 0.82
console.log(relu(-0.5)); // 0
console.log(relu(2));    // 2

console.log();
console.log("-----------Aula 02 — Parte 10: Preparando o treinamento da rede neural------------");
console.log();

//Vamos utilizar o modelo aplicado na Aula 02 — Parte 8: Criando nossa primeira rede neural.

modelo.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"]
});

console.log();
console.log("-----------Aula 02 — Parte 10.4: Nosso primeiro treinamento com modelo.fit()------------");
console.log();
/*

async function treinarModelo(): Promise<void> {
    const historico = await modelo.fit(
        tensorEntradas,
        tensorSaidas,
        {
            epochs: 100,
            shuffle: true,
            verbose: 0
        }
    );
     console.log("Treinamento concluído!");
     console.log("Loss:", historico.history.loss);
     console.log("Accuracy:", historico.history.acc);
}
treinarModelo().catch(console.error);
*/

console.log();
console.log("-----------Aula 02 — Parte 10.5: Executando nosso primeiro treinamento------------");
console.log();

async function treinarModelo(): Promise<void> {
    
    const historico = await modelo.fit(
        tensorEntradas,
        tensorSaidas,
        {
            epochs: 100,
            shuffle: true,
            verbose: 0
        }
        
    );
    const perdas = historico.history.loss as number[];
    console.log("Treinamento concluído!");

    console.log("Loss inicial:", perdas[0]);
    console.log("Loss final:", perdas.at(-1));
    console.log("Accuracy final:", historico.history.acc?.at(-1));
}

treinarModelo().catch(console.error);