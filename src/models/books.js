import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    flag: {
        type: String,
        required: true,
    },
});

const booksModel = mongoose.model("books", bookSchema);
export default booksModel;