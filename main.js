const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
})


const homeLink = document.getElementsByClassName('homeLink')[0]
const aboutLink = document.getElementsByClassName('aboutLink')[0]
const resumeLink = document.getElementsByClassName('resumeLink')[0]
const contactLink = document.getElementsByClassName('contactLink')[0]

homeLink.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
})

aboutLink.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
})

resumeLink.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
})

contactLink.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
})

