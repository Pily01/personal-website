
/* M I X  I T  U P */
var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Active Work Group */
const linkWork = document.querySelectorAll(".work__item");

function changeActive(){
    linkWork.forEach(link => link.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(link => link.addEventListener("click", changeActive));