// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMM Do"));

// jQuery listener for click on save button
$(".saveBtn").on("click", function(){
    var textboxid ="txt" + $(this).parent().attr("id");
    var textbox = document.getElementById(textboxid);
    // set value to local storage, add date prefix in localstorage variable to make it unique per day
    var textboxidval = moment().format('L').replace(/\//g, '') + textboxid;
    localStorage.setItem(textboxidval, $(textbox).val());    
})

// fires when the page is loaded 
function init()
{
    for(let i=9; i<=17; i++)
    {
        var timeblockid ="hours" + i;
        var timeblock = document.getElementById(timeblockid);
        var textboxidval = "txt" + timeblockid;
        // add date prefix in localstorage variable to make it unique per day
        var localstorage = moment().format('L').replace(/\//g, '') + "txt" + timeblockid;
        var textboxid = document.getElementById(textboxidval);        
        // get value from local storage        
        $(textboxid).val(localStorage.getItem(localstorage));

        // change color for past, present, future hour    
        if(moment().hours() > i)
        {
            // past hours
            $(timeblock).addClass("past");
            $(timeblock).removeClass("future");
            $(timeblock).removeClass("present");            
        }
        else if(moment().hours() < i)
        {
            // future hours
            $(timeblock).addClass("future");
            $(timeblock).removeClass("past");
            $(timeblock).removeClass("present");
        }
        else
        {
            // current hour
            $(timeblock).addClass("present");
            $(timeblock).removeClass("past");
            $(timeblock).removeClass("future");
        }
    }
}

init();
