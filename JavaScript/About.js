const wrappers = document.querySelectorAll(".slide-wrapper, .slide-wrapper-two");

window.addEventListener("scroll", function() {
    const scrollValue = window.scrollY;

    wrappers.forEach(function(wrapper) {
        const wrapperPosition = wrapper.offsetTop - window.innerHeight + 100;

        if (scrollValue > wrapperPosition) {
            wrapper.classList.add("active");
        } else {
            wrapper.classList.remove("active");
        }
    });
});
