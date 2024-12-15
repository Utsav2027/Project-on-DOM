
var randomNumber1=(Math.floor(Math.random() * 6)+1);
var randomdice= ("dice" + randomNumber1 + ".png");
var randomImage=("images/" + randomdice);
var finalImage=document.querySelectorAll("img") [0];
finalImage.setAttribute("src", randomImage);


var randomNumber2=(Math.floor(Math.random() * 6)+1);
var randomdice2="dice" + randomNumber2 + ".png" ;
var randomImage2="images/" + randomdice2;
var Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else{

    document.querySelector("h1").innerHTML = "Match Draw Refresh Again";
}





