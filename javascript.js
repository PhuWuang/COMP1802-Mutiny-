let currentsong=0;

const music=document.querySelector('#audio')
const btnplay=document.querySelector('.btn-play')
const btnnext=document.querySelector('.btnnext')
const btnback=document.querySelector('.btnback')

btnplay.addEventListener('click',()=>{
    if(btnplay.className.includes('pause')){
        music.play();}
    else{
        music.pause();
    }    
    
    btnplay.classList.toggle('pause');

});

const setSong=(i)=>{
 let song=songs[i];
 currentsong=i;
 music.src=song.path;

}

setSong(0);
const playMusic=()=>{
  music.play();
  btnplay.classList.remove('pause');

}

//next and preview
btnnext.addEventListener('click',()=>{  
    if(currentsong>=songs.length-1){ currentsong=0}
    else{
        currentsong ++;
    }
    setSong(currentsong);
    playMusic();
}
);
btnback.addEventListener('click',()=>{  
    if(currentsong>=songs.length-1){ currentsong=0}
    else{
        currentsong --;
    }
    setSong(currentsong);
    playMusic();
}
);