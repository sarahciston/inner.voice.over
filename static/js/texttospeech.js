

// SYNTHESIZING TEXT TO SPEECH

let inputText

let voice = new p5.Speech("Samantha")
// voice.setVoice("Moira")
voice.setPitch(1)
voice.setRate(0.9)

// voice.listVoices()
// console.log(voice.listVoices())

let listenButton = document.querySelector("#listenButton")
// listenButton.innerHTML = "listen"

// listenButton.onclick = voice.speak(inputText)
// document.body.appendChild(listenButton)

listenButton.onclick = function(){
  context.resume().then(() => {
    
    let results = createClip(dbData) //empty array instead of 
    console.log(results)
    
    voice.speak(results)
        
  }).catch((err)=>(console.log(err)))
}



const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onmouseover = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  }
  // btn.onmouseout = function() {
  //   // The JS works in conjunction with the 'dipped' code in style.css
  //   btn.classList.toggle("dipped");
  // }
}


/* 
Alex
Alice
Alva
Amelie
Anna
Carmit
Damayanti
Daniel
p5.speech.js:134 Diego
p5.speech.js:134 Ellen
p5.speech.js:134 Fiona
p5.speech.js:134 Fred
p5.speech.js:134 Ioana
p5.speech.js:134 Joana
p5.speech.js:134 Jorge
p5.speech.js:134 Juan
p5.speech.js:134 Kanya
p5.speech.js:134 Karen
p5.speech.js:134 Kyoko
p5.speech.js:134 Laura
p5.speech.js:134 Lekha
p5.speech.js:134 Luca
p5.speech.js:134 Luciana
p5.speech.js:134 Maged
p5.speech.js:134 Mariska
p5.speech.js:134 Mei-Jia
p5.speech.js:134 Melina
p5.speech.js:134 Milena
p5.speech.js:134 Moira
p5.speech.js:134 Monica
p5.speech.js:134 Nora
p5.speech.js:134 Paulina
p5.speech.js:134 Samantha
p5.speech.js:134 Sara
p5.speech.js:134 Satu
p5.speech.js:134 Sin-ji
p5.speech.js:134 Tessa
p5.speech.js:134 Thomas
p5.speech.js:134 Ting-Ting
p5.speech.js:134 Veena
p5.speech.js:134 Victoria
p5.speech.js:134 Xander
p5.speech.js:134 Yelda
p5.speech.js:134 Yuna
p5.speech.js:134 Yuri
p5.speech.js:134 Zosia
p5.speech.js:134 Zuzana
p5.speech.js:134 Google Deutsch
p5.speech.js:134 Google US English
p5.speech.js:134 Google UK English Female
p5.speech.js:134 Google UK English Male
*/