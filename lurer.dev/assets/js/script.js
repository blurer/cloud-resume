/*
 * Evening Startpage
 * Inspired by https://github.com/jeroenpardon/sui
 * You can find it at https://github.com/TB-96/Evening-Startpage
 * Made by TB-96 2020
 *
 */

function startTime() {
  var currentDate = new Date();
  var hr = parseInt(currentDate.getHours());
  var min = parseInt(currentDate.getMinutes());
  //Add a zero in front of numbers<10
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("header-time").innerHTML = hr + ":" + min;

  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  var date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header-date").innerHTML = date;

  var time = setTimeout(function(){ startTime() }, 60000);
}

const quotes = [
  'Hello, world...',
  'Shenaningans',
  'I’m not afraid of storms, for I’m learning to sail my ship.',
  'Be a Warrior, not a Worrier.',
  'You can’t do epic shit with basic people.',
  'So you’re telling me I have a chance?',
  'What does git-r-done mean?',
  'I thought it had more than 128mb of ram',
  'An eye for eye only ends up making the whole world blind. – Gandhi',
  'The placebo cures 30% of patients – no matter what they have. – David Kline',
  'Success is going from failure to failure without loss of enthusiasm. – Winston Churchill'
];
document.getElementById("header-quote").innerText = quotes[
  Math.floor(Math.random() * quotes.length)
];

$(document).ready(function(){
  $("#togglebookmarks").click(function(){
    $("#hiddenbookmarks").toggle();
  });
});

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#link')) return;
	// Otherwise, run your code...
	document.body.style.opacity = 0;

}, false);

document.getElementById("container").addEventListener("DOMContentLoaded", startTime());
