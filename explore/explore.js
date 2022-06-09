
// function askQuestion1() {
//   container.append(`<h1>Are you interest in learning about political issues? </h1>`);
// }


// var beginQuizBtn = $('.begin-quiz-btn');
// var quizBegan = false;
// beginQuizBtn.on("click", doSomething);
// function doSomething(){

//     beginQuizBtn.append(`<h1> Are you looking for... </h1>`);
// }

// beginQuizBtn.getElementById("Are you looking for...").innerHTML = "Are you looking for..."

// i think you have to put these in the html code!
// <h1 id="myHeader">Hello World!</h1>
// <button onclick="displayResult()">Change text</button>


var stories = $('.option-a');
var help = $('.option-b');
var info = $('.option-c');
var question = $('.quiz-question');
var next = $('.quiz-results');
var nav = $('.navigation');

// stories.on("click", showStories); 
// function showStories() {
//   console.log("show stories");
//   nav.append(`
//   <div class="group-btns">
//   <button class="option stories-to-read-btn"><a href="sys.html">Stories to Read</a></button>

//   <button class="option share-your-story"><a href="https://docs.google.com/forms/d/e/1FAIpQLSepjnHjhMwUqSVy5tHEeQbanbbJZ404Li29CftGuMH2Cj5aFg/viewform">Share Your Story</a></button>
//   </div>`);
  // next.append(`
  // <p class="stories-to-read-btn-info"> We have amassed a collection of </p>`)

//   question.text("");
// }

help.on("click", showHelp); 
function showHelp() {
   next.append(`
   <div class="group-btns">

   <button class="option option-donate-btn">Donate</button>

   <button class="option option-protest-btn">Protest</button>

   <button class="option option-contact-people-btn">Contact People</button>
   
   </div>`);
   question.text("");
}

var donate = $('.option-donate-btn');
var protest = $('.option-protest-btn');
var contactPeople = $('.option-contact-people-btn');
var container = $('.append-info-to');

donate.on("click", showDonationOptions){

}

