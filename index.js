// FOR PLAYER 1

let theRandomNumber1 = Math.floor(Math.random() * 6) +1;   //generating random number between 1 to 6

let randomImage1 = "dice" +theRandomNumber1+".png";   //making the file name (dice1.png, ... , dice6.png)

let randomImageSource1 = "images/"+randomImage1;    //making the image source path

let image1 = document.querySelectorAll("img")[0];    //picking a dice ( can start from dice 1)

image1.setAttribute("src",randomImageSource1);  // change the player 1 dice to a random dice

// FOR PLAYER 2


let theRandomNumber2 = Math.floor(Math.random() * 6)+1;   //generating random number between 1 to 6

let randomImage2 = "dice" +theRandomNumber2+".png";   //making the file name (dice1.png, ... , dice6.png)

let randomImageSource2 = "images/"+randomImage2;    //making the image source path

let image2 = document.querySelectorAll("img")[1];    //picking a dice ( any dice excluding dice 1)

image2.setAttribute("src",randomImageSource2);  // change the player 2 dice to a random dice


//WINNER ANNOUCEMENT

if(randomImage1 > randomImage2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 Wins! 🚩";
}
else if(randomImage1 < randomImage2 ){
    document.querySelector("h1").innerHTML="PLAYER 2 Wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}