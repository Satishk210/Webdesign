let songIndex=0;
let audioElement= new Audio('../songs/Kurumugil.mp3');
let masterplay=document.getElementById('masterplay_icon');
let songLIstPlay=document.querySelector('.songli_play');
let progressbar=document.getElementById('Myprogressbar');
let songCollection=Array.from(document.getElementsByClassName('Songs'));


let songsLi=[
    {songName: "sitaRamam1", filepath:"../songs/Kurumugil.mp3" ,coverpath:"../images/bg.jpg"},
    {songName: "sitaRamam2", filepath:"../songs/Azhagin-Azhagu.mp3",coverpath:"../images/bg-1.jpg"}
]

songCollection.forEach((Element, i)=>{
Element.getElementsByClassName('Songs_bg_image')[0].src=songsLi[i].coverpath;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       masterplay.src="../images/pause-icon.png";
    }
    else{
        audioElement.pause();
        masterplay.src="../images/play-icon.png";
    }
})

audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
progressbar.value=progress;

})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
const MakeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songli_play')).forEach((Element)=>{
        Element.src =('../images/play-icon.png');
    })
}

Array.from(document.getElementsByClassName('songli_play')).forEach((Element)=>{
    Element.addEventListener(('click'),(e)=>{
       
  MakeAllplays();
        Element.src =('../images/pause-icon.png');
        audioElement.currentTime =0;
        audioElement.src='../songs/Azhagin-Azhagu.mp3';

    })
})
 

 

