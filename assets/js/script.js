// displays current date and time
var today = moment().format("MMMM Do, YYYY, HH:mm A"); 
$("#currentDay").text(today);

//grabing all 9 'save' buttons 
var saveBtn = document.querySelectorAll(".saveBtn")


//where user will type schedule stuff
var textArea = document.querySelectorAll(".textarea")
console.log(textArea);



function renderSchedule() {
    for (var i = 9; i <=17; i++){
        //var i must be equal to first time on schedule app 
        var savedData = localStorage.getItem(i);
        // local var saveData is grabbing one single hour into the local storage
        document.getElementById(i + "hour").value = savedData
    }//making sure my var saveData is equal to an id of "(number)hour in my <textarea> html element"

    //grabs each saveBtn on HTML and should store schedule stuff in each time-block
    for (var i = 0; i<saveBtn.length; i++) {
        //console.log(saveBtn[i])

        saveBtn[i].addEventListener("click", function(event) {
            // var dataHour determines what time block todoText is inside of
            var dataHour = event.target.dataset.hour;
            console.log(dataHour);

            // var todoText grabs text of user schedule input
            var todoText = document.getElementById(dataHour + "hour").value.trim()
            console.log(todoText);

            //gives local storage key and value
             localStorage.setItem(dataHour, todoText);

            if (textArea == "") {
               alert("Oops! You forgot to type something!"); //alert not working
             } else {
               alert("Your schedule is now saved!");
            };

    });       
};
}

renderSchedule();

//----crappy code below-------
     

//changing timeblock colors when dataHour === HH

var hour = moment().format("HH"); 
//console.log(hour);


var timeBlocks = $('[data-hour]')
console.log(timeBlocks);

for (var i = 9; i< 17; i++) {
    
//     //grabs specific block
    var dataTime = singleBlock.getAttribute('data-hour')
    var singleBlock = 

//     //checks if that time block is in the past
     if (dataTime < hour) {
        document.querySelectorAll("textarea")[i].style.backgroundColor = "yellow";
   
//     //changes background color
//     oneBlock.style.backgroundColor='#350002'
//     //change text color
//     //document.querySelectorAll("h5")[i].style.color = "black";
//     //document.querySelectorAll("textarea")[i].style.color = "black";
//     //document.querySelectorAll("button")[i].style.color = "black";
//     //document.querySelectorAll("button")[i].style.background= '#350002';
     }
};
