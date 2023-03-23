# GRAPHQL SERVER 🚀

Demo de como utilizar [GraphQL](https://graphql.org/)

## Instalaciones ⏬

Instalar este proyecto con [pnpm](https://pnpm.io/es/)

```bash
  git clone https://github.com/martinfyic/graphql-server.git
  cd graphql-server
  pnpm install
```

## Variables de Entorno ⚠️

Para ejecutar este proyecto, deberás agregar las siguientes variables de entorno a tu archivo .env. Tienes el archivo .env.example a modo de referencia.

`PORT`

`MONGODB_URL`

## Dependencias 📚

- [express](https://expressjs.com/): 4.18.2
- [express-graphql](https://graphql.org/graphql-js/express-graphql/): 0.12.0
- [graphql](https://graphql.org/): 16.6.0
- [@graphql-tools/schema](https://the-guild.dev/graphql/tools): 9.0.17
- [mongoose](https://mongoosejs.com/): 7.0.2
- [cors](https://github.com/expressjs/cors): 2.8.5
- [dotenv](https://github.com/motdotla/dotenv): 16.0.3
- [nodemon](https://github.com/remy/nodemon): 2.0.21

## Scripts

```json
"scripts": {
		"start": "node src/app.js",
		"dev": "node --watch --trace-warnings src/app.js",
		"devmon": "nodemon src/app.js"
	},
```

Para levantar el servidor de forma normal utilizamos:
`pnpm start`

Para versiones de [Node](https://nodejs.org/en) 18.0.0 en adelante se puede utilizar `pnpm run dev`, el cual esta atento a los cambios que realicemos. Aun esta en fase experimental.

De forma recomendada puedes instalar [nodemon](https://github.com/remy/nodemon) `pnpm add -D nodemon` y utilizar el script `pnpm run devmon`

## Ejemplos

Para los ejemplos deben ir a la URL `http://localhost:3000/graphql`

1. Obtener todos los productos

```graphql
query {
	allProducts {
		_id
		title
		description
		thumbnail
		price
		stock
	}
}
```

```graphql
{
  "data": {
    "allProducts": [
      {
        "_id": "641babc51c453b85612a183a",
        "title": null,
        "description": null,
        "thumbnail": null,
        "price": null,
        "stock": null
      },
      {
        "_id": "641bac3619b2e16332903413",
        "title": "prueba",
        "description": "lorem input serff cosa del mardela vidaquepasa",
        "thumbnail": "localhost/coso.com",
        "price": 2000,
        "stock": 34
      },
      {
        "_id": "641bad4d94cab21503bfa1fb",
        "title": "prueba2",
        "description": "lorem input serff cosa del mardela vidaquepasa",
        "thumbnail": "localhost/coso.com",
        "price": 3455,
        "stock": 34
      },
      {
        "_id": "641bad6c94cab21503bfa1fd",
        "title": "prueba3",
        "description": "lorem input serff cosa del mardela vidaquepasa",
        "thumbnail": "localhost/coso.com",
        "price": 3455,
        "stock": 4
      }
    ]
  }
}
```

2. Obtener un producto seleccionado

```
query {
  oneProduct( id: "641bac3619b2e16332903413") {
    _id
    title
    price
    thumbnail
    description
    stock

  }
}
```

```
{
  "data": {
    "oneProduct": {
      "_id": "641bac3619b2e16332903413",
      "title": "prueba",
      "price": 2000,
      "thumbnail": "localhost/coso.com",
      "description": "lorem input serff cosa del mardela vidaquepasa",
      "stock": 34
    }
  }
}
```

3. Crear un producto

```
mutation {
 	createProduct(input: {
		title: "prueba4",
		price: 1023,
		thumbnail: "localhost/coso.com",
		description: "lorem input serff cosa del mardela vidaquepasa",
		stock: 45,
	}) {
		_id
		title
		stock
	}
}
```

```
{
  "data": {
    "createProduct": {
      "_id": "641ce4a4c4d5a99a01e58567",
      "title": "prueba4",
      "stock": 45
    }
  }
}
```

4. Actualizar un producto

```
mutation {
	updateProduct(id: "641ce4a4c4d5a99a01e58567", input: {
		title: "Update",
		price: 999,
		thumbnail: "localhost/coso.com",
		description: "lorem input serff cosa del mardela vidaquepasa",
		stock: 45,
	}) {
		_id
		title
		stock
	}
}
```

```
{
  "data": {
    "updateProduct": {
      "_id": "641ce4a4c4d5a99a01e58567",
      "title": "Update",
      "stock": 45
    }
  }
}
```

5. Eliminar un producto

```
mutation {
	deleteProduct(id:"641ce4a4c4d5a99a01e58567"){
    _id
    title
    stock
  }
}
```

```
{
  "data": {
    "deleteProduct": {
      "_id": "641ce4a4c4d5a99a01e58567",
      "title": "Update",
      "stock": 45
    }
  }
}
```
