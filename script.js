//LOLCAT Clock
var time = new Date().getHours();
var messageText;
var image;
var noon = 12;
var evening = 17; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var isPartyTime = false;
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {

  var lolcat = document.getElementById("lolcat");
  var message = document.getElementById("timeEvent");
  var messageText;
  var image;

  if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
    image = "https://media.giphy.com/media/nzcb2ZQ2L48Za/giphy.gif";
  } else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://i.mycdn.me/image?id=855555218140&t=35&plc=WEB&tkn=*XxukzxQrV7wwuKzT3dCZlF_4zHM";
  } else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://s-media-cache-ak0.pinimg.com/736x/13/21/4b/13214b31027318cabe9ba2d21ffb6c02--chef-hats-masterchef.jpg";
  } else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
    image = "https://s-media-cache-ak0.pinimg.com/originals/02/76/32/027632586eea06e145bfb0fec99c4583.jpg";
  } else if (time < noon) {
    messageText = "Good morning!";
    image = "https://cdn.meme.am/cache/instances/folder581/500x/61296581/winking-cat-good-morning-sexy.jpg";
  } else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://s-media-cache-ak0.pinimg.com/736x/d6/07/4e/d6074e5874e5372651ae7fc7598e106b--top-hats-bowties.jpg";
  } else if (noon < time < evening) {
    messageText = "Good afternoon!";
    image = "http://static.boredpanda.com/blog/wp-content/uploads/2015/09/FullSizeRender-135603e299e878f.jpg";
  } else {
    messageText;
    image;
  }
  message.innerText = messageText;
  lolcat.src = image;

  showCurrentTime();
};

  var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById("clock");

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
 };

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

//Is it Party Time??
var partyEvent = function() {

   if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
	  partyTimeButton.innerText = "PARTY TIME!";
	  partyTimeButton.style.backgroundColor = "#222";
   } else {
    isPartyTime = false;
    time = new Date().getHours();
	  partyTimeButton.innerText = "PARTY OVER";
	  partyTimeButton.style.backgroundColor = "0A8DAB";
   }
};
partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};var napEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
