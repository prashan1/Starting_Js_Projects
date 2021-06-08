const btn = document.querySelector('.theme-toggle-button')
const sunMoonContainer = document.querySelector('.sun-moon-container')
const body = document.body
btn.addEventListener('click' , () => {
body.classList.toggle("dark");
const rotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
sunMoonContainer.style.setProperty('--rotation', rotation+180)
})