// declare global variables
var list;
var studentNumber = 0;
var studentArray = [];
var firstName = "";
var lastName = "";
var city = "";
var shoutout = "";
var studentButton;

//document ready function
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

function startLoad() {    // create function to load Prev, Next and Student buttons
  loadButtons();   // calls loadButtons function
}  // end startLoad function

function loadButtons() {   // creates buttons for each student
  var navContainer = document.createElement('div');  //creates nav container
  navContainer.className='navigation';

  var prevButton = document.createElement('button');  // creates prev button and appends to nav container
  prevButton.textContent='< PREV';
  prevButton.className = 'prev btn btn-primary';
  navContainer.appendChild(prevButton);

  for(var i=0; i<list.students.length; i++) {   // creates button for each student and appends to nav container
    studentButton = document.createElement('button');
    studentButton.textContent=list.students[i].last_name.charAt(0).toUpperCase() + list.students[i].last_name.slice(1);
    studentButton.className="studentBut btn btn-primary";
    navContainer.appendChild(studentButton);

    var studentRef = {    //create object with lastname and studentNumber to "connect" with button on click event but isn't working
      'lastName': lastName,
      'studentRefNum': 0
    };
    studentRef.lastName = list.students[i].last_name;  //set value of lastname and student number to list.students[i].last_name and i
    studentRef.studentRefNum = i;

    studentArray.push(studentRef);   //push object to student array
  }  // end loop

  var nextButton = document.createElement('button'); // creates next button and appends to nav container
  nextButton.textContent='NEXT >';
  nextButton.className = 'next btn btn-primary';
  navContainer.appendChild(nextButton);

  $('.navigation').append(navContainer);   // append to navigation class
}  // end loadButtons function

function showStudent() {  // pulls from JSON data and displays each student
  var studentContainer = document.createElement('div');  // create div for each student
  studentContainer.className='container';

  firstName = list.students[studentNumber].first_name;  // create local vars for student data for ease of reading
  lastName = list.students[studentNumber].last_name;
  city = list.students[studentNumber].city;
  shoutout = list.students[studentNumber].shoutout;

  var studentName = document.createElement('div');  // create student name div, set title case
  studentName.textContent= firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
  studentName.className = 'name h3';

  var studentCity = document.createElement('div'); // create student city div, set to title case
  studentCity.textContent= "Keeping " + city.charAt(0).toUpperCase() + city.slice(1) + " safe from crimes against code!";
  studentCity.className = 'city lead';

  var studentShoutout = document.createElement('div');  // create student shoutout div, set to title case
  studentShoutout.textContent= shoutout.charAt(0).toUpperCase() + shoutout.slice(1);
  studentShoutout.className = 'shoutout lead';

  var recordNum = document.createElement('div');  // create student number div and assigned value based on index
  recordNum.textContent=studentNumber + 1 + " / " + list.students.length;
  recordNum.className = 'studentNum h6';

  studentContainer.appendChild(studentName);  //append all student divs to studentContainer
  studentContainer.appendChild(studentCity);
  studentContainer.appendChild(studentShoutout);
  studentContainer.appendChild(recordNum);

  $('body').append(studentContainer);  // append studentContainer to body

  var imgUrl="images/" + studentNumber + ".png";  // generate imgUrl paths
  $('#picStudent').attr("src", imgUrl);  // assign imgUrl path to src of picstudent ID

}  // end showStudent function

$(document).on('click', '.next', function(){  // next button function WORKS PERFECTLY!
    $(this).parent().find();
    $(this).next().remove();
    $(this).parent().parent().next().next().remove();
    if (studentNumber === list.students.length-1) {
      studentNumber = 0;
    } else {
      studentNumber++;
    }
    showStudent();
  });  // end next button function

$(document).on('click', '.prev', function(){  // prev button function - shows the proper data but deletes the topmost student button on click
   $(this).parent().find();
   $(this).next().remove();
   $(this).parent().parent().next().next().remove();
   if (studentNumber === 0) {
     studentNumber = list.students.length-1;
   } else {
     studentNumber--;
   }
   showStudent();
 });  // end prev button function

$(document).on('click', '.studentBut', function(){  // student button function - does not work correctly
   $(this).parent().next().remove();
    $(this).parent().parent().next().next().remove();
   for (var j=0; j<list.students.length; j++) {
     if (studentButton.textContent == studentArray[j].lastName){  // can't get studentNumber assigned to the studentButton
 s        studentNumber = studentArray[j].studentRefNum;
     }
   }
   showStudent();
 });  // end student button function

}); // end document ready function
