for(var i=0; i < document.getElementsByClassName("operation").length; i++)
{
    document.getElementsByClassName("operation")[i].addEventListener("click" , function(){
        var ids = this;
        buttonpressed(ids);
    } );
}
function buttonpressed(idcard){
    idcard.classList.add("pressed");
    setTimeout(function(){
        idcard.classList.remove("pressed");
    }, 150);

}
var  view = document.getElementById("quantity");
 function display(input){
    view.value += input;
    sound();
}
function equals(){
    try{
        view.value = eval(view.value);
        soundEnter();
    }
    catch(error)
    {
        view.value = "Error";
        soundEnter();
    } 
}
function empty()
{
    view.value = "";
    soundEnter();
}
function sound()
{
    var audio = new Audio("./spacebar-click-keyboard-199448.mp3");
    audio.play();
}
function soundEnter(){
     var audio = new Audio("./keyboard-typing-one-short-1-292590.mp3");
    audio.play();
}
function root(){
    view.value = Math.sqrt(view.value);
    sound();
}
function pi(){
    view.value = Math.PI;
    sound();
}

document.addEventListener("keypress", function(event)
{
    var uniqueIdentity = event.key;
    if( uniqueIdentity === '1' || uniqueIdentity === '2' || uniqueIdentity === '3' || uniqueIdentity === '4' ||uniqueIdentity === '5' ||uniqueIdentity === '6' ||uniqueIdentity === '7' ||uniqueIdentity === '8' ||uniqueIdentity === '9' ||uniqueIdentity === '0' ||uniqueIdentity === '+' ||uniqueIdentity === '-' ||uniqueIdentity === '*' ||uniqueIdentity === '/' ||uniqueIdentity === '.'||uniqueIdentity === '%' ||uniqueIdentity === '^'  )
    {
        view.value += uniqueIdentity;
        sound();
    }   
    else{
        view.value = "Error";
    }
});