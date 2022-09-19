
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

/* S C R O L L  A C T I V E */
 
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* S C R O L L  R E V E A L */

const sr = ScrollReveal({
	origin: 'top',
	distance:'60px',
	duration: 2500,
	delay: 400,
})

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {delay: 700});
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin:'bottom'})