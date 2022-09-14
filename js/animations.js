const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
   
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i+=100
        
        setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber)
    }
}


function initIncreaseNumberAnimation() {
    const element = document.querySelector(".features__clients-count")
    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, 0, element, 5000)
}

initIncreaseNumberAnimation();