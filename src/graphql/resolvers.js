import booksModel from "../models/books.js";

const root= {
    books: async () => {
        console.log("Fetching all books from the database");
        try {
            const data = await booksModel.find();
            return data;
        } catch (error) {
            console.error("Error fetching books:", error);
            throw new Error("Failed to fetch books");
        }
    },
    
    createBook: async ({ bookName, author, flag }) => {
        console.log("Creating a new book with data:", { bookName, author, flag });
        try {
            const newBook = new booksModel({ bookName, author, flag });
            const savedBook = await newBook.save();
            console.log("New book created successfully:", savedBook);
            return savedBook;
        } catch (error) {
            console.error("Error creating book:", error);
            throw new Error("Failed to create book");
        }
    },

    updateBook: async ({ id, flag }) => {
        console.log(`Updating book with id: ${id} to have flag: ${flag}`);
        try {
            const updatedBook = await booksModel.findByIdAndUpdate(id, { flag }, { new: true });
            console.log("Book updated successfully:", updatedBook);
            return updatedBook;
        } catch (error) {
            console.error("Error updating book:", error);
            throw new Error("Failed to update book");
        }
    },

    deleteBook: async ({ id }) => {
        console.log(`Deleting book with id: ${id}`);
        try {
            const deletedBook = await booksModel.findByIdAndDelete(id);
            console.log("Book deleted successfully:", deletedBook);
            return deletedBook;
        } catch (error) {
            console.error("Error deleting book:", error);
            throw new Error("Failed to delete book");
        }
    },
};

// export const resolvers = {
//     Query: {
//         books: () => booksModel.find(),
//     },
// };

export default root;
// module.exports = root;