// collect DOMs
const preview = document.querySelector(".preview");
const controllerWrapper = document.querySelector(".mic");

const State = ["Initial", "Record", "Download"];
let stateIndex = 0;
let mediaRecorder,
  chunks = [],
  audioURL = "";

// mediaRecorder setup for audio
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("mediaDevices supported..");

  navigator.mediaDevices
    .getUserMedia({
      audio: true,
    })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
        audioURL = window.URL.createObjectURL(blob);
        document.querySelector("audio").src = audioURL;
      };
    })
    .catch((error) => {
      console.log("Following error has occured : ", error);
    });
} else {
  stateIndex = "";
  application(stateIndex);
}

const clearDisplay = () => {
  preview.textContent = "";
};

const clearControls = () => {
  controllerWrapper.textContent = "";
};

const record = () => {
  stateIndex = 1;
  mediaRecorder.start();
  application(stateIndex);
};

const stopRecording = () => {
  stateIndex = 2;
  mediaRecorder.stop();
  application(stateIndex);
};

const downloadAudio = () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = audioURL;
  downloadLink.setAttribute("download", "audio");
  downloadLink.click();
};

const addButton = (id, funString, text) => {
  const btn = document.createElement("button");
  btn.id = id;
  btn.setAttribute("onclick", funString);
  btn.textContent = text;
  controllerWrapper.append(btn);
};

const addMessage = (text) => {
  const msg = document.createElement("p");
  msg.textContent = text;
  preview.append(msg);
};

const addAudio = () => {
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = audioURL;
  preview.append(audio);
};

const application = (index) => {
  switch (State[index]) {
    case "Initial":
      clearDisplay();
      clearControls();

      addButton("record", "record()", "Start Recording");
      break;

    case "Record":
      clearDisplay();
      clearControls();

      addMessage("Recording...");
      addButton("stop", "stopRecording()", "Stop Recording");
      break;

    case "Download":
      clearControls();
      clearDisplay();

      addAudio();
      addButton("record", "record()", "Record Again");
      break;

    default:
      clearControls();
      clearDisplay();

      addMessage("Your browser does not support mediaDevices");
      break;
  }
};

application(stateIndex);

// const storageBucket = "vrecord-ps305";

// mediaRecorder.onstop = async () => {
//   const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
//   chunks = [];

//   // Upload the blob to Google Cloud Storage
//   const formData = new FormData();
//   formData.append("audio", blob, "audio.ogg");

//   try {
//     const response = await fetch(
//       `https://storage.googleapis.com/upload/storage/v1/b/${storageBucket}/o?uploadType=media&name=audio.ogg`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (response.ok) {
//       console.log("Audio uploaded successfully!");
//     } else {
//       console.error("Failed to upload audio:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error uploading audio:", error);
//   }

//   audioURL = window.URL.createObjectURL(blob);
//   document.querySelector("audio").src = audioURL;
// };
