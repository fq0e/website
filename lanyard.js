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

    document.getElementById("discordStatus").innerHTML = `currently <span style="color: #c247a7">${status}</span> on discord`

    if (listening  == true) {
        const album = data.spotify.album
        const artist = data.spotify.artist
        const song = data.spotify.song

        const album_art = data.spotify.album_art_url

        document.getElementById("spotifyStatus").innerHTML = `listening to <span style="color: #c247a7">${song}</span> <br> by <span style="color: #c247a7">${artist}</span>`

        document.getElementById("brah").style.display = "inline"
        document.getElementById("spotifyAlbum").style.display = "inline"

        document.getElementById("spotifyImage").src = album_art
        document.getElementById("albumName").innerHTML = `<span style="color: #c247a7">${album}</span>`
    }
}, 0)
