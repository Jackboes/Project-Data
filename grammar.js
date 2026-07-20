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
    if(scrollValue > 120){
        headAnimate.classList.add("active");
    }

// If we increase the scroll value then in that case the animtion would still word but it depends on the screen size na

    else{
        headAnimate.classList.remove("active");
    }
});


// Here all reveal-wrapper class are stored inside an array called wrappers.
const wrappers = document.querySelectorAll(".reveal-wrapper");

window.addEventListener("scroll", function() {
    const scrollValue = window.scrollY;
    
// Here forEach basically acts as a for loop through which we can go through all the elements of the array inside wrappers.
// Now here wrapper is simply a paramter which tells JS that he has add the class .active inside the desired div class and can move to the next class.
// We always write a parameter to the call back when we are using forEach only if we want to modify or add or change the elements if the array then in that case its mandatory. 
    wrappers.forEach(function(wrapper) {
        if (scrollValue > 120) {
            wrapper.classList.add('active');
        } else {
            wrapper.classList.remove("active");
        }
    });
});


