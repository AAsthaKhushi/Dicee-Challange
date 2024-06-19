
var randomNumber1=Math.random();
randomNumber1= Math.floor(randomNumber1*6)+1;

var randomDice1= "dice"+randomNumber1+".png";
var randomImage1= "./"+randomDice1;

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice2= "dice"+randomNumber2+".png";
var randomImage2="./"+randomDice2;

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
