var buttons = document.querySelectorAll("button");

for(var i = 0 ;i<buttons.length;i++){
    buttons[i].addEventListener("click",function clicked(){
       var button = this.innerHTML;
     mackSound(button);
     isClicked(button);
    });
}
document.addEventListener("keypress",function(charac){
    mackSound(charac.key);
    isClicked(charac.key);
})


function mackSound(key){

    switch(key){
        case "w":
           var crash = new Audio("sounds/crash.mp3").play();
            break;
            case "a":
                new Audio("sounds/kick-bass.mp3").play();
                break;
                case "s":
                  new Audio("sounds/snare.mp3").play();
                  break;
                  case "d":
                      new Audio("sounds/tom-1.mp3").play();
                      break;
                      case "j":
                          new Audio("sounds/tom-2.mp3").play();
                          break;
                          case "k":
                              new Audio("sounds/tom-3.mp3").play();
                              break;
                              case "l":
                                  new Audio("sounds/tom-4.mp3").play();
                                  break;
                                  default:console.log(sound);
    }
  

}
function isClicked(val){
    var activated = document.querySelector("."+val);
    activated.classList.add("active");
setTimeout(function(){
    activated.classList.remove("active");
},100);
}