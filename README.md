## Sistema de busca de filme 

O sistema mostra um consumo de uma API REST feito em Angular v12(frontend), Node v12.21.0(backend), MySql v8.0.20 e Sequelize ORM v6. Para o desenvolvimento do projeto foi usado o padrão de arquitetura de software MVC(Model-View-Controller).

## Passos para a instalação do sistema em dev local

- Após realiazar o clone do projeto execute o comando cd Desafio-Sidia
- cd backend
- npm install
- Criar a base de dados com script: CREATE SCHEMA IF NOT EXISTS `name_base_dados`; script do mysql, ou banco de sua preferencia.
- Criar uma cópia do .env-example e salvar com o nome .env, no arquivo .env configurar as variaveis de acesso ao gerenciador de banco de dados.
- Iniciar o servidor backend com o comando npm start
- cd..
- cd frontend
- Executar o comando npm install
- ng serve --open (caso tenha o Angula CLI toll instalado), caso não tenha execute o comando npm install -g @angular/cli

## Passos para ler e persistir os arquivos no Banco Dados
- <a href="https://drive.google.com/drive/folders/15D7BZUfEakzLGPUnHuK0stUCPQmUfqsM?usp=sharing" target="_blank">Link dos arquivos</a>
- Descompactar o arquivo baixado dentro do diretorio backend/src/files e substituir os arquivos existentes.
- Acessar localhost:3000/api/v1/movies/create-movies
- Acessar localhost:3000/api/v1/ratings/create-ratings

## Após seguir os passos sequencialmente o sistema ja pode ser utilizado.
