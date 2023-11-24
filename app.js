let music= document.querySelector("audio")
let btn= document.querySelector("#q1")

btn.onclick=()=>{
    if(music.paused){
       music.play()
   }else{
      music.pause()
      }
}