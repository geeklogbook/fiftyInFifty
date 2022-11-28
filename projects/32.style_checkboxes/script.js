const toggles = document.querySelectorAll('.toggle')
const sociallife = document.querySelector('#sociallife')
const goodgrades = document.querySelector('#goodgrades')
const enoughsleep = document.querySelector('#enoughsleep')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))


function doTheTrick(theClickedOne){
    if(sociallife.checked && goodgrades.checked && enoughsleep.checked){
        if(sociallife === theClickedOne){
            enoughsleep.checked = false
        }

        if(goodgrades === theClickedOne){
            sociallife.checked = false
        }

        if(enoughsleep === theClickedOne){
            goodgrades.checked = false
        }
    }
}