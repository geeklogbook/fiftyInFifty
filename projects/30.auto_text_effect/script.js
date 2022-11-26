const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur consequuntur eos placeat sequi enim ab nobis voluptas sint excepturi eius.'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)