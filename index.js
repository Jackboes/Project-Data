// const topCard = document.querySelector(".slide-wrapper");

// window.addEventListener("scroll", function () {
//     const scrollValue = window.scrollY;

//     topCard.forEach(function(topCard){
//          if (scrollValue > 100) {
//         topCard.classList.add("active");
//     } else {
//         topCard.classList.remove("active");
//     }
//     });

   
// });

const topCards = document.querySelectorAll(".slide-wrapper");

window.addEventListener("scroll", function() {
    const scrollValue = window.scrollY;
    
// Here forEach basically acts as a for loop through which we can go through all the elements of the array inside wrappers.
// Now here wrapper is simply a paramter which tells JS that he has add the class .active inside the desired div class and can move to the next class.
// We always write a parameter to the call back when we are using forEach only if we want to modify or add or change the elements if the array then in that case its mandatory. 
    topCards.forEach(function(topCards) {
        if (scrollValue > 120) {
            topCards.classList.add('active');
        } 
        else {
            topCards.classList.remove("active");
        }
    });
});



const germanLevelText = document.querySelector(".text-punch-style");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
    const cardPosition = germanLevelText.offsetTop - window.innerHeight + 95;

    if(scrollValue>cardPosition){
        germanLevelText.classList.add("active");
    }
    else{
        germanLevelText.classList.remove("active");
    }
});

// Now offsetTop means that how much pixels down is your element from the top of the website and innerHeight basically means that the height of your browser window
// Now this +100 is basicall the scroll animation delay like after how many pixels you want to show the animation
// Also the offsetTop property works on indivual element and not on a group to elements and when using on grp the add it inside the loop


const germanLevelCards = document.querySelectorAll(".level-card-style");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
   
    germanLevelCards.forEach(function(germanLevelCards){
        const levelCardValue = germanLevelCards.offsetTop - window.innerHeight + 100;

        if(scrollValue>levelCardValue){
            germanLevelCards.classList.add("active");
        }
        else{
            germanLevelCards.classList.remove("active");
        }
    });
});


const stepWorkText = document.querySelector(".text-step-style");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
    const textPosition = stepWorkText.offsetTop - window.innerHeight + 95;
    if(scrollValue>textPosition){
        stepWorkText.classList.add("active");
    }
    else{
        stepWorkText.classList.remove("active");
    }
});

 const stepCard = document.querySelector(".step-card");

 window.addEventListener("scroll",function(){
     const scrollValue = window.scrollY;
     const stepCardPosition = stepCard.offsetTop - window.innerHeight + 100;

     if(scrollValue>stepCardPosition){
         stepCard.classList.add("active");
     }
     else{
         stepCard.classList.remove("active");
     }
 });

const stepCardLeft = document.querySelector(".step-card-left");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
    const stepCardLeftPosition = stepCardLeft.offsetTop - window.innerHeight + 180;

    if(scrollY>stepCardLeftPosition){
        stepCardLeft.classList.add("active");
    }
    else{
        stepCardLeft.classList.add("active");
    }
});


const textAnime = document.querySelector(".text-pod-style");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
    const textAnimePosition = textAnime.offsetTop - window.innerHeight + 95;

    if(scrollValue>textAnimePosition){
        textAnime.classList.add("active");

    }
    else{
        textAnime.classList.remove("active");
    }
});

const learnMoreAnime = document.querySelector(".extra-box-style");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
    const learnMoreAnimePosition = learnMoreAnime.offsetTop - window.innerHeight + 100;

    if(scrollValue>learnMoreAnimePosition){
        learnMoreAnime.classList.add("active");
    }
    else{
        learnMoreAnime.classList.remove("active");
    }
});

const imageAnime = document.querySelector(".image-container");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;
    const imageAnimePosition = imageAnime.offsetTop - window.innerHeight + 100;

    if(scrollValue>imageAnimePosition){
        imageAnime.classList.add("active");
    }
    else{
        imageAnime.classList.remove("active");
    }
});


const cbgImage = document.querySelector(".fit-img");

cbgImage.addEventListener("click",function(){
    window.location.href = "https://open.spotify.com/show/3QiX0ZkjILyGWmpemackWB?si=091b3df823fe416c";
    // window.location.href is a property and not a function call
});
