* yarn init -y
* yarn add express
* yarn add sucrase nodemon -D

Verificar se o codigo está seguindo os padrões
* yarn add eslint -D
yarn eslint --init

deixar o codigo mais "bonito"
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

yarn add sequelize
yarn add sequelize-cli -D

yarn add pg pg-hstore

para criar migration
 yarn sequelize migration:create --name=create-users

 para executar migrations
 yarn sequelize db:migrate

para reverter a ultima migration
yarn sequelize db:migrate:undo

para reverter todas as migrations
yarn sequelize db:migrate:undo:all

para gerar hash da senha
yarn add bcryptjs
