const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const TableSchema=mongoose.Schema({
    number:Number,
    seats:Number,
    status:String
});


module.exports=mongoose.model('Table',TableSchema);