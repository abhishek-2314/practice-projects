const randomColor = function(){
    let color = '#';
    const hex = '0123456789ABCDEF';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const body = document.querySelector('body')

let interval;
function startChangingColor(){
    if(!interval){
        interval = setInterval(() => {
            body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

function stopChangingColor(){
    clearInterval(interval);
    interval = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);