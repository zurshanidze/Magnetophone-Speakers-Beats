  let playPause = document.getElementById("play-pause");
  let text = document.getElementById("text");


playPause.addEventListener("click", () => { 
  
   if (circle1.style.animationPlayState != 'paused'){
  
      if(circle1.style.animationPlayState = 'running'){
        circle1.style.animationPlayState = 'paused';
        circle2.style.animationPlayState = 'paused';
        playPause.style.background = "red";
        playPause.style.fontSize = "17px";
        playPause.innerHTML = "Paused"
        text.innerHTML ="Click the button to Play"
      }
   }
   else if(circle1.style.animationPlayState = 'paused'){
      circle1.style.animationPlayState = 'running'
      circle2.style.animationPlayState = 'running'
      playPause.style.background = "#4287f5";
      playPause.style.color = "white";
      playPause.style.fontSize = "17px";
      // playPause.style.fontSize = "revert";
      playPause.innerHTML = "Played"
      text.innerHTML = null
   }
})
