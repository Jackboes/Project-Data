
document.querySelector(".btn").addEventListener("click",function(){
    var loginAudio = new Audio("../Sounds/login-click-sound.mp3");
    // currentTime = 0 basically means that when the user tries to click the button multiple times rapidly again and again the sound will start from the begining.
    loginAudio.currentTime = 0 
    loginAudio.play();
});
