# tye

Projeto para tradução de termos judiciais em termos mais simples, através do uso de regras que podem ser adicionadas.

## Meu Processo

Você pode ver um pouco do meu processo de desenvolvimento [aqui](docs/myProcess.md).

## Para Rodar o Projeto

### Com Docker

Para rodar com Docker, basta ter o docker e o docker-compose instalado e então usar o comando na root

```
docker-compose up --build
```

### Sem Docker

Para rodar o projeto sem Docker é necessário ter node, npm e sails.js instalado e rodar os seguintes comandos a partir da root

```
cd server
npm install
sails lift
cd ../client
npm install
npm start
```
