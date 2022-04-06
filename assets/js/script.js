// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMM Do"));

// fires when the page is loaded 
function init()
{
    for(let i=9; i<=17; i++)
    {
        var timeblockid ="hours" + i;
        var timeblock = document.getElementById(timeblockid);
        
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
