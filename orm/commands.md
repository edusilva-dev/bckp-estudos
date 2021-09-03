# Comandos dos Sequelize CLI
- npx sequelize-cli init
-- vai gerar arquivos com as configs do sequelize, caso troque de pasta, deve-se criar o arquivo .sequelizerc na raiz do projeto para configurar o novo caminho.

- npx sequelize-cli model:create --name [Nome da tabela] --attributes [nome da coluna]:[tipo da coluna]
-- exemplo: npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

- npx sequelize-cli db:migrate

## Gerar seed para popular tabela do banco
- npx sequelize-cli seed:generate --name [nome da seed]

## Rodar a seed
- npx sequelize-cli db:seed:all [all ou nome da seed]

## Desfazer a seed
- npx sequelize db:seed:undo
- npx sequelize-cli db:seed:undo --seed [nome do arquivo]

## Desfazer a migration
- npx sequelize-cli db:migrate:undo