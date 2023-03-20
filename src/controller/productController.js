import ProductsService from '../services/productsServices.js';

class ProductController {
	constructor() {
		this.productController = new ProductsService();
	}

	async allProducts() {
		const allProducts = await this.productController.allProducts();
		return allProducts;
	}

	async oneProduct(id) {
		const oneProduct = await this.productController.oneProduct(id);
		return oneProduct;
	}

	async createProduct(product) {
		const createProduct = await this.productController.createProduct(product);
		return createProduct;
	}

	async updateProduct(id, product) {
		const updateProduct = await this.productController.updateProduct(
			id,
			product
		);
		return updateProduct;
	}

	async deleteProduct(id) {
		const deleteProduct = await this.productController.deleteProduct(id);
		return deleteProduct;
	}
}

export default ProductController;
