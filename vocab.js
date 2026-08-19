const cardAnime = document.querySelectorAll(".card-grp-two");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;

    cardAnime.forEach(function(cardAnime){
        const cardAnimePosition = cardAnime.offsetTop - window.innerHeight + 100;

        if(scrollY>cardAnimePosition){
            cardAnime.classList.add("active");
        }
        else{
            cardAnime.classList.remove("active");
        }
    });
});


const button = document.querySelector(".but-select");
const options = document.querySelectorAll(".dropdown-item");

options.forEach(function(option){
    option.addEventListener("click",function(){
        button.textContent = option.textContent;
    });
});
// Here textContent is the property which helps to give the text written in an button or an option and that is just exchanged here.
