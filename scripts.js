$(function() {
  $("#presley").on("click", function(m) {
    m.preventDefault();
    $.ajax( { url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", success: function(data) {

      //parse string input
      if (typeof data === 'string') {
         data = JSON.parse(data);
      }

      //assign needed pieces to variables
      var words = data[0].content.slice(3, data[0].content.length - 6);
      var person = data[0].title;

      //add content and title of data to the #quotey div's children
      $("#words").html(words);
      $("#person").html("~ " + person);

      //edit href of tweet button
      $('#tweety-butt').attr('href', 'https://twitter.com/intent/tweet?hashtags=quote&text=' + encodeURIComponent('"' + words + '"\n~' + person + "\n")); //edit url of tweet button

      //show the twitter button & block quote
      $( "#tweety-butt" ).show();
      $( "#blocky" ).show();

      //get a random background gradient
      color = function get_random_color2()
        {
          var r = function () { return Math.floor(Math.random()*256) };
          return "rgb(" + r() + "," + r() + "," + r() + ")";
        };

      $("body").css("background-color", color);
      $(".container").css("color", $("body").css("background-color"));
    },
    cache: false
    });
  });
});

// $('#get-another-quote-button').on('click', function(e) {
//     e.preventDefault();
//     $.ajax( {
//       url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//       success: function(data) {
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $('#quote-title').text(post.title);
//         $('#quote-content').html(post.content);
//
//         // If the Source is available, use it. Otherwise hide it.
//         if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
//           $('#quote-source').html('Source:' + post.custom_meta.Source);
//         } else {
//           $('#quote-source').text('');
//         }
//       },
//       cache: false
//     });
//   });
// });
/*
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
});

$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
});
*/
