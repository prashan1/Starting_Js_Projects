const colours =[ 'black','blue','white','green','salmon','red','orange','silver'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
c = getColor();
document.body.style.backgroundColor = colours[c];
color.textContent = colours[c]; 

});
function getColor(){
    return Math.floor(Math.random()*colours.length);
}