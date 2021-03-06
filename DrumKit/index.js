
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   var btn =this.innerHTML;
    makesoud(btn);
    ani(btn);
});

}

document.addEventListener("keypress",function(event){
    makesoud(event.key);
    ani(event.key);
});


function makesoud(key){

    switch(key){
        case "w":
             var tom1 = new Audio("/DrumKit/sounds/tom-1.mp3");
             tom1.play();
             break;
         case "a":
             var tom2 = new Audio("/DrumKit/sounds/tom-2.mp3");
             tom2.play();
             break;
         case "s":
             var tom3 = new Audio("/DrumKit/sounds/tom-3.mp3");
             tom3.play();
             break;
         case "d":
             var tom4 = new Audio("/DrumKit/sounds/tom-4.mp3");
             tom4.play();
             break;
         case "j":
             var audio = new Audio("/DrumKit/sounds/kick-bass.mp3");
             audio.play();
             break;
         case "k":
             var snare = new Audio("/DrumKit/sounds/snare.mp3");
             snare.play();
             break;
         case "l":
             var crash = new Audio("/DrumKit/sounds/crash.mp3");
             crash.play();
             break;
         default:
             console.log("wrong");
    }

}


function ani(key){

    var v=document.querySelector("."+key);
    v.classList.add("pressed");
    setTimeout(function(){v.classList.remove("pressed")},100);
}
