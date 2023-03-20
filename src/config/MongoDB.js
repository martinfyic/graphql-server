import mongoose from 'mongoose';

export const dbConnect = async () => {
	const MONGODB_URL = process.env.MONGODB_URL;
	mongoose.connect(MONGODB_URL);
};
