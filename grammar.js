$(".button-top").click(function(){

    if(this.innerHTML == "Home"){
            window.location.href = "../HTML files/index.html";
        }
    else if(this.innerHTML == "Quiz"){
            window.location.href = "quiz.html";
        }

    else if(this.innerHTML == "About"){
        window.location.href = "../HTML files/about.html";
    }

});

const headAnimate = document.querySelector(".head-wrapper-level");

window.addEventListener("scroll", function(){
    const scrollValue = window.scrollY;
// Here Scroll y mean I am scroll up and down that is vertical scroll and scroll X means horizontal but we neve use scroll X unless our webpage is greater thatn our browser window
    if(scrollValue > 250){
        headAnimate.classList.add("active");
    }

// If we increase the scroll value then in that case the animtion would still word but it depends on the screen size na

    else{
        headAnimate.classList.remove("active");
    }
});


const cardAnimate = document.querySelector(".card");

window.addEventListener("scroll",function(){
    const scrollValue = window.screenY;

    if(scrollValue > 300){
        cardAnimate.classList.add("active")
    }

    else{
        cardAnimate.classList.remove("active");
    }
});


const cardOne = document.querySelector(".card-one");

window.addEventListener("scroll", function(){
    const scrollValue = window.scrollY;

    if(scrollValue > 200){
        cardOne.classList.add("active");
    }

    else{
        cardOne.classList.remove("active");
    }
}
);


const cardTwo = document.querySelector(".card-two");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;

    if(scrollValue > 200){
        cardTwo.classList.add("active");
    }

    else{
        cardTwo.classList.remove("active");
    }
});

const cardThree = document.querySelector(".card-three");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;

    if(scrollValue > 200){
        cardThree.classList.add("active");
    }

    else{
        cardThree.classList.remove("active");
    }
});

const cardFour = document.querySelector(".card-four");

window.addEventListener("scroll",function(){
    const scrollValue = window.scrollY;

    if(scrollValue > 200){
        cardFour.classList.add("active");
    }

    else{
        cardFour.classList.remove("active");
    }
});
