  let playPause = document.getElementById("play-pause");
  let text = document.getElementById("text");

  
playPause.addEventListener("click", () => { 
  
   if (circle1.style.animationPlayState != 'paused'){
  
      if(circle1.style.animationPlayState = 'running'){
        paused = true
        circle1.style.animationPlayState = 'paused';
        circle2.style.animationPlayState = 'paused';
        playPause.style.background = "red";
        playPause.style.fontSize = "17px";
        playPause.innerHTML = "Paused"
        text.innerHTML ="Click the button to Play"
        
        let soundLines = document.querySelectorAll(".sound-line")
        let soundLinesArray = [...soundLines]
        // console.log(soundLines, [...soundLines])
        
        soundLinesArray.map((soundLine)=> {
          soundLine.classList.toggle("played")
        })
      }
   }
   else if(circle1.style.animationPlayState = 'paused'){
      circle1.style.animationPlayState = 'running'
      circle2.style.animationPlayState = 'running'
      playPause.style.background = "#4287f5";
      playPause.style.color = "white";
      playPause.style.fontSize = "17px";
      playPause.innerHTML = "Played"
      text.innerHTML = null
     
        let soundLines = document.querySelectorAll(".sound-line")
        let soundLinesArray = [...soundLines]
        
        soundLinesArray.map((soundLine)=> {
          soundLine.classList.toggle("played")
     })
   }
})


let centerInSpeaker1 = document.createElement("div")
centerInSpeaker1.classList.add("center-in-speaker-1")

let linePosition = 0;
let soundLine

for (i = 0; i < 16; i++){
  linePosition = linePosition + 360/16;
  
  soundLine = document.createElement("div")
  soundLine.classList.add("sound-line")
  soundLine.classList.add("played")
  soundLine.id = `line-${i}`
  soundLine.style.transform = `rotateZ(${linePosition}deg)`
  
  centerInSpeaker1.appendChild(soundLine)
  circle1.appendChild(centerInSpeaker1)
}




let centerInSpeaker2 = document.createElement("div")
centerInSpeaker2.classList.add("center-in-speaker-2")

for (i = 0; i < 16; i++){
  linePosition = linePosition + 360/16;
  
  soundLine = document.createElement("div")
  soundLine.classList.add("sound-line")
  soundLine.classList.add("played")
  soundLine.id = `line-${i}`
  soundLine.style.transform = `rotateZ(${linePosition}deg)`
  
  centerInSpeaker2.appendChild(soundLine)
  circle2.appendChild(centerInSpeaker2)
}