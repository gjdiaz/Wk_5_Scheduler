// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner

// JS Moment Date
// THEN the current day is displayed at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// boostrap extend Activity 13

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var timeblocks = ["eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"];
// event onclick
// WHEN I click into a timeblock
// THEN I can enter an event


timeblocks.addEventListener("click", addEvent);

// write function if that time block is already reserved

function addEvent () {
    // modal pops up to enter data, includes submit button
    
    textContent = '';
    return; // corresponding timeblock is filled out
}

// event onclick, local storage Activity 23
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage



// local storage - activity 23
// WHEN I refresh the page
// WHEN the saved events persist

var time = document.getElementById("time");
var event = document.getElementById("event");
var notes = document.getElementById("notes");
// in modal
var submitBtn = submit.addEventListener();