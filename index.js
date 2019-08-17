let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "FF69B4";
// dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e){
  //console.log(e);
    if(e.key === "ArrowRight"){
    
    moveDodgerRight();
  }
  
  if(e.key === "ArrowLeft"){
  
    moveDodgerLeft();
  }
  

});


function moveDodgerLeft(e){
 // if(e.key === "ArrowLeft"){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if(left > 0){
      dodger.style.left = `${left - 1}px`;
 //   }
  }
}

function moveDodgerRight(e){
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  console.log(right);
  if(right > 0){
    dodger.style.left = `${right + 1}px`;
  }
}