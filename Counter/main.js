let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const btype = e.currentTarget.classList;
        if(btype.contains('decrease'))
            count--;
        
        else if(btype.contains('increase'))
            count++;
        
        else
            count = 0;
        if(count>0)
            value.style.color='green';
        else if(count === 0 )
            value.style.color='black';
        else
            value.style.color='red';
        value.textContent = count;
    });

});