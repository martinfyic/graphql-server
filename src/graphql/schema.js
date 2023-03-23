export const typeDef = `

  type Query {
    allProducts: [Product]
    oneProduct: Product
  }

  type Mutation {
    createProduct(input: ProductInput): Product
    deleteProduct(id: ID!): Product
    updateProduct(id: ID!, input: ProductInput): Product
  }

  type Product {
    _id: ID
    title: String
    price: Float
    thumbnail: String
    description: String
    stock: Int
  }

  input ProductInput {
    title: String
    price: Float
    thumbnail: String
    description: String
    stock: Int
  }
`;
