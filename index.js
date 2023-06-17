
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,check);

    //button  clicks
    function check(){
        var buttonClicks = this.innerHTML;
        combineClicks(buttonClicks);
        buttonAnimation(buttonClicks);
       
    }
}

//keyboard clicks 
document.addEventListener("keydown",function(event){
    combineClicks(event.key);
    buttonAnimation(event.key);
})


// This is function that is called inside the both button and keyboard clicks and it execute what is gets as an input.
function combineClicks (key){
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case 'l':
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
        break;
    
        default:
            break;
    }
}



//Function for animation.

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}