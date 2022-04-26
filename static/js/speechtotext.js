let USERTEXT = [];
sessionStorage.clear();

//LISTENING FOR SPEECH TO TEXT ANALYSIS

//setup analysis
let speechRec = new p5.SpeechRec(); //'en-US'), gotSpeech)

let firstClip = document.getElementById("firstClip");

let recordButton = document.querySelector("#recordButton");
let stopButton = document.querySelector("#stopButton");
let addButton = document.querySelector("#addButton");
// stopButton.disabled = true
// stopButton.hidden = true

//start analysis
recordButton.onclick = function () {
  context.resume().then(() => {
      speechRec.start(true, false);

      console.log("contribute clicked");

      speechRec.onResult = displaySpeech;

      recordButton.classList.add("running");
      recordButton.disabled = true;
      recordButton.hidden = true;
      stopButton.disabled = false;
      stopButton.hidden = false;
      addButton.disabled = false;
      addButton.hidden = false;

      // mic = new p5.AudioIn()
      // mic.start()
      // recorder = new p5.SoundRecorder()
      // recorder.setInput(mic)
      // soundFile = new p5.SoundFile()
    })
    .catch((err) => console.log(err));
};

//interrupt analysis
stopButton.onclick = function () {
  console.log("contribute clicked");

  speechRec.stop();

  recordButton.classList.remove("running");
  recordButton.disabled = false;
  recordButton.hidden = false;
  stopButton.disabled = true;
  stopButton.hidden = true;
};

//send user contributions
addButton.onclick = function () {
  // console.log("add to database clicked");
  
  let newItem = USERTEXT[0]
  
  let options = { 
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(newItem)
  }
  
  fetch('/api/new', options)
    .then((res)=>{
      res.json()
  }).then((data)=>{
      let _id = data.data
      console.log(_id)
      console.log(data)
      
  }).catch((err)=>{console.log(err)});
  
  //should this be bulk docs?
  // db.post(newItem, (err, result) => {
  //   if (!err) {
  //     console.log("successfully added new phrase to self-compassion database");
  //     console.log(result)
  //   }
  // }).catch((err)=>{console.log(err)});

  // fetch(url, method="PUT", data=stuff)

  // let output = Object.keys(sessionStorage).reduce(function(output, key) {
  //   output[key] = sessionStorage.getItem(key)
  //   return output
  // }, {})

  // for (const [createdAt, text] of Object.entries(sessionStorage)) {
  //   let blurb = {createdAt, text}
  //   output = {...output, blurb }
  // }

  console.log(USERTEXT);
};

//display what was analyzed
function displaySpeech() {
  let results = gotSpeech();
  let typeSpoken = document.createElement("p");
  typeSpoken.textContent = results;
  firstClip.appendChild(typeSpoken);

  voice.speak(results);

  storeSpeech(results);
}

function storeSpeech(s) {
  let id = Date.now()
  let createdAt = new Date().toISOString()

  let lastOutput = { _id: id.toString(), text: s, createdAt: createdAt, machineGenerated: false };
  
  //add to session storage
  sessionStorage.setItem(id, lastOutput)
  console.log(sessionStorage)

  //add to saved array
  USERTEXT.push(lastOutput);
  console.log(USERTEXT);

  return USERTEXT;
}

function gotSpeech() {
  if (speechRec.resultValue) {
    console.log(speechRec.resultString);

    return speechRec.resultString;
    // return speechRec.resultJSON
  } else return "listening...";
}
