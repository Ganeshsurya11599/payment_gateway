const express = require('express');
const Razorpay = require('razorpay');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./db/database');

const orders = require('./orders/order.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('views', 'views');

app.use(express.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.render('razorpay.ejs');
})

app.use(cors());

//Connecting MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database Connected');
},
    error => {
        console.error('DataBase could not be connected: ' + error)
    }
)

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log('Port connected to : ' + port);
})

app.use('/orders',orders);

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


app.use(express.static(path.join(__dirname, 'dist')));