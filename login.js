
document.querySelector(".btn").addEventListener("click",function(){
    var signAudio = new Audio("../Sounds/login-click-sound.mp3");
    // currentTime = 0 basically means that when the user tries to click the button multiple times rapidly again and again the sound will start from the begining.
    signAudio.currentTime = 0 
    signAudio.play()
});



var validatePassword = document.querySelector(".form-control-two");

validatePassword.addEventListener("blur", function(){
    if(validatePassword.value.length != 8){
        alert("Password must be of 8 characters");
    }

    else{
        alert("Valid Enter");
    }
})

const password = document.querySelector(".pass-value");
const showPassword = document.querySelector(".show-pass");

showPassword.addEventListener("click",function(){
// Here checked is a built-in js method which can be used whenever you use a check box it has true and false value.
    if(showPassword.checked){
        password.setAttribute("type","text");
    }
    else{
        password.setAttribute("type","password");
    }
});
