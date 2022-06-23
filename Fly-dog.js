

// Finsh Line Dog Character 
// var leftPosition = this.dogElement.offsetLeft
// function raceComplete(racetracker){
//   winner = racetracker.winner}
//   function fly(){
//   if (Right.pos.x >= 2260) {
//      racetrack.function(Finish)= true;
//      racetrack.winner = "dog";
//      raceComplete()
//   } else if (pos.x >= 2260){
//     racetrack.winner = "red-guy"
//   }
//   }

// this.dogElement.style.left = leftPosition + 'px'
// stopMovementLoop()
// this.dogElement = document.getElementById(this.dog)


// Make Dog Character Move 
const EL_img = document.querySelector("#dog");
const pos = {x:0, y:0};

document.addEventListener("keydown", (ev) => {

  const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
  if (!dir) return; // Not an arrow key.
  
  ev.preventDefault(); // Prevent Browser scroll if overflow
 

  ({
    Left:  () => pos.x -= 70,
    Right: () => pos.x += 70,
    Up:    () => pos.y -= 70,
    Down:  () => pos.y += 70,
  }[dir])(); 
  
  EL_img.style.transform = `translate(${pos.x}px, ${pos.y}px)`
});
        










