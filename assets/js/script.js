$(document).ready(function(){ //loading html and css first

// === display the current date ===

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do h:mm a"))


// === store values ===

$(".saveBtn").on('click', function(){
    
    var task =$(this).siblings(".description").val(); //button is sibling of description
    var time = $(this).parent().attr("id"); //attribute of parent of button
   
    localStorage.setItem(time,task)
})
// === load saved storage by hour ===
$("#hour0 .description").val(localStorage.getItem("hour0"))
$("#hour1 .description").val(localStorage.getItem("hour1"))
$("#hour2 .description").val(localStorage.getItem("hour2"))
$("#hour3 .description").val(localStorage.getItem("hour3"))
$("#hour4 .description").val(localStorage.getItem("hour4"))
$("#hour5 .description").val(localStorage.getItem("hour5"))
$("#hour6 .description").val(localStorage.getItem("hour6"))
$("#hour7 .description").val(localStorage.getItem("hour7"))
$("#hour8 .description").val(localStorage.getItem("hour8"))
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))
$("#hour18 .description").val(localStorage.getItem("hour18"))
$("#hour19 .description").val(localStorage.getItem("hour19"))
$("#hour20 .description").val(localStorage.getItem("hour20"))
$("#hour21 .description").val(localStorage.getItem("hour21"))
$("#hour22 .description").val(localStorage.getItem("hour22"))
$("#hour23 .description").val(localStorage.getItem("hour23"))

// === setting background colors ===

function timeTracker() {

    // === set current hour ===
    var currentHour = moment().hours()

    // === time-block looper ===
    
    $(".time-block").each(function (){        
        
        var hourBlock = parseInt($(this).attr("id").split("hour")[1])
        
        $(this).removeClass('past present future')

    if(hourBlock < currentHour){

        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future')

    } else if(hourBlock === currentHour){

        $(this).addClass('present')
        $(this).removeClass('past')
        $(this).removeClass('future')

    } else {
        
        $(this).addClass('future')
        $(this).removeClass('past')
        $(this).removeClass('present')
    }
}) //ends looper

} //ends function
timeTracker()
})