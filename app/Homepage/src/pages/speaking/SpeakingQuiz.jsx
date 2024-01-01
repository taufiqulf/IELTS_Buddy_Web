import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SpeakingQuiz = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-GB" });
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex items-center justify-center my-5">
      <div className="max-w-screen w-full md:mx-10 mx-5 bg-primary text-secondary py-5 md:px-6 px-4 rounded-[35px]">
        <h1 className="text-center text-2xl font-bold py-5">Read These Text Below While Recording</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 auto-cols-auto md:space-x-5 h-max md:text-xl text-lg text-justify mb-10 md:px-10 px-5">
          <p className="md:px-5 px-0">
            <span className="font-bold">1. Tell Me About Yourself</span>
            <br />
            I'm pleased to talk with you today. My name is Chris Martin, I come from the United Kingdom, and currently, I
            reside in London. I graduated from University College London with a degree in Ancient World Studies. I work as a
            musician and lead vocalist for the band Coldplay, and I truly enjoy my job because it allows me to express my
            creativity and connect with people through music. Outside of work, I like practicing mindfulness and meditation,
            which helps me relax and find balance in life.
          </p>
          <p className="md:px-5 px-0">
            <span className="font-bold">2. How Would you Describe The City You Live in?</span>
            <br />I live in London, which is quite fascinating. It's a densely populated city, but at the same time, it has a
            dynamic urban life and many tourist attractions. One thing I like about this city is the diverse cultural events
            and festivals that always provide opportunities for socializing and exploration.
          </p>
        </div>
        <p className="text-center text-xl font-bold">Click "Start" for Begin</p>
        <div className="text-center pt-5">
          <p>Microphone: {listening ? "on" : "off"}</p>
          <div className="space-x-5 pb-5">
            <button className="btnPrimary" onClick={startListening}>
              Start
            </button>
            <button className="btnPrimary" onClick={SpeechRecognition.stopListening}>
              Stop
            </button>
            <button className="btnPrimary" onClick={resetTranscript}>
              Reset
            </button>
          </div>
          <h2 className="text-xl font-bold">Your Transcript Will Be Written Bellow</h2>
          <div className="border-4 rounded-xl bg-orange text-justify">
            <p className="text-xl text-brokenwhite px-5 py-5">{transcript}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpeakingQuiz;
