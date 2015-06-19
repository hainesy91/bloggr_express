var Blog = Blog || {};
var Comment = Comment || {};

$(document).ready(function() {
  Blog.all();
  View.initialise();
});

View = {
  initialise: function() {
    $('#blog-form').on('submit', function(e) {
      e.preventDefault();
      Blog.create($(this).serialize());
    });
    $('#blog-ul').on('click', '.js-close', function(e) {
      Blog.delete($(this).data('id'));
    });
  }
}

// Blog = {
//   all: function() {
//     $.get('/blogs', function(response) {
//       $.each(response, function(index, blog) {
//         View.render($('#blog-item-template'), food, $('#food-ul'));
//       })
//     });
//   },
//   create: function(blogParams) {
//     $.post('/blogs', blogParams)
//     .done(function(response) {
//       var blog = response;
//       View.render($('#blog-item-template'), blog, $('#blog-ul'));
//     })
//     .done(function() {
//       $('#blog-form').trigger('reset');
//     })
//   }
// }