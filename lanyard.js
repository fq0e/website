const colors = {
    offline: "#f2d9ed",
    online: "#57a55a",
    idle: "#ffcc00",
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
    const data = JSON.parse(req).data
    const status = data.discord_status.toUpperCase()
    const listening = data.listening_to_spotify
    const color = colors[status.toLowerCase()]

    document.getElementById("discordStatus").innerHTML = `currently <span style="color: ${color}">${status}</span> on discord`

    if (listening  == true) {
        const album = data.spotify.album
        const artist = data.spotify.artist
        const song = data.spotify.song

        const album_art = data.spotify.album_art_url

        document.getElementById("spotifyStatus").innerHTML = `listening to ${song} <br> by ${artist}`

        document.getElementById("brah").style.display = "inline"
        document.getElementById("spotifyAlbum").style.display = "inline"

        document.getElementById("spotifyImage").src = album_art
        document.getElementById("albumName").innerHTML = album
    }
}, 0)
