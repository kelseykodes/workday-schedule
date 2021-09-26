// displays current date and time
var today = moment().format("MMMM Do, YYYY, HH:mm A"); 
$("#currentDay").text(today);

var saveBtn = document.querySelectorAll(".saveBtn")

//where user will type schedule stuff
var textArea = document.querySelectorAll(".flex-grow-1")

function savedUserInfo() {
    saveBtn.values;
    var storedItem = localStorage.getItem('storedItem');

    textArea.textContent = storedItem;

    //grabs each saveBtn on HTML and should store scedule stuff in each time-block
    for (var i = 0; i<saveBtn.length; i++) {

        if (saveBtn[i].textArea){
            console.log("is this saving");
        }
        //textArea += saveBtn[i];
    }
         
}



//might need to take out the "s" on .value on line 25
//took out "event" in function ()
saveBtn.addEventListener("click", function() {
    // event.preventDefault();
     saveBtn.values;
     console.log("saving user info")

    if (textArea == "") {
        alert("Oops, You forgot to type something!");
     } else {
        alert("Your schedule is now saved!");

         localStorage.setItem("saveBtn", saveBtn);
         savedUserInfo();
     }
});
