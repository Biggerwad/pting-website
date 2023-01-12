
const main = document.getElementById("main")
const button = document.getElementById("navButton")
const menuBar = document.getElementById("menu-bar")
const logo = document.getElementById("cLogo")

let clickValue = 1

button.addEventListener('click', () => {
    clickValue += 1
    if (clickValue % 2 == 0) {
        button.innerHTML = ""
        menuBar.style.display = "block"
        logo.style.display = "none"
    }
    else if(clickValue % 2 !== 0){
        button.innerHTML = "Menu"
        menuBar.style.display = "none"
        logo.style.display = "block"
    }
})
