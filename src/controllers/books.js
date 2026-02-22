import booksModel from "../models/books.js";

export const GetAllBooks = async (req, res) => {
    try {
        console.log('write controller logic');
        console.log("Fetching all books from the database");
        // await booksModel.create({ bookName: "test", author: "test", flag: "test" });
        // const data = await booksModel.find({});
        const data = await booksModel.aggregate([ // Perform a lookup to join with the colors collection
      {
        $lookup: {
          from: "colors", // collection name in MongoDB (lowercase plural)
          localField: "_id", // field in the books collection
          foreignField: "_id", // field in the colors collection
          as: "colorDetails",
        },
      },
    ]);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const AddBook = async (req, res) => {
    try {
        console.log('write controller logic');
        console.log("Adding a new book to the database");
        req.body = { bookNaame: "test", author: "test", flag: "test" };
        const data = await booksModel.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};