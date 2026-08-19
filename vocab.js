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
