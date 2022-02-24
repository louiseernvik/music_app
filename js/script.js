window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(175, 252, 175)",
        "rgb(252, 149, 112)",
        "rgb(253, 253, 179)",
        "rgb(243, 160, 243)",
        "rgb(117, 117, 240)",
        "rgb(158, 196, 245)"
    ];

    //make it add sound to pads
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //create function that makes bubbles
    const createBubbles = (index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease";
        
        //tar genast bort den nuskapta diven, annars mycket data!
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});

