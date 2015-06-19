var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/blogdatabase");

//Defining the blueprint for blog documents
var BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  post: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: '',
    comments: [CommentSchema]
  }
});

var CommentSchema = new mongoose.Schema({
  author: {
    type: String,
    default: ''
  },
  comment: {
    type: String,
    default: ''
  }
});

//Creating a mongoose Blog model to allow us to instantiate new blog documents;
var Blog = mongoose.model('Blog', BlogSchema)
var Comment = mongoose.model('Comment', CommentSchema)

//Exporting the blog and comment models so we can access them in server.js
module.exports.Blog = Blog;
module.exports.Comment = Comment;
