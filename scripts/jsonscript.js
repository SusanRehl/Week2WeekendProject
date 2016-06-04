//  Xmake an AJAX call from the client side app.js,
//        using the .ajax method and access the json data through the url
//        above. When successful, it should bring the data back down.
//
//  You will then need to combine that with what you have learned
//  about parsing objects and arrays to complete the challenge.
//
// Ajax reference: https://github.com/devjanaprime/2.4-jQueryAjaxJSON/blob/master/scripts/getJsonExample.js
//
// X  on the DOM, one person at a time represented -
//    the info for the first person in the json data.
// X  On the screen should also be Prev and Next buttons,
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
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function(data){

          var studentNumber = data.students.length;
          var name = data.students[0].first_name.charAt(0).toUpperCase() + data.students[0].first_name.slice(1) + " " + data.students[0].last_name.charAt(0).toUpperCase() + data.students[0].last_name.slice(1);
          var city = data.students[0].city.charAt(0).toUpperCase() + data.students[0].city.slice(1);
          var shoutout = data.students[0].shoutout.charAt(0).toUpperCase() + data.students[0].shoutout.slice(1);

          var studentContainer = document.createElement("div");
          studentContainer.className='container';

          var studentName = document.createElement('div');
          studentName.textContent= name;
          studentName.className = 'name';

          var studentCity = document.createElement('div');
          studentCity.textContent= city;
          studentCity.className = 'city';

          var studentShoutout = document.createElement('div');
          studentShoutout.textContent= shoutout;
          studentShoutout.className = 'shoutout';

          var prevButton = document.createElement('button');
          prevButton.textContent='PREV';
          prevButton.className = 'prev';

          var nextButton = document.createElement('button');
          nextButton.textContent='NEXT';
          nextButton.className = 'next';

          studentContainer.appendChild(studentName);
          studentContainer.appendChild(studentCity);
          studentContainer.appendChild(studentShoutout);
          studentContainer.appendChild(prevButton);
          studentContainer.appendChild(nextButton);



          $('body').append(studentContainer);



          // $('#studentName').text(name);
          // $('#studentCity').text(city);
          // $('#studentShoutout').text(shoutout);














         }, // end success
       statusCode: {
          404: function(){
             alert('error connecting to server');
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button





});
