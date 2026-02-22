import express from 'express';
import { connectToDb, closeDbConnection } from './db.js';
// import book from './src/routers/books.js';
import { graphqlHTTP } from 'express-graphql';
import schema from './src/graphql/schema.js';
import root from './src/graphql/resolvers.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
async function main(params) {
    const app = express();
    await connectToDb();
    app.use(cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Replace with your frontend URL
        // methods: ['GET', 'POST', 'PUT', 'DELETE'],
        // allowedHeaders: ['Content-Type', 'Authorization'],
        // credentials: true, // Allow cookies to be sent with requests
    }));
    app.use(express.json());

    // app.use(express.urlencoded({ extended: true }));

    // app.use('/books', book);

    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));


    // Health check
    app.get('/health', (req, res) => {
        res.json({ status: 'OK', message: 'Server is running' });
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });

    // await closeDbConnection();
}
main();