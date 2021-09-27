// displays current date and time
var today = moment().format("MMMM Do, YYYY, HH:mm A"); 
$("#currentDay").text(today);

//grabing all 9 save buttons 
var saveBtn = document.querySelectorAll(".saveBtn")
console.log(saveBtn)
//where user will type schedule stuff
var textArea = document.querySelectorAll(".flex-grow-1")

//textArea.textContent = storedItem;

function savedUserInfo() {
    //saveBtn.values;
    var storedItem = localStorage.getItem('storedItem');

    textArea.textContent = storedItem;

    //grabs each saveBtn on HTML and should store schedule stuff in each time-block
    for (var i = 0; i<saveBtn.length; i++) {
        console.log(saveBtn[i])
        saveBtn[i].addEventListener("click", function() {
            // event.preventDefault();
             saveBtn.values;
             console.log("saving user info")
        
            if (textArea == "") {
                alert("Oops, You forgot to type something!");
             } else {
                alert("Your schedule is now saved!");
        
                 localStorage.setItem("saveBtn", storedItem); //also tried saveBtn still nothing
                 savedUserInfo();
             };

    });       
};
}

//might need to take out the "s" on .value on line 25
//took out "event" in function ()
saveBtn[0].addEventListener("click", function() {
    //event.preventDefault();
     saveBtn.values;
     console.log("saving user info")

    if (textArea == "") {
        alert("Oops, You forgot to type something!");
     } else {
        alert("Your schedule is now saved!");

         localStorage.setItem("saveBtn", saveBtn);
         savedUserInfo();
     };
});







//changing timeblock colors when specific times hit ,  THIS IS DRIVING ME INSANE
//var hour = today.format("HH:mm A")


// var timeBlocks = $('[data-time]')
// console.log(timeBlocks);

// for (var i =0; i<timeBlocks.length; i++) {
    
//     //grabs specific block
//     var oneBlock = timeBlocks[i];
//     //data-time is only 09 & 10
//     var dataTime = oneBlock.getAttribute('data-time')
    
//     //checks if that time block is in the past
// if (dataTime < hour) {
   
//     //changes background color
//     oneBlock.style.backgroundColor='#350002'
//     //change text color
//     //document.querySelectorAll("h5")[i].style.color = "black";
//     //document.querySelectorAll("textarea")[i].style.color = "black";
//     //document.querySelectorAll("button")[i].style.color = "black";
//     //document.querySelectorAll("button")[i].style.background= '#350002';
// };}
