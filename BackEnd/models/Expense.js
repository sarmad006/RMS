const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const ExpenseSchema=mongoose.Schema({
    amount:Number,
    time:String,
    date:String,
    type:String,
    month:String
});


module.exports=mongoose.model('Expense',ExpenseSchema);