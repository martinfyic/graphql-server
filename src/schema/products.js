import mongoose from 'mongoose';

const productsSchema = mongoose.Schema(
	{
		title: String,
		price: Number,
		thumbnail: String,
		description: String,
		stock: Number,
	},
	{ timestamps: true, versionKey: false }
);

const productsModel = mongoose.model('products', productsSchema);

export default productsModel;
