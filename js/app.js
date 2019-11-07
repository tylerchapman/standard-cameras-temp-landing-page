// Countdown timer
const countDownDate = new Date("July 16, 2018 10:00:00 GMT-04:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + '<span class="time-labels">days</span> ' +
                                                   hours + '<span class="time-labels">hours</span> ' +
                                                   minutes + '<span class="time-labels">minutes</span> ' +
                                                   seconds + '<span class="time-labels">seconds</span> ';

  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Launched";
  }
}, 1000);