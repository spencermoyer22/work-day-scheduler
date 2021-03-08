var tasks = [];
var currentDay = moment().format("dddd, MMMM Do");

// display today's date at top of page
$("#currentDay").text(currentDay);

// save textarea values to array in localStorage

$(".saveBtn").on("click", function() {
    var taskDescription = $(this)
        .siblings("textarea")
        .val();
    var taskId = $(this)
        .siblings("textarea")
        .attr("id");

    localStorage.setItem(taskId, taskDescription);
});

var changeColor = function () {
    var time = parseInt(moment().format("H"));

    $("textarea").each( function() {
        var taskHour = parseInt($(this).attr("id"));

        if (time === taskHour) {
            $(this).addClass("present");
        }
        else if (time < taskHour) {
            $(this).addClass("past");
        }
        else if (time > taskHour) {
            $(this).addClass("future");
        }
    })
};

changeColor();


$("#9").val(localStorage.getItem("9"));