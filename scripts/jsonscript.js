//X  make an AJAX call from the client side app.js,
//        using the .ajax method and access the json data through the url
//        above. When successful, it should bring the data back down.
//
//X  You will then need to combine that with what you have learned
//  about parsing objects and arrays to complete the challenge.
//
// Ajax reference: https://github.com/devjanaprime/2.4-jQueryAjaxJSON/blob/master/scripts/getJsonExample.js
//
//X  on the DOM, one person at a time represented -
//    the info for the first person in the json data.
//X  On the screen should also be Prev and Next buttons,
//     that when pressed, show the information for the appropriate person.
//X  These should wrap - prev when on the first person should wrap
//      around to show the last person and vice versa.
//
// Also on the dom should be a display showing the number of people
// and which is being currently viewed (eg. 2/20)
//
//X  When a person is displayed, show their name, their city,
//    and their piece of shoutout feedback.
//X  Only one person should be shown at any given time.
var list;
var studentNumber = 0;
var firstName = "";
var lastName = "";
var city = "";
var shoutout = "";

$(function() {
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function(data){   // pulls data from json
         list = data;   // sets list var to data array of objects
         startLoad();   // calls StartLoad function
       }, // end success
     statusCode: {
        404: function(){
           alert('error connecting to server');
        } // end 404
       } // end statusCode
     }); // end ajax  object

function startLoad() {    // create function to load the first student
  listStudent();   // calls listStudent function
}

function listStudent() {
  var studentContainer = document.createElement('div');
  studentContainer.className='container';

  firstName = list.students[studentNumber].first_name;
  lastName = list.students[studentNumber].last_name;
  city = list.students[studentNumber].city;
  shoutout = list.students[studentNumber].shoutout;

  var studentName = document.createElement('div');
  studentName.textContent= firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
  studentName.className = 'name';

  var studentCity = document.createElement('div');
  studentCity.textContent= city.charAt(0).toUpperCase() + city.slice(1);
  studentCity.className = 'city';

  var studentShoutout = document.createElement('div');
  studentShoutout.textContent= shoutout.charAt(0).toUpperCase() + shoutout.slice(1);
  studentShoutout.className = 'shoutout';

  var prevButton = document.createElement('button');
  prevButton.textContent='PREV';
  prevButton.className = 'prev';

  var nextButton = document.createElement('button');
  nextButton.textContent='NEXT';
  nextButton.className = 'next';

  var recordNum = document.createElement('div');
  recordNum.textContent=studentNumber + 1 + " / " + list.students.length;
  recordNum.className = 'studentNum';

  studentContainer.appendChild(studentName);
  studentContainer.appendChild(studentCity);
  studentContainer.appendChild(studentShoutout);
  studentContainer.appendChild(recordNum);
  studentContainer.appendChild(prevButton);
  studentContainer.appendChild(nextButton);


  $('body').append(studentContainer);
}

$(document).on('click', '.next', function(){
    $(this).parent().find(name);
    if (studentNumber === list.students.length-1) {
      $(this).parent().remove();
      studentNumber = 0;
    } else {
      $(this).parent().remove();
      studentNumber++;
      console.log(studentNumber);
    }
    listStudent();
     });

$(document).on('click', '.prev', function(){
   $(this).parent().find(name);
   if (studentNumber === 0) {
     $(this).parent().remove();
     studentNumber = list.students.length-1;
     console.log(studentNumber);
   } else {
      $(this).parent().remove();
     studentNumber--;
     console.log(studentNumber);
   }
   listStudent();
    });
});
