## NestJS-API-Sequelize-MySQL-Typescript

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

REST API using NestJS framework and NodeJS with Typescript, ORM Sequelize and MySQL database

<br>

### Necessary Commands 
---

#### ⚠️Should you want to create this project from zero, run all of the commands below, if not, just run **npm install --global yarn** and **yarn install** instead⚠️

<br>


> npm install --global yarn

> yarn init -y

> npm install -g @nestjs/cli

* Run in MySQL Command Line

  > create database bookstore

  > use bookstore

> yarn add @nestjs/sequelize sequelize@6.1 sequelize-typescript@2 mysql2

> yarn add @types/sequelize -D

> yarn add @nestjs/config

<br>

### Running the app
---

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```