const colors = {
    offline: "#f2d9ed",
    online: "#57a55a",
    dnd: "#bf5752"
}

setTimeout(() => {
    function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
    
    const req = httpGet("https://api.lanyard.rest/v1/users/380831451559493632")
    const status = JSON.parse(req).data.discord_status.toUpperCase()
    const color = colors[status.toLowerCase()]
    console.log(color)

    document.getElementById("discordStatus").innerHTML = `currently <span style="color: ${color}">${status}</span> on discord.`
}, 0)