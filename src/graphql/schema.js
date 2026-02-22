import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Book {
        id: ID!
        bookName: String!
        author: String!
        flag: String!
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        createBook(bookName: String!, author: String!, flag: String!): Book
        updateBook(id: ID!, flag: String!): Book
        deleteBook(id: ID!): Book
    }
`);

export default schema;