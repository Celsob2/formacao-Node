# Simulador de Corrida Mario Kart com Node.js

Projeto de estudo desenvolvido para praticar lógica de programação com JavaScript e Node.js. O programa simula uma corrida entre Mario e Peach no terminal, com cinco rodadas e resultado final. Esta é minha implementação do desafio prático da DIO.

## Como funciona

- A corrida tem cinco rodadas. Em cada uma, um bloco é sorteado: **RETA**, **CURVA** ou **CONFRONTO**.
- A cada rodada, o programa rola dois dados de 1 a 6 e exibe os resultados no terminal. RETA usa **VELOCIDADE**, CURVA usa **MANOBRABILIDADE** e CONFRONTO usa **PODER**.
- Em RETA e CURVA, o personagem com o maior resultado marca um ponto. Se houver empate, ninguém pontua.
- No CONFRONTO, o vencedor pode fazer o adversário perder um ponto, desde que ele tenha pontos para perder.
- Ao terminar as cinco rodadas, o programa mostra a pontuação e anuncia o vencedor ou um empate.

Os personagens disponíveis estão em `src/Players/index.js`. A corrida atual usa Mario e Peach, definidos em `src/index.js`.

## Como executar

É necessário ter o Node.js instalado. O projeto foi executado com a versão 22.19.0 e não usa dependências externas.

No terminal, dentro da pasta do projeto, execute:

```bash
node src/index.js
```

Os blocos e dados são sorteados a cada execução, então o resultado da corrida pode mudar.

## Organização do projeto

```text
src/
├── Players/
│   └── index.js          # Dados dos personagens
├── Utils/
│   ├── declareWinner.js  # Placar e vencedor da corrida
│   ├── getRandomBlock.js # Sorteio do bloco
│   ├── logRollResult.js  # Exibição das rolagens
│   ├── playRaceEngine.js # Rodadas e regras da corrida
│   └── rollDice.js       # Rolagem do dado
└── index.js              # Início da simulação
```

## Conceitos praticados

Objetos, funções, laços de repetição, condicionais, números aleatórios, módulos ES (`import` e `export`), `async`/`await` e saída no terminal.

## Referência

Desafio prático [Simulador de Corridas do Mario Kart com Node.js](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart), da DIO. O código deste repositório é minha implementação para estudo.
