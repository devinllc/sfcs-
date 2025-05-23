const exprress = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = exprress();
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/userRoutes');
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(exprress.json());
app.use(exprress.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: ['*'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH']

}));
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Sofico API',
        routers: [
            {
                user: '/user/create',
                method: 'POST',
                description: 'Create a new user',

            }
        ],
        health: 'OK',
        status: 'UP',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        by: 'Ramesh Vishwakarma & Abhishek Raj',
        description: 'This is a sample server application',
    });
});

app.use('/user', userRouter);


if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
