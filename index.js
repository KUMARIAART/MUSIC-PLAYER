const music=document.querySelector("audio")
    const play=document.getElementById("play")
    const image=document.querySelector("img")
    const title=document.getElementById("title")
    const artist=document.getElementById("artist")
    const prev=document.getElementById("prev")
    const next=document.getElementById("next")

    let songs=[{
        name:"image1",
        artist:"AKHIL SACHDEV",
        title:"CHANNA VE"
    },{
        name:"image2",
        artist:"GARRY SANDHU",
        title:"DO GALLAN"
    },{
        name:"image3",
        artist:"SHREYA GHOSAL",
        title:"DIL"
    },{
        name:"image4",
        artist:"ARJIT SINGH",
        title:"RAHOGI MERI"
    },{
        name:"image5",
        artist:"ARJIT SINGH",
        title:"AAYAT"
    }]

    let isPlaying=false
    const playMusic=()=>{
        isPlaying=true
        music.play();
        play.classList.replace("fa-play", "fa-pause")
        image.classList.add("anime")
    };
    const pauseMusic=()=>{
        isPlaying=false
        music.pause();
        play.classList.replace("fa-pause","fa-play")
        image.classList.remove("anime")
    };

    play.addEventListener("click",()=>{
        if(isPlaying){
            pauseMusic()
        }
        else{
            playMusic()
        }
    })
    let leadSong=(songs)=>{
        title.textContent=songs.title
        artist.textContent=songs.artist
        music.src="music/"+songs.name+".mp3"
        image.src="images/"+songs.name+".jpg"
    }
    let songIndex=0
    const nextSong=()=>{
        songIndex=(songIndex+1)%songs.length;
        leadSong(songs[songIndex]);
        playMusic();
    }

    const prevSong=()=>{
        songIndex=(songIndex-1+songs.length)%songs.length;
        leadSong(songs[songIndex]);
        playMusic();
    }

    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);