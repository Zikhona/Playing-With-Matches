// 		// Returns a random number between 0 (inclusive) and 1 (exclusive)
// function getRandom(newRandom) {
// 	// returns a random number from 1 to 9
// 	var newRandom = Math.floor((Math.random() * 3) + 1);
//   document.getElementById("demo").innerHTML = newRandom;
  
// }
// getRandom();



// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  document.getElementById("demo").innerHTML = getRandomIntInclusive(1, 3);
  document.getElementById("demo2").innerHTML = getRandomIntInclusive(1, 3);
  document.getElementById("demo3").innerHTML = getRandomIntInclusive(1, 3);

