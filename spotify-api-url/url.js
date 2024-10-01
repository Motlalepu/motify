 
      


//Get Spotify Playlist API

 
fetch("https://open.spotify.com/playlist/2Iwk8ulc6Xo9MaT7McYp0e")
.then(res => res.json())
.then(data =>  {
    console.log(data)
})

.catch(playList => {
    console.log('error ${playlist}')
});