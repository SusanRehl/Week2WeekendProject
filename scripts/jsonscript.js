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
  showStudent();   // calls listStudent function
}

// function loadButtons() {   // creates buttons for each student
//   var navContainer = document.createElement('div');
//   navContainer.className='container';
//
//
//   $('body').append(studentContainer);
// }

function showStudent() {
  var studentContainer = document.createElement('div');
  studentContainer.className='container';

  firstName = list.students[studentNumber].first_name;
  lastName = list.students[studentNumber].last_name;
  city = list.students[studentNumber].city;
  shoutout = list.students[studentNumber].shoutout;

  var imgUrl="images/" + studentNumber + ".png";
  $('#picStudent').attr("src", imgUrl);

  var studentName = document.createElement('div');
  studentName.textContent= firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
  studentName.className = 'name h3';

  var studentCity = document.createElement('div');
  studentCity.textContent= "Keeping " + city.charAt(0).toUpperCase() + city.slice(1) + " safe from evil!";
  studentCity.className = 'city lead';

  var studentShoutout = document.createElement('div');
  studentShoutout.textContent= shoutout.charAt(0).toUpperCase() + shoutout.slice(1);
  studentShoutout.className = 'shoutout lead';

  var prevButton = document.createElement('button');
  prevButton.textContent='< PREV';
  prevButton.className = 'prev btn btn-primary';

  var nextButton = document.createElement('button');
  nextButton.textContent='NEXT >';
  nextButton.className = 'next btn btn-primary';

  var recordNum = document.createElement('div');
  recordNum.textContent=studentNumber + 1 + " / " + list.students.length;
  recordNum.className = 'studentNum h6';

  studentContainer.appendChild(studentName);
  studentContainer.appendChild(studentCity);
  studentContainer.appendChild(studentShoutout);
  studentContainer.appendChild(prevButton);
  studentContainer.appendChild(nextButton);
  studentContainer.appendChild(recordNum);

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
    }
    showStudent();
     });

$(document).on('click', '.prev', function(){
   $(this).parent().find(name);
   if (studentNumber === 0) {
     $(this).parent().remove();
     studentNumber = list.students.length-1;
   } else {
      $(this).parent().remove();
     studentNumber--;
   }
   showStudent();
    });
});
