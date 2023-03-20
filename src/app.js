import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { dbConnect } from './config/MongoDB.js';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: '*',
		methods: 'GET, POST, PUT, DELETE, OPTIONS',
	})
);

app.get('/', (req, res) => {
	res.send('PROBANDO CONECTION');
});

dbConnect()
	.then(console.log(`===> 🚀 Conectado a DB`))
	.catch(err => console.log(`⚠️ Error en DB ===> ${err}`));

const server = app.listen(PORT, () => {
	console.log(
		`===> ✨ Servidor en funcionamiento http://localhost:${PORT} at ${new Date().toLocaleString()} ✨ `
	);
});
server.on('error', err => console.log(err));
