const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const OrderSchema=mongoose.Schema({
    order:Number,
    amount:Number,
    status:Number,
    type:String
});

module.exports=mongoose.model('Order',OrderSchema);