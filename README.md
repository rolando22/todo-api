# Instrucciones

Crear un archivo en la raíz del proyecto .env siguiendo de ejemplo el archivo .env.template

# Ejecutar con Docker Compose

## Ejecutar

Ejecutar el proyecto en modo producción con MongoDB.

```bash
$ npm run start:docker
```

Ejecutar el proyecto en modo desarrollo con MongoDB.

```bash
$ npm run dev:mongo:docker
```

Ejecutar el proyecto en modo desarrollo con archivo local.

```bash
$ npm run dev:local:docker
```

Para limpiar los contenedores de Docker

```bash
$ npm run stop:docker
```

# Ejecutar en local

## Instalación

Instalar dependencias del proyecto

```bash
$ npm install
```

## Ejecutar

Ejecutar el proyecto en modo producción con MongoDB. Requiere servicio de Mongo.

```bash
$ npm run start
```

Ejecutar el proyecto en modo producción con archivo local.

```bash
$ npm run start:local
```

Ejecutar el proyecto en modo desarrollo con MongoDB. Requiere servicio de Mongo.

```bash
$ npm run dev:mongo
```

Ejecutar el proyecto en modo desarrollo con archivo local.

```bash
$ npm run dev:local
```
