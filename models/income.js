const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  // id: {
  //   type: Number
  // },
  user_id: {
    type: Schema.Types.ObjectId, ref: 'Users'
  },
   description : {
    type: String
  },
  category_id: {
    type: Schema.Types.ObjectId, ref: 'Categories'
  },
  month_created: {
    type: Number
  },
  year_created: {
    type: Number
  },
  amount: {
    type: Number,
    required: [true, "Enter an amount"]
  },
  due_date: {
    type: Date,
    // default: Date.now
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;