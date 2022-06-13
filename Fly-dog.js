// Size of Dog Character 

document.getElementById("Dog").style.width= "100px";  

// Make image Fly 
const EL_img = document.querySelector("#Dog");
const pos = {x:0, y:0};

document.addEventListener("keydown", (ev) => {

  const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
  if (!dir) return; // Not an arrow key.
  
  ev.preventDefault(); // Prevent Browser scroll if overflow

  ({
    Left:  () => pos.x -= 5,
    Right: () => pos.x += 5,
    Up:    () => pos.y -= 5,
    Down:  () => pos.y += 5,
  }[dir])(); 
  
  EL_img.style.transform = `translate(${pos.x}px, ${pos.y}px)`
});


        
// Background Size 

document.getElementById("Background").style.width= "2000px";





