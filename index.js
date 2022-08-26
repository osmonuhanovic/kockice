let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomSlika1 = "images/dice" + randomNumber1 + ".png";
let randomSlika2 = "images/dice" + randomNumber2 + ".png";

let slika1 = document.querySelectorAll("img")[0];

let slika2 = document.querySelectorAll("img")[1];

slika1.setAttribute("src", randomSlika1);
slika2.setAttribute("src", randomSlika2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Igrač 1 je pobjednik";
}else if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "Neriješeno";
} else {
  document.querySelector("h1").innerHTML = "Igrač 2 je pobjednik";
}
