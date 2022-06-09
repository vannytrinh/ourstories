// /* submitting a story */
// var submitStoryButton = $('.submit-story-btn');
// var container = $('.story-container');
// var individualStoryContainer = $('.individual-story');
// var story = $('.submit-story-text');
// var storyTitle = $('.submit-story-title-text');

// submitStoryButton.on("click", addStory);

// function addStory() {
//   event.preventDefault();
//   if(story.val() !== "" && storyTitle.val() !== ""){
//     individualStoryContainer.append(`<div class ="the-story-added" style="overflow-y: scroll; height:250px" > ${storyTitle.val() + '<br>' + '<br>' + story.val()}`);
//     storyTitle.val("");
//     story.val("");
//   }else if(story.val() !== ""){
//     storyTitle.val("untitled");
//     individualStoryContainer.append(`<div class ="the-story-added" style="overflow-y: scroll; height:250px" > ${storyTitle.val() + '<br>' + '<br>' + story.val()}`);
//     storyTitle.val("");
//     story.val("");
//   }else{
//     alert("Please enter your story.");
//   }
// };




