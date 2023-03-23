import productController from '../controller/productController.js';

const prodController = new productController();

export const resolver = {
	Query: {
		allProducts: async () => {
			return prodController.allProducts();
		},
		oneProduct: async (_, { id }) => {
			if (!id) return { message: `Producto con id: ${id} no existe` };
			return prodController.oneProduct(id);
		},
	},
	Mutation: {
		createProduct: async (_, { input }) => {
			return prodController.createProduct(input);
		},
		updateProduct: async (_, { id, input }) => {
			if (!id) return { message: `Producto con id: ${id} no existe` };
			return prodController.updateProduct(id, input);
		},
		deleteProduct: async (_, { id }) => {
			if (!id) return { message: `Producto con id: ${id} no existe` };
			return prodController.deleteProduct(id);
		},
	},
};
