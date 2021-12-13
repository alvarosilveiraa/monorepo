# Developer.ui monorepo

> Este repositório possui um ecosistema para projetos fullstack javascript.

## Iniciando

```
git clone https://github.com/alvarosilveiraa/monorepo.git

cd monorepo

yarn

yarn dev:web
```

## Configurando Alias

Modifique os arquivos abaixo para inserir ou remover alias:

- packages/app/tsconfig.base.json
- packages/mobile/babel.config.js
- packages/web/craco.config.js

### Pacotes globais

- _eslint_ para formatar o código no padrão, validar e corrigir sintaxes ao rodar o script "yarn lint"
- _prettier_ para formatar o código no padrão ao salvar um arquivo ou rodar o script "yarn pretty"
- _typescript_ para tipar e compilar o código
- _ultra-runner_ para executar scripts em lote

### Pacotes app

- _@react-spring/native_ para animações no mobile
- _@react-spring/web_ para animações na web
- _axios_ para requisições http(s)
- _react-router-dom_ para sistema de rotas na web
- _react-router-native_ para sistema de rotas no mobile

### Pacotes mobile

- _react-native-dotenv_ para utilizar arquivo .env com as variaveis de ambiente

### Pacotes web

- _react-native-web_ para utilizar o mesmo código mobile na web
- _@craco/craco_ para servir e configurar webpack, .env e alias

### Pacotes services

- _cors_ para habilitar requisições cors
- _express_ para servir controlar e executar rotas de api
- _dotenv-cli_ para utilizar arquivo .env com as variaveis de ambiente
- _nodemon_ para iniciar e controlar refreshs do arquivo de execução do servidor
