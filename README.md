# WeekendChallenge2-assignment
JSON, Ajax, jQuery assignment

Use the provided JSON data file. Inside it, you will find an array of objects. Each object is a classmate.

Make an AJAX call from the client side app.js, using the .ajax method and access the json data through the url above. 
Then parse the objects and arrays to complete the challenge.

Show one person at a time on the DOM (name, city, comment), with Prev and Next buttons, that go to the previous or next classmate alphabetically.
These should wrap - prev when on the first person should wrap around to show the last person and vice versa.

Also display the number of people and which is being currently viewed (eg. 2/20)

KINDA HARD MODE
Add a button for each person - appended to DOM when the json is read in. Clicking any button will display that person. 
Place these between the prev and next buttons.

HARD MODE
Include a fade out and fade in animation in-between transitioning people.

PRO MODE
Include a timer that moves to the next person if the user is not clicking on next or prev. 
If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds.
