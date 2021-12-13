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

- `packages/app/tsconfig.base.json`
- `packages/mobile/babel.config.js`
- `packages/web/craco.config.js`

### Pacotes globais

- **_[eslint.](https://www.npmjs.com/package/eslint)_** para formatar o código no padrão, validar e corrigir sintaxes ao rodar o script "yarn lint"
- **_[prettier.]_**(https://www.npmjs.com/package/prettier) para formatar o código no padrão ao salvar um arquivo ou rodar o script "yarn pretty"
- **_[typescript.]_**(https://www.npmjs.com/package/typescript) para tipar e compilar o código
- **_[ultra-runner.]_**(https://www.npmjs.com/package/ultra-runner) para executar scripts em lote

### Pacotes app

- **_[@react-spring/native.]_**(https://www.npmjs.com/package/@react-spring/native) para animações no mobile
- **_[@react-spring/web.]_**(https://www.npmjs.com/package/@react-spring/web) para animações na web
- **_[axios.]_**(https://www.npmjs.com/package/axios) para requisições http(s)
- **_[react-router-dom.]_**(https://www.npmjs.com/package/react-router-dom) para sistema de rotas na web
- **_[react-router-native.]_**(https://www.npmjs.com/package/react-router-native) para sistema de rotas no mobile

### Pacotes mobile

- **_[react-native-dotenv.]_**(https://www.npmjs.com/package/react-native-dotenv) para utilizar arquivo .env com as variaveis de ambiente

### Pacotes web

- **_[react-native-web.]_**(https://www.npmjs.com/package/react-native-web) para utilizar o mesmo código mobile na web
- **_[@craco/craco.]_**(https://www.npmjs.com/package/@craco/craco) para servir e configurar webpack, .env e alias

### Pacotes services

- **_[cors.]_**(https://www.npmjs.com/package/cors) para habilitar requisições cors
- **_[express.]_**(https://www.npmjs.com/package/express) para servir controlar e executar rotas de api
- **_[dotenv-cli.]_**(https://www.npmjs.com/package/dotenv-cli) para utilizar arquivo .env com as variaveis de ambiente
- **_[nodemon.]_**(https://www.npmjs.com/package/nodemon) para iniciar e controlar refreshs do arquivo de execução do servidor
