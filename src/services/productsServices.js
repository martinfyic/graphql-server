import ProductsDao from '../dao/productsDao.js';

class ProductsService {
	constructor() {
		this.productsDao = new ProductsDao();
	}

	async allProducts() {
		const allProducts = await this.productsDao.allProducts();
		return allProducts;
	}

	async oneProduct(id) {
		const oneProduct = await this.productsDao.oneProduct(id);
		return oneProduct;
	}

	async createProduct(product) {
		const createProduct = await this.productsDao.oneProduct(product);
		return createProduct;
	}

	async updateProduct(id, product) {
		const updateProduct = await this.productsDao.oneProduct(id, product);
		return updateProduct;
	}

	async deleteProduct(id) {
		const deleteProduct = await this.productsDao.oneProduct(id);
		return deleteProduct;
	}
}

export default ProductsService;
