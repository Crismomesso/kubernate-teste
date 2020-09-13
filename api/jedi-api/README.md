# Compras cache :: Microservice

## Pré requisitos
	
	NodeJs
	Typescript (npm i -g typescript)

## Instalação


```bash
npm install
```

## Run
	

```bash
tsc -w;  (irá transpilar o código deixando em modo watch)

npm start;

```

## health check

http://localhost:8083/api/compras-cache/health

## Exemplo de chamada
http://localhost:8083/api/compras-cache/hierarquia/100000
http://localhost:8083/api/compras-cache/hierarquia/100000/4

## Tests run
npm test

## Tests sonar
npm run sonar (executar após npm test)

## Autenticacao sonar
Caso ocorra erro de autenticação incluir os valores nos parametros abaixo no arquivo sonar-project.js
    sonar.login e sonar.password (nao subir estas informacoes no repositorio)