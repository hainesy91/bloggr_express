var REPL = require('repl');
var db = require('./models');

var repl = REPL.start("Blogs >");

repl.context.db = db;

db.Blog.create({
  name: 'Best Brownie', post: 'Cupcake chocolate cheesecake chocolate cake macaroon. Tart candy jujubes croissant halvah halvah sweet roll. Donut fruitcake marshmallow jelly beans marzipan sesame snaps sugar plum gummies tiramisu. Donut marzipan jelly beans lemon drops gummi bears apple pie candy canes chocolate bar pie. Tootsie roll cheesecake marzipan jelly-o sugar plum bear claw.'}, function(err, blog){
  console.log('Blog created');
  console.log(blog);
});

db.Comment.create({
  comment: 'That sounds really tasty!'
}), function(err, comment) {
  console.log('Comment added');
  console.log(comment);
};