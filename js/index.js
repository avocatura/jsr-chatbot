
var classList = ["Alexis", "Bernardo", "Josh", "Alex", "Andrew", "Brandon", "Colburn", "David", "Ejaz", "Joanna", "Kaitlyn", "Kalynne", "Katie", "Kevin", "Myriam", "Nikki", "Tenny", "Timothy"];
var randStudent = classList[Math.floor(Math.random()*classList.length)]

for (i = 0; i < classList.length; i++) {

}

var today = new Date();
var months = ["Jaunary", "February", "March", "April", "May", "June", "July", "August", "september", "October", "November", "December"];
var thisMonth = months[today.getMonth()];
var date = thisMonth + " " + today.getDate() + ", " + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();

window.onload = function() {
  	document.getElementById('hal').innerHTML += "Good morning, Dave. <br/>";
};

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
	var message = document.getElementById('chatInput').value;
	document.getElementById('dave').innerHTML += message + "<br/>";
	respondToMessage(message);
  document.getElementById('chatInput').value = "";
});

function respondToMessage(message) {
 if (message == "What's the best football team?") {
    document.getElementById('hal').innerHTML += "The Patriots! <br/>";
  }	else if (message == "Good morning, Hal" || message == "Hi" || message == "Hello") {
    document.getElementById('hal').innerHTML += "How are you today? <br/>";
  } else if (message == "What's the date?") {
      document.getElementById('hal').innerHTML += date + "<br/>";
  } else if (message == "What time is it?") {
      document.getElementById('hal').innerHTML += time + "<br/>";
  } else if (message == "Who is your favorite programmer") {
      document.getElementById('hal').innerHTML += randStudent + "<br/>";
  } else {
    document.getElementById('hal').innerHTML += "I'm sorry Dave, I didn't understand you. <br/>";
  };
};