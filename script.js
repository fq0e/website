<<<<<<< HEAD
const buttons = document.getElementsByClassName("topButton")

for (let index = 0; index <= buttons.length; index++) {
    const button = buttons[index]
    button.addEventListener("click", function(){
        if (button.id != "home") {
            location.href = button.id+".html"
        } else {
            location.href = "index.html"
        }
    })
}
=======
const buttons = document.getElementsByClassName("topButton")

for (let index = 0; index <= buttons.length; index++) {
    const button = buttons[index]
    button.addEventListener("click", function(){
        if (button.id != "home") {
            location.href = button.id+".html"
        } else {
            location.href = "index.html"
        }
    })
}
>>>>>>> 2c38dc0 (improvements,...)
