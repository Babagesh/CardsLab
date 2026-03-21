import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

const isDev = process.env.NODE_ENV == 'development'
const PORT = process.env.PORT || (isDev ? 5100: 5000)
app.listen(PORT,() => {
    console.log(`Server running on PORT ${PORT}`)
} );