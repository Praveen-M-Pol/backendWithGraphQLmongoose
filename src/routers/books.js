import express from 'express';
const router = express.Router();
import * as books from '../controllers/books.js';

router.get("/", books.GetAllBooks);
router.post("/add", books.AddBook);
// router.put("/update/:id", books.UpdateBook);
//router.delete("/delete/:id", books.DeleteBook);

export default router;