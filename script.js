document.getElementById("toggle").onclick = function(){toggle()};

function toggle(){
  console.log("hello");
 
  document.getElementById("toggle").innerHTML = "black";
  
  document.getElementsByTagName("body").style.backgroundColor = "black";
  document.getElementsByTagName("body").style.color = "white";
}
