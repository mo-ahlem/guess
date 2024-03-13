var counter =0
var currentCountry = null;
var MyAnswer = null;
var italy = {
  img: "imgs/italy.png",
  options: ["italy","france","tunisia"],
  answer:"italy"
}
var palestine = {
  img: "imgs/palestine (1).png",
  options: ["maroc","palestine","Albania"],
  answer:"palestine"
}
var poland = {
  img: "imgs/poland.png",
  options: ["poland","palestine","japan"],
  answer:"poland"
}
var southAfrica = {
  img: "imgs/south-africa.png",
  options:["palestine","southAfrica","Andorra"],
  answer:"southAfrica"
}
var spain = {
  img: "imgs/spain.png",
  answer:"spain",
  options: ["spain","southAfrica", "japan"]
  };
var turkey = {
  img: "imgs/turkey.png",
  options:[ "france","turkey", "spain"],
  answer: "turkey"
};
var unitedStates = {
  img: "imgs/united-states.png",
  options:[ "Tunisia", "United States","Italy"],
  answer: "United States"
};
var countries = [
  italy,
  palestine,
  poland,
  southAfrica,
  spain,
  turkey,
  unitedStates
];
function init() {
  let firstIndex = randInt(countries.length);
  let country = countries[firstIndex];
  currentCountry = country;
  $("#btns").html("");
  $("#flag").attr("src", country.img);
  for( let text of country.options){
    let btn = document.createElement("button");
    btn.className = "btns";
    btn.innerText = text;
    btn.addEventListener('click',chooseAnswer);
    $("#btns").append(btn);
  }  
}

function randInt(n) {
  return Math.floor(Math.random() * n );
}

$("#move").click(function () {
  if ( currentCountry.answer === MyAnswer ){
    counter+=1
    init()
    // $("#game").html("<h3> You Win </h3> <br> <button class='StartAgain' onClick='reload()'>continu</button>");
  }
  //   // $("#game").html("<h3> You lose </h3> <br> <button class='StartAgain' onClick='reload()'>Start Again</button>");
  // }
  if (counter===3) {
    alert("you win with 3 points")
    reload()
    // $("#game").html("<h3> You win  </h3> <br> <button class='StartAgain' onClick='reload()'>Start Again</button>")
  }
  else{
    init()
  }
});
init();
function chooseAnswer(btn){
  MyAnswer = btn.target.innerText;
}
function reload(){
window.location.reload()
}