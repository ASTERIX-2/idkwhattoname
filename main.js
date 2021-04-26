var reasons = ["My sister","My mother","My father","My dog"," This is me" ];
  var images = ["didi.jpg","mama.jpg","papa.jpg","DOg.jpeg","me.jpg"]
  var i=0;
  function nextpicture() {
    document.getElementById("reasontext").innerHTML =reasons[i];
     document.getElementById("Myimage").src =images[i];
    i++;
    if(i>=5){
i=0;
    }
  }