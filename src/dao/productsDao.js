import productsModel from '../schema/products.js';

class ProductsDao {
	async allProducts() {
		const allProducts = await productsModel.find({});
		return allProducts;
	}

	async oneProduct(id) {
		const oneProduct = await productsModel.findById(id);
		return oneProduct;
	}

	async createProduct(product) {
		const createProduct = await productsModel.create(product);
		return createProduct;
	}

	async updateProduct(id, product) {
		const updateProduct = await productsModel.findByIdAndUpdate(id, product, {
			new: true,
		});
		return updateProduct;
	}

	async deleteProduct(id) {
		const deleteProduct = await productsModel.findByIdAndDelete(id);
		return deleteProduct;
	}
}

export default ProductsDao;
