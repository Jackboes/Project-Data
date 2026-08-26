const word = document.querySelector(".word");
const meaning = document.querySelector(".meaning");
const nextBut = document.querySelector(".next-butt");
const prevBut = document.querySelector(".prev-butt");
const progessTrack = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

let currentIndex = 0;


function progressUpdate(){
    const progress = ((currentIndex+1)/vocabulary.length)*100;
    // Here currentWord+1 becuz js array starts from 0 so actually when the suer sees that he would see from 1 
    progessTrack.style.width = progress+"%";
    // This is the one which shows the progress on the bar which makes teh progress visible
    progressText.textContent = currentIndex+1 + "/" + vocabulary.length;
    // This is the line by which i see the updates progress in the form of text that is numbers here
}

progressUpdate();
// Here this function call means that when i open the card the progress bar appears
// If i do not then when i start clicking the next button the progress bar appears
nextBut.addEventListener("click",function(){
    currentIndex++;
    
    if(currentIndex>=vocabulary.length){
        currentIndex=0;
    }

    word.textContent = vocabulary[currentIndex].word;
    meaning.textContent = vocabulary[currentIndex].meaning;
    progressUpdate();
    
});

prevBut.addEventListener("click",function(){

    if(currentIndex>0){ 
        currentIndex--;
       
    }
    else {
        currentIndex=15;
    }

    word.textContent = vocabulary[currentIndex].word;
    meaning.textContent = vocabulary[currentIndex].meaning;
    progressUpdate();
});

