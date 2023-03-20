import mongoose from 'mongoose';

export const dbConnect = async () => {
	const MONGODB_URL = process.env.MONGODB_URL;
	mongoose
		.connect(MONGODB_URL)
		.then(console.log(`===> 🚀 Conectado a DB`))
		.catch(err => console.log(`⚠️ Error en DB ===> ${err}`));
};
