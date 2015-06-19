var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/blogdatabase");

//Defining the blueprint for blog documents
var BlogSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  post: {
    type: String,
    default: ''
  },
});

var CommentSchema = new mongoose.Schema({
  comment:{
    type: String,
    default: ''
  }
})

//Creating a mongoose Blog model to allow us to instantiate new blog documents;
var Blog = mongoose.model('Blog', BlogSchema)
var Comment = mongoose.model('Comment', CommentSchema)

//Making blog object available to other 
module.exports.Blog = Blog;
module.exports.Comment = Comment;
