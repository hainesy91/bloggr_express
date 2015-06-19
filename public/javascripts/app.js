var Blog = Blog || {};
var Comment = Comment || {};

$(document).ready(function() {
  Blog.all();
  View.initialise();
});

Blog = {
  all: function() {
    $.get('/blogs', function(response) {
      $.each(response, function(index, blog) {
        View.render($('#blog-item-template'), food, $('#food-ul'));
      })
    });
  },
  create: function(blogParams) {
    $.post('/blogs', blogParams)
    .done(function(response) {
      var blog = response;
      View.render($('#blog-item-template'), blog, $('#blog-ul'));
    })
    .done(function() {
      $('#blog-form').trigger('reset');
    })
  }
}