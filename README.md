
<h1 align="center">Converter Currency API </h1>

### Tópicos

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [URL documentação](#url-documentação)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

- [Testes](#testes)

- [Logs](#logs)

- [Esclarecimentos](#esclarecimentos)

- [Contato](#contato)

## Descrição do projeto

<p align="center">Este projeto tem como objetivo converter valores de Produtos que estejam em REAL para
Dolar, Euro e Rúpia Indiana</p>

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realizar cadastro de usuário. Para URL do conversor não ficar exposta será necessário autenticação para acessa-lo, antes de tudo crie um usuário seguindo a documentação
[URL documentação](#url-documentação)

:heavy_check_mark: `Funcionalidade 2:` Login. Ao logar o usuário receberá um token o qual será utilizado no
cabeçalho de autenticação da  rota do conversor para logar (ver documentação [URL documentação](#url-documentação))

:heavy_check_mark: `Funcionalidade 3:` Converter preço de um determinado produto. Nesta rota será necessário o token mencionado na funcionalidade anterior (imagem abaixo). No corpo da requisição será enviado o preço do produto em real (ver documentação [URL documentação](#url-documentação)) e a API trará a resposta de valor convertido nas moedas Euro, Dólar e Rúpia Indiana (podendo futuramente serem incluídas outras moedas)

![Alt text](assets/token_postman.jpeg?raw=true "Token Postman")


###

## Ferramentas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="java" width="40" height="40"/> </a>       <a href="https://nodejs.org/en/docs/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="java" width="40" height="40"/> </a>       <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="java" width="40" height="40"/> </a>      <a href="https://www.mongodb.com/docs/" target="_blank"> <img src="assets/file_type_mongo_icon_130383.png" alt="java" width="40" height="40"/> </a>    <a href="https://jestjs.io/pt-BR/docs/configuration" target="_blank"> <img src="assets/file_type_jest_icon_130514.png" alt="java" width="40" height="40"/> </a>

###


## URL documentação

A documentação desta API foi feita utilizando a ferramenta swagger então a partir do momento que você rodar o
projeto cole no seu navegador a url `http://localhost:3003/api-docs/` e lá estarão as rotas documentadas com os
parâmetros e tipagem correspondentes  🏆

## Abrir e rodar o projeto


<h4>Desenvolvimento</h4>

`npm install` Para baixar as dependencias do projeto
`npm run dev` para rodar o projeto no modo desenvolvimento


<h4>Produção</h4>

`npm install` Para baixar as dependencias do projeto
`npm run build` para dar build do typescript pra pasta dist
 Criar a pasta `logs` em `dist/src`
`npm start` para rodar o projeto no modo Produção


<h4>Produção cluster</h4>

`npm install` Para baixar as dependencias do projeto
`npm run build` para dar build do typescript pra pasta dist
 Criar a pasta `logs` em `dist/src`
`npm run cluster:start` para rodar o projeto no modo Produção em cluster

>Para ver todos os comandos vá até o arquivo package.json localizado na raiz deste projeto

## Testes


- <h4>Unitários</h4>

 Com o servidor no ar rodar o comando `npm run test`


- <h4>Testes de Carga</h4>

 Os testes de carga foram criados com intuito de vermos a diferença entre um servidor em produção comum
e em modo cluster, no arquivo de exemplo na pasta `autocannon` vemos 2 exemplos do quanto podemos performar
melhor com a clusterização que divide a carga entre os núcleos da CPU . Nesse caso utilizamos a ferramenta
PM2. Para fazer o teste rode o projeto em produção (modo cluster ou comum)  ver em  [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto). Digite em outro terminal `npm run autocannon` e veja os resultados do teste de
carga do modo cluster ou comum de acordo com o escolhido e compare entre ambos.

## Logs
 Dentro da pasta src/logs existirão as pastas nomeadas com a concatenação dos dias correspondentes,
dentro delas os arquivos dos logs das requisições ordenados por hora.
 Para produção será necessário criar a pasta em `dist/src`.

## Esclarecimentos
 Este é um caso especifico que subo o repositorio com o .env ( demais projetos a regra seria colocá- lo no
gitignore). O banco de dados em questão é o mongo free cluster nivel gratuito e utilizado especialmente para esse processo seletivo onde você podera incluir novos usuarios para testar as funcionalidades de criação de usuário e login

## Contato

<a href = "https://wa.me/5511992067272" >
<img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</a>

<a href = "mailto:contato.tainararodrigues@gmail.com" >
<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href = "https://www.linkedin.com/in/thaynara-rodrigues-1276a719a/" >
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

<a href = "https://github.com/ThaynaraCR" >
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
</a>
