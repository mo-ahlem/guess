var imgss=["imgs/italy.png","imgs/palestine.png","imgs/poland.png","imgs/south-africa.png","imgs/spain.png","imgs/turkey.png","imgs/united-states.png"]
function randInt(n) { 
  return Math.floor(Math.random() * (n + 1)) 
  }

$("#move").click(function(){
    $("#flag").attr("src",imgss[randInt(imgss.length)])
    
})

