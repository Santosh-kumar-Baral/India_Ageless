// Home icon
$(document).ready(function() {
    $('.navbar-brand i').addClass('fas fa-home');
  });

  // Date and Time Update Automatically
  function displayDateTime() {
 
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var formattedDate = date + '-' + month + '-' + year;
    var hour = now.getHours();
    var minute = now.getMinutes();
    // var ampm;
    //   if (hour >= 12) {      // ? is used for if..else statement.
    // ampm = 'PM';
    //   } else {
    // ampm = 'AM';
    // }
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0' + minute : minute;
    var formattedTime = hour + ':' + minute + ' ' + ampm;
  
    document.getElementById('currentDateTime').innerHTML = formattedDate +" | "+ formattedTime;
  }
  setInterval(displayDateTime, 1000);

  // Search
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function() {
  const searchTerm = document.getElementById("search-input").value;
  
});