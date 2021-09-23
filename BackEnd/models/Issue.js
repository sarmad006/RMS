const mongoose=require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const IssueSchema= mongoose.Schema({
    title : String,
    description: String,
    author: String,
    
});  


module.exports= mongoose.model('Issue',IssueSchema);