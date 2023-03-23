import productController from '../controller/productController.js';

const prodController = new productController();

export const resolver = {
	Query: {
		allProducts: async () => {
			return prodController.allProducts();
		},
		oneProduct: async (_, { id }) => {
			return prodController.oneProduct(id);
		},
	},
	Mutation: {
		createProduct: async (_, { input }) => {
			return prodController.createProduct(input);
		},
		updateProduct: async (_, { id, input }) => {
			return prodController.updateProduct(id, input);
		},
		deleteProduct: async (_, { id }) => {
			return prodController.deleteProduct(id);
		},
	},
};
