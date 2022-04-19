document.querySelector('.button').addEventListener('click', horoscope)

function horoscope(){
  const month = document.querySelector('.month').value.toLowerCase()
  const day = document.querySelector('.day').value
  let h2 = document.querySelector('h2')
  let p = document.querySelector('p')
  document.getElementById("image").innerHTML = "" 

  if ((month === 'march' && (day >= 21 && day <= 31)) || (month === 'april' && (day >= 1 && day <= 19))){
    h2.innerText = 'Get down from that cliff!'
    p.innerText = 'In some universe, there is a giant cat sitting on a toilet with a tiny human on its lap'
      var img = document.createElement("img");
      img.src = "images/aries.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'april' && (day >= 20 && day <= 30)) || (month === 'may' && (day >= 1 && day <= 20))){
    h2.innerText = 'Get out of my China shop!'
    p.innerText = 'You\'d feel better if you stood in the mirror and cried sometimes'
      var img = document.createElement("img");
      img.src = "images/taurus.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'may' && (day >= 21 && day <= 31)) || (month === 'june' && (day >= 1 && day <= 21))){
    h2.innerText = 'Conjoined twins'
    p.innerText = 'Time to get lit at the nearest Shake Shack!'
      var img = document.createElement("img");
      img.src = "images/gemini.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'june' && (day >= 22 && day <= 30)) || (month === 'july' && (day >= 1 && day <= 22))){
    h2.innerText = 'Krusty KRAEAEAB!'
    p.innerText = 'Pizzaaaaaa! It\'s the pizza yeaaaaaah for you and meEEEEEEEEEE!'
      var img = document.createElement("img");
      img.src = "images/cancer.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'july' && (day >= 23 && day <= 31)) || (month === 'august' && (day >= 1 && day <= 22))){
    h2.innerText = 'Gryffindor'
    p.innerText = 'Sir Isacc Newton is the deadliest son-of-a-bitch in space!'
      var img = document.createElement("img");
      img.src = "images/leo.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'august' && (day >= 23 && day <= 31)) || (month === 'september' && (day >= 1 && day <= 22))){
    h2.innerText = 'Maidenless behavior smh'
    p.innerText = 'Florals? For Spring? Groundbreaking'
      var img = document.createElement("img");
      img.src = "images/virgo.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'september' && (day >= 23 && day <= 30)) || (month === 'october' && (day >= 1 && day <= 22))){
    h2.innerText = '"What turns you on, Princess?" "Justice."'
    p.innerText = 'I know. You\'re wondering...What is a place like me doing in a girl like this?'
      var img = document.createElement("img");
      img.src = "images/libra.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'october' && (day >= 23 && day <= 31)) || (month === 'november' && (day >= 1 && day <= 22))){
    h2.innerText = 'CGI Rock'
    p.innerText = 'Fight evil by moonlight, win love by daylight and never run from real fights'
      var img = document.createElement("img");
      img.src = "images/scorpio.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'november' && (day >= 23 && day <= 30)) || (month === 'december' && (day >= 1 && day <= 21))){
    h2.innerText = 'Those ugly centaurs from HP'
    p.innerText = 'Do you think God stays in heaven because he too lives in fear of what he\'s created?'
      var img = document.createElement("img");
      img.src = "images/sagitarius.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'december' && (day >= 22 && day <= 31)) || (month === 'january' && (day >= 1 && day <= 19))){
    h2.innerText = 'GOAT'
    p.innerText = 'With this little cobweb potion, you\'ll fall into dark devotion. If you ever lose affection, I can change your whole direction'
      var img = document.createElement("img");
      img.src = "images/capricorn.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'january' && (day >= 20 && day <= 31)) || (month === 'february' && (day >= 1 && day <= 18))){
    h2.innerText = 'What are you? A cup?'
    p.innerText = 'Get in loser; we\'re going shopping'
      var img = document.createElement("img");
      img.src = "images/aquarius.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else if ((month === 'february' && (day >= 19 && day <= 28)) || (month === 'march' && (day >= 1 && day <= 20))){
    h2.innerText = 'Under the sea~'
    p.innerText = 'Darling it\'s better down where it\'s wetter, take it from me!'
      var img = document.createElement("img");
      img.src = "images/pisces.png";
      var src = document.getElementById("image");
      src.appendChild(img);
  } else {
    h2.innerText = 'Error'
    p.innerText = 'That ain\'t a real date, fam...'
      var img = document.createElement("img");
      img.src = "images/conceited.gif";
      var src = document.getElementById("image");
      src.appendChild(img);
  }

}