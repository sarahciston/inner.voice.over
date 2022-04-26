
// load audio

let mic, recorder, context

let loading = document.querySelector('#loading')

let dbData

let public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBlIVrnSzFsZc7s6kO2A126XM3iyCJiQTKJtkXQqCcUCXs4EBqEemqQ1bmd7gF0jClu3pM_OOYhxPu/pub?output=csv"

// console.log('<a href="' + public_spreadsheet_url + '">' + public_spreadsheet_url + '</a>');


window.addEventListener('DOMContentLoaded', () => {
  context = new AudioContext();
  
  checkBrowser()
  
  loadData()
  
	// Papa.parse(public_spreadsheet_url, {
	// download: true,
	// header: true,
	// dynamicTyping: true,
	// complete: loadData
	// // complete: function(results) {
	// // 	console.log(results);
	// // }
	// })

})


function checkBrowser(){  
  let userAgentString = navigator.userAgent
  let chromeAgent = userAgentString.indexOf("Chrome") > -1
  console.log(chromeAgent)
  
  if (chromeAgent == false) {
    let firstClip = document.getElementById("firstClip")
    console.log(firstClip)
    let notSupported = "Speech Recognition not supported in this browser. Please use Chrome."
    console.log(notSupported)
    // firstClip.append(warning)
    firstClip.textContent = notSupported
  }
}

function loadData(results) {
  
  fetch('/api/all').then((res) => {
    res = res.json()
    return res
    }).then((res)=>{
      dbData = res.data
      console.log(dbData)
      console.log("Successfully processed " + dbData.length + " rows from mongodb!")
      loading.innerHTML = "database loaded"
      console.log("dbData length is ", dbData.length)
    
      createClip(dbData)
    
    }).catch((err)=>{console.log(err)})
}

  //   {% for phrase in phrases %}
//               <div class="entries">
//                   <h2>{{ phrase['text'] }}</h2>
//               </div>
//             {% endfor %}
  // let phrases = {{ phrases }}
  //     window.appConfig = {
  //       phrases: {{ phrases }}
  //     }


function pickRandom(l) {
  // l is r.length
  let randomIndex = Math.floor(Math.random() * l) //
  console.log("index is ", randomIndex)
  return randomIndex
}

function createClip(r) {
  
  let firstClip = document.getElementById("firstClip")
  let clipText = document.createElement("p")

  // console.log("array 'r' length is ", r.length)
  // console.log(typeof r)
  
  let randomIndex = Math.floor(Math.random() * r.length) //
  console.log("index is ", randomIndex)

  // let randomIndex = pickRandom(r.length)
  // console.log(randomIndex)
  
  let randomText = r[randomIndex].text
  // console.log(randomText)
  // console.log(typeof randomText)

  clipText.innerHTML = randomText//.text
  console.log("text is: ", clipText.innerHTML)
  
  firstClip.appendChild(clipText)
  
  return randomText
}


// // SYNTHESIZING TEXT TO SPEECH

// let inputText

// let voice = new p5.Speech("Moira")
// // voice.setVoice("Samantha")
// voice.setPitch(1.1)
// voice.setRate(0.9)

// // voice.listVoices()

// // console.log(voice.listVoices())

// let listenButton = document.querySelector("#listenButton")
// // listenButton.innerHTML = "listen"

// // listenButton.onclick = voice.speak(inputText)
// // document.body.appendChild(listenButton)

// listenButton.onclick = function(){
//   context.resume().then(() => {
    
//     console.log(typeof dbData)
    
//     let results = createClip(dbData) //empty array instead of 
//     console.log(results)
    
//     voice.speak(results)
        
//   }).catch((err)=>(console.log(err)))
// }
