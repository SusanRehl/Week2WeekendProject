//  make an AJAX call from the client side app.js,
//  using the .ajax method and access the json data through the url
//  above. When successful, it should bring the data back down.
//
//  You will then need to combine that with what you have learned
//  about parsing objects and arrays to complete the challenge.
//
// Ajax reference: https://github.com/devjanaprime/2.4-jQueryAjaxJSON/blob/master/scripts/getJsonExample.js
//
// on the DOM, one person at a time represented -
// the info for the first person in the json data.
// On the screen should also be Prev and Next buttons,
// that when pressed, show the information for the appropriate person.
//  These should wrap - prev when on the first person should wrap
//  around to show the last person and vice versa.
//
// Also on the dom should be a display showing the number of people
// and which is being currently viewed (eg. 2/20)
//
// When a person is displayed, show their name, their city,
//  and their piece of shoutout feedback.
//  Only one person should be shown at any given time.

$(function() {
  $('#getJSONajax').click(function(){
    // console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function(data){
          // console.log( 'in ajax success' );
          // console.log(data);  //get it to go to Dom not console.log
          var container = document.createElement("div");

          var name = data.students[0].first_name.charAt(0).toUpperCase() + data.students[0].first_name.slice(1) + " " + data.students[0].last_name.charAt(0).toUpperCase() + data.students[0].last_name.slice(1);
          var city = data.students[0].city.charAt(0).toUpperCase() + data.students[0].city.slice(1);
          var shoutout = data.students[0].shoutout.charAt(0).toUpperCase() + data.students[0].shoutout.slice(1);
          // var studentData = (name + "," + city + "," + shoutout).split(',').join('<br />');
          $('#studentName').text(name);
          $('#studentCity').text(city);
          $('#studentShoutout').text(shoutout);

          












         }, // end success
       statusCode: {
          404: function(){
             alert('error connecting to server');
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button





});
