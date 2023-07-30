
let copyDebounce = false;
const contactsToCopy = document.getElementsByClassName("copy")

for (let index = 0; index <= contactsToCopy.length; index++) {
    const contact = contactsToCopy[index]
    if (contact != null) {
        contact.addEventListener("click", function() {
            if (copyDebounce == true) {return}
            copyDebounce = true
    
            const currentInnerHTML = contact.innerHTML
            contact.innerHTML = "copied to clipboard - if failed: "+contact.id
            navigator.clipboard.writeText(contact.id)
            setTimeout(() => {
                contact.innerHTML = currentInnerHTML
                copyDebounce = false
            }, 1500)
        })   
    }
}