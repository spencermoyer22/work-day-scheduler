var tasks = [];
var currentDay = moment().format("dddd, MMMM Do");

// display today's date at top of page
$("#currentDay").text(currentDay);

// save textarea values to array in localStorage

$(".saveBtn").on("click", function() {
    // set variables to set for localStorage array
    var taskDescription = $(this)
        .siblings("textarea")
        .val();
    var taskId = $(this)
        .siblings("textarea")
        .attr("id");

    localStorage.setItem(taskId, taskDescription);
});

// load tasks to page from local storage
$("textarea").each(function() {
    // declare variable based on each textareas ID
    var elementId = $(this).attr("id");

    // grab items from array based on key selector(id)
    $(this).val(localStorage.getItem(elementId));
});

// write a function to change background color of textareas based on time of day
var changeColor = function () {
    // declare current time in form of hours(military time)
    var time = parseInt(moment().format("H"));

    // begin loop to compare each textareas id to current hour time
    $("textarea").each( function() {
        var taskHour = parseInt($(this).attr("id"));
        if (time > taskHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (time < taskHour) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    })
};

changeColor();