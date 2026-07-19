var topButtons = document.querySelectorAll(".btn");

// Now here the .length is used inside the for loop because when we write in the document.querySelectorAll(".btn") this basically give us the number of elements in that array not the actual vaule of the array which is present at that position.
// But if still i want to do it i can do in this way, store topButtons inside another variable const buttonAccess = topButtons;
for(var i = 0; i< topButtons.length; i++){
    topButtons[i].addEventListener("click",function(){
        if(this.innerHTML == "Home"){
            window.location.href = "../HTML files/index.html";
            alert("Welcome, back!");
        }

        else if(this.innerHTML == "Flashcards"){
            window.location.href = "flashcards.html";
        }

        else{
            window.location.href = "../HTML files/about.html";
        }
    });
}


window.addEventListener("load",function(){
    const headAnime = document.querySelector(".head-effect");
    headAnime.classList.add("active");
});
