# Laboratório de IA com TypeScript e TensorFlow.js

Repositório de estudos práticos de **TypeScript**, **Machine Learning** e **redes neurais**, criado para experimentar conceitos aprendidos durante a pós-graduação em **Engenharia de Software em IA Aplicada**.

O objetivo é aprender por meio de pequenos exercícios, conectar teoria e código e registrar a evolução dos estudos. Este é um **laboratório educacional em desenvolvimento**, não uma aplicação de produção.

## O que estou estudando

- Fundamentos de TypeScript: tipos, objetos, arrays, funções e arrow functions.
- Transformação de dados com `map()` e spread operator.
- Preparação de dados para aprendizado de máquina.
- Normalização de valores numéricos e codificação **one-hot** de categorias.
- Tensores e suas dimensões com TensorFlow.js.
- Construção, treinamento e avaliação inicial de uma rede neural.
- Uso de Git e GitHub para versionar os exercícios.

## Experimento: primeira rede neural

No arquivo `index.ts`, os exercícios evoluem até uma rede neural simples para classificar perfis **fictícios** em três categorias: *premium*, *médio* e *básico*.

O experimento inclui:

1. Uma pequena base de pessoas fictícias com idade, cor e localização.
2. Conversão das informações categóricas em vetores one-hot e normalização da idade.
3. Criação de um tensor de entradas com formato `[4, 9]` e de saídas com formato `[4, 3]`.
4. Um modelo `tf.sequential()` com camada oculta de 8 neurônios (`relu`) e saída de 3 neurônios (`softmax`).
5. Compilação com otimizador `adam`, perda `categoricalCrossentropy` e métrica `accuracy`.
6. Treinamento e observação da evolução das métricas.

> **Nota:** A base é muito pequena e os rótulos são ilustrativos. Os resultados servem para compreender o funcionamento do treinamento, não para demonstrar capacidade de generalização ou fazer classificações reais.

## Tecnologias

- TypeScript
- Node.js
- TensorFlow.js (`@tensorflow/tfjs`)
- TSX (execução direta de arquivos TypeScript)
- Git e GitHub

## Como executar

**Pré-requisito:** Node.js e npm instalados.

Clone o repositório:

```bash
git clone https://github.com/erineia/laboratorio-ia-typescript-.git
cd laboratorio-ia-typescript-
```

Instale as dependências:

```bash
npm install
```

Execute os exercícios:

```bash
npx tsx index.ts
```

## Estrutura atual

```text
.
├── index.ts                    # Exercícios de TypeScript e rede neural
├── excel-redes-neurais.xlsx    # Planilha de apoio aos estudos
├── package.json                # Dependências do projeto
├── package-lock.json           # Versões resolvidas das dependências
└── .gitignore                  # Arquivos ignorados pelo Git
```

## Próximos passos

- Explorar previsões com `modelo.predict()`.
- Continuar os exercícios de Machine Learning e Deep Learning.
- Organizar gradualmente os exemplos por assunto.
- Documentar novos experimentos e aprendizados.

---

**Autoria:** [Erineia Silva](https://github.com/erineia)  
**Contexto:** estudos pessoais e pós-graduação em Engenharia de Software em IA Aplicada.
