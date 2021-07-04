let ordersSchema = require('./order.module');
let productSchema = require('./payment.module');
const Razorpay = require('razorpay');
const uuid = require('uuid/v4');

module.exports = {

    orderPayment : orderPayment = function (req,res) {
     var data = req.body;
    const razorpay = new Razorpay({
        key_id: "rzp_test_3vxt7cEystXXyE",
        key_secret: "QITKghIyWLIy2OCUcbqVaXul"
    })
    var options = {
        amount: data.amount,
        currency: data.currency,
        receipt: uuid
      };
    razorpay.orders.create(options, (err, option) => {
        orderSave(option);
        res.json(option);
    });
},

orderSave : orderSave = function (payment) {
    var date = new Date();
    payment["created_at"] = date;
    ordersSchema.create(payment, (err,res) => {
        if(err) throw err;
    });
  },

  payment : payment = function (req,res){
    paymentSave(req.body);
    res.redirect('http://localhost:4200/paymentsuccess');
  },

  paymentSave : paymentSave = function (payment) {
    productSchema.create(payment, (err,res) => {
        if(err) throw err;
    });
  }

}