const dino = document.querySelector('.dino')

function handleKeyUp(event) {
    if (event.keyCode === 32, 38) {
        console.log("Pressionou Space")
    }
}

document.addEventListener('keyup', handleKeyUp)