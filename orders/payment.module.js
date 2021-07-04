const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let paymentSchema = new Schema({
    razorpay_payment_id:String,
    razorpay_order_id:String,
    razorpay_signature:String,
    org_logo:String,
    org_name:String,
    checkout_logo:String,
    custom_branding:String
   },
   {
        collection: 'payment'
    })

module.exports = mongoose.model('payment', paymentSchema);