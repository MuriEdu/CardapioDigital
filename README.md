# Cardápio Digital - Projeto README

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=Frontend&color=blue&style=for-the-badge&logo=react"/><img src="https://img.shields.io/static/v1?label=spring&message=Backend&color=blue&style=for-the-badge&logo=spring"/>
  <img src="https://img.shields.io/static/v1?label=PostgreSQL&message=Database&color=blue&style=for-the-badge&logo=postgresql"/>
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=status&message=DONE&color=greem&style=for-the-badge"/>
<p>

## Introdução

Este é um sistema desenvolvido utilizando Java Spring Boot e PostgreSQL no backend e React com TypeScript no frontend. Este README tem como objetivo fornecer uma visão geral do projeto, instruções de configuração e orientações para começar a desenvolver e usar o Cardápio Digital.

## Visão Geral

O Cardápio Digital é uma aplicação web que permite aos restaurantes gerenciar seu cardápio de forma digital, facilitando a atualização e disponibilização de informações para os clientes. Os principais recursos incluem:

- Cadastro de itens no menu.
- Interface de usuário amigável para os clientes navegarem pelo cardápio.

## Tecnologias Utilizadas

### Backend
- ***Java Spring Boot***: Framework para o desenvolvimento de aplicativos Java.
- ***Java Spring WEB***: Módulo do framework Spring que facilita o desenvolvimento de aplicativos web Java, oferecendo recursos robustos para criar controladores, mapear URLs e processar solicitações HTTP de forma eficiente.
- ***Lombok***: Biblioteca Java que simplifica o desenvolvimento eliminando a necessidade de escrever código repetitivo, como getters, setters e construtores, através do uso de anotações, tornando o código mais conciso e legível.
- ***PostgreSQL***: Banco de dados relacional para armazenar dados.

### Frontend
- ***React***: Biblioteca JavaScript para a construção de interfaces de usuário.
- ***TypeScript***: Superset do JavaScript que adiciona tipagem estática.
- ***React Query***: Biblioteca React especializada no gerenciamento de dados assíncronos, facilitando a busca, atualização e manutenção eficiente de dados em aplicativos React.
- ***Axios***: biblioteca JavaScript popular e versátil para realizar solicitações HTTP, frequentemente usada para interagir com APIs RESTful e outros serviços web.

## Pré-requisitos

Antes de começar a desenvolver ou usar o Cardápio Digital, certifique-se de ter as seguintes ferramentas e dependências instaladas em seu sistema:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) - Versão 11 ou superior.
- [Maven](https://maven.apache.org/download.cgi) - Gerenciador de dependências para o backend.
- [Node.js](https://nodejs.org/) - Plataforma JavaScript para o frontend.
- [PostgreSQL](https://www.postgresql.org/download/) - Banco de dados relacional.
- Um editor de código de sua escolha (por exemplo, Visual Studio Code, IntelliJ IDEA).

## Configuração

Siga estas etapas para configurar o ambiente de desenvolvimento:
1. Clone o repositório do projeto:
##### `git clone https://github.com/MuriEdu/CardapioDigital`

### Backend

- Configure as propriedades do banco de dados no arquivo `application.properties` para corresponder à sua configuração do PostgreSQL.

### Backend

- Instale as dependências do frontend utilizando
##### `npm install`

## Uso

- Para utilizar abra as pastas `backend` e `frontend` separadamente
- Inicie a API rodando o arquivo `MenuApplication.java` 
- Inicie o Cardápio com o comando `npm run dev` (certifique-se de que o terminal esta apontando para a pasta `frontend`)
- Após efetuar os passos anteriores o Cardápio ficará disponível em `localhost:5173`

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).