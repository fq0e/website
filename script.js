function Tooltip(el) {
    el.onmouseover = function () {
        if (isAlreadyShowing[el.id] == true) { return; };
        isAlreadyShowing[el.id] = true;
        el.parentElement.querySelector(".tooltip").style = `
            position: relative;
            top: -42px;
            left: -50px;
            display: inline-block;
            width: 0;
            text-align: center;
            font-size: 16px; 
            opacity: 1;
            transition: 0.45s cubic-bezier(0.075, 0.82, 0.165, 1);
        `
        el.style = `transform: scale(1.2);
        transition: 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);`
    }
    el.onmouseout = function () {
        el.parentElement.querySelector(".tooltip").style = `
            position: relative;
            top: -40px;
            left: -50px;
            text-align: center;
            display: inline-block;
            font-size: 0px;
            width: 0;
            opacity: 0;
            transition: 0.45s cubic-bezier(0.075, 0.82, 0.165, 1);
        `
        el.style = `transform: scale(1);
        transition: 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);`
        isAlreadyShowing[el.id] = false;
    }
    el.onclick = function() {
        console.log(el.getAttribute("tip"));
        navigator.clipboard.writeText(el.getAttribute("tip"));
        const original = el.parentElement.querySelector(".tooltip").innerText 
        el.parentElement.querySelector(".tooltip").innerText  = "copied!"
        setTimeout(() => {
            el.parentElement.querySelector(".tooltip").innerText  = original;
        }, 1000);
    }
}

const isAlreadyShowing = { discord: false, revolt: false }

for (element in document.getElementsByClassName("contact")) {
    const contact = document.getElementsByClassName("contact")[element]
    const contactTip = contact.tip
    Tooltip(contact)
}