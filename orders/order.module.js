const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid/v4');


let ordersSchema = new Schema({
    key: String,
    amount: Number,
    currency: String,
    name: String,
    description: String,
    order_id: { type: String, default: uuid },
    prefill: {
      name: String,
      email: String,
      contact: String
    },
    notes: {
      address: String
    },
    theme: {
      color: String
    },
    entity: String,
    amount_paid: Number,
    amount_due: Number,
    receipt: String,
    offer_id: String,
    status: String,
    attempts: Number,
    created_at: Date
   },
   {
        collection: 'orders'
    })

module.exports = mongoose.model('order', ordersSchema);