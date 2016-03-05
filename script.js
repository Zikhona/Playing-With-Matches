		// Returns a random number between 0 (inclusive) and 1 (exclusive)
function getRandom(newRandom) {
	// returns a random number from 1 to 9
	var newRandom = Math.floor((Math.random() * 3) + 1);
  document.getElementById("demo").innerHTML = newRandom;
  
}
getRandom();
