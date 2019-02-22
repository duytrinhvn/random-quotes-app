var quotes = [
	"I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Let's face it, friends make life a lot more fun. - Charles R. Swindoll",
	"If you go around being afraid, you're never going to enjoy life. You have only one chance, so you've got to have fun - Lindsey Vonn",
	"When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things. - Joe Namath",
	"I want to have fun. It's a beautiful life. You learn, you win, you lose, but you get up. - Nas",
	"It's the game of life. Do I win or do I lose? One day they're gonna shut the game down. I gotta have as much fun and go around the board as many times as I can before it's my turn to leave. - Tupac Shakur",
	"At the end of the day, if I can say I had fun, it was a good day. - Simone Biles",
	"Even though you're growing up, you should never stop having fun. - Nina Dobrev",
	"There's no need to dress like everyone else. It's much more fun to create your own look. - Twiggy",
	"I'm a typical guy. Driving cars and speed are really fun. - Luke Mably",
	"It's kind of fun to do the impossible. - Walt Disney",
]
var quoteField = document.querySelector("p");
var button = document.querySelector("button");

button.addEventListener("click", function(){
	var random = Math.random() * 10 + 1;
	random = random | 0;
	quoteField.textContent = quotes[random];
});
