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
- **_[prettier.](https://www.npmjs.com/package/prettier)_** para formatar o código no padrão ao salvar um arquivo ou rodar o script "yarn pretty"
- **_[typescript.](https://www.npmjs.com/package/typescript)_** para tipar e compilar o código
- **_[ultra-runner.](https://www.npmjs.com/package/ultra-runner)_** para executar scripts em lote

### Pacotes app

- **_[@react-spring/native.](https://www.npmjs.com/package/@react-spring/native)_** para animações no mobile
- **_[@react-spring/web.](https://www.npmjs.com/package/@react-spring/web)_** para animações na web
- **_[axios.](https://www.npmjs.com/package/axios)_** para requisições http(s)
- **_[react-router-dom.](https://www.npmjs.com/package/react-router-dom)_** para sistema de rotas na web
- **_[react-router-native.](https://www.npmjs.com/package/react-router-native)_** para sistema de rotas no mobile

### Pacotes mobile

- **_[react-native-dotenv.](https://www.npmjs.com/package/react-native-dotenv)_** para utilizar arquivo .env com as variaveis de ambiente

### Pacotes web

- **_[react-native-web.](https://www.npmjs.com/package/react-native-web)_** para utilizar o mesmo código mobile na web
- **_[@craco/craco.](https://www.npmjs.com/package/@craco/craco)_** para servir e configurar webpack, .env e alias

### Pacotes services

- **_[cors.](https://www.npmjs.com/package/cors)_** para habilitar requisições cors
- **_[express.](https://www.npmjs.com/package/express)_** para servir controlar e executar rotas de api
- **_[dotenv-cli.](https://www.npmjs.com/package/dotenv-cli)_** para utilizar arquivo .env com as variaveis de ambiente
- **_[nodemon.](https://www.npmjs.com/package/nodemon)_** para iniciar e controlar refreshs do arquivo de execução do servidor
