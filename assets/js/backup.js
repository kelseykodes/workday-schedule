// displays current date and time
var today = moment().format("MMMM Do, YYYY, HH:mm A"); 
$("#currentDay").text(today);

//grabing all 9 save buttons 
var saveBtn = document.querySelectorAll(".saveBtn")
console.log(saveBtn)
//where user will type schedule stuff
var textArea = document.querySelectorAll(".textarea")

//textArea.textContent = storedItem;

function savedUserInfo() {
    //variable declared to get user events
    var storedItem = JSON.parse(localStorage.getItem('storedItem')) || {
        event:[],
        hour:[],
    };

    //textArea.textContent = storedItem;
    //do the same like the buttons and loop. use values that i store in object 


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
    
            
                storedItem.event.push(textArea);
                storedItem.hour.push(dataHour);
                localStorage.setItem("storedItem",JSON.stringify(storedItem));
        
            // if (textArea == "") {
            //     alert("Oops, You forgot to type something!");
            //  } else {
            //     alert("Your schedule is now saved!");
            //      localStorage.setItem("saveBtn", saveBtn); //also tried saveBtn still nothing
            //};

    });       
};
}

savedUserInfo();

// saveBtn[i].addEventListener("click", function() {
//     console.log(textArea[i].value);
//     // event.preventDefault();
//      saveBtn.values;
//      console.log("saving user info")

//     if (textArea == "") {
//         alert("Oops, You forgot to type something!");
//      } else {
//         alert("Your schedule is now saved!");
//         console.log(saveBtn);
//          localStorage.setItem("saveBtn", saveBtn); //also tried saveBtn still nothing
        
//      };

// });       

//might need to take out the "s" on .value on line 25
//took out "event" in function ()
// // saveBtn[0].addEventListener("click", function() {
//     //event.preventDefault();
//      saveBtn.values;
//      console.log("saving user info")

//     if (textArea == "") {
//         alert("Oops, You forgot to type something!");
//      } else {
//         alert("Your schedule is now saved!");

//          localStorage.setItem("saveBtn", saveBtn);
//          savedUserInfo();
//      };
// });



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
