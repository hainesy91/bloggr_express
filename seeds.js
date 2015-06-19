var REPL = require('repl');
var db = require('./models');

var repl = REPL.start("Blogs >");
repl.context.db = db;

db.Blog.collection.remove();
db.Comment.collection.remove();

db.Blog.create({
  title: 'Best Brownie', post: 'Cupcake chocolate cheesecake chocolate cake macaroon. Tart candy jujubes croissant halvah halvah sweet roll. Donut fruitcake marshmallow jelly beans marzipan sesame snaps sugar plum gummies tiramisu. Donut marzipan jelly beans lemon drops gummi bears apple pie candy canes chocolate bar pie. Tootsie roll cheesecake marzipan jelly-o sugar plum bear claw.', author: 'Sam Jones'
}, function(err, blog){
  db.comment.create({
    author: 'James Smith',
    text: 'This is awesome'
  }, function(err, comment){
    blog.comments.push(comment);
    blog.save();
  })
});
