const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const RevenueSchema=mongoose.Schema({
    amount:Number,
    time:String,
    date:String,
    month:String
});


module.exports=mongoose.model('Revenue',RevenueSchema);