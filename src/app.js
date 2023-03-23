import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import { dbConnect } from './config/MongoDB.js';
import { typeDef, resolver } from './graphql/index.js';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const schema = makeExecutableSchema({
	typeDefs: typeDef,
	resolvers: resolver,
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

dbConnect();

const server = app.listen(PORT, () => {
	console.log(
		`===> ✨ Servidor en funcionamiento 💻 http://localhost:${PORT} - ⌚ - ${new Date().toLocaleString()} ✨ `
	);
});
server.on('error', err => console.log(err));
