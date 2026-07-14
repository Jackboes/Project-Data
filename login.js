
document.querySelector(".btn").addEventListener("click",function(){
    var signAudio = new Audio("../Sounds/login-click-sound.mp3");
    // currentTime = 0 basically means that when the user tries to click the button multiple times rapidly again and again the sound will start from the begining.
    signAudio.currentTime = 0 
    signAudio.play()
});
