import getUserMedia from "get-user-media-promise";
import MicrophoneStream from "microphone-stream";
import PitchAnalyzer from "../pitch-js";
import WavDecoder from "wav-decoder";
import Pitchfinder from "pitchfinder";
import { Store } from "../../store";
import { changeCurrentNote } from "../../Actions";

const A = 440;
const SEMITONE = 69;
const noteStrings = [
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "A♯",
  "B"
];

const getNote = freq => {
  const note = 12 * (Math.log(freq / A) / Math.log(2));
  return Math.round(note) + SEMITONE;
};

const getStandardFrequency = note => {
  return A * Math.pow(2, (note - SEMITONE) / 12);
};
const getCents = (frequency, note) => {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2)
  );
};
export default getUserMedia({ video: false, audio: true }).then(stream => {
  const micStream = new MicrophoneStream(stream, {
    bufferSize: 2048 * 2
  });

  micStream.on("data", chunk => {
    // console.log(MicrophoneStream.toRaw(chunk));

    // const pitchFinder = new PitchAnalyzer(); // all pitch analysis functionality stems from this object
    // pitchFinder.input(MicrophoneStream.toRaw(chunk)); // send raw data audio to pitchFinder
    // pitchFinder.process(); // it takes a split-second to turn it into actionable data
    // const tone = pitchFinder.findTone(); // try find one tone
    const detectPitch = new Pitchfinder.AMDF({
      maxFrequency: 800,
      minFrequency: 50,
      ratio: 10
    });
    const pitch = detectPitch(MicrophoneStream.toRaw(chunk));
    if (pitch) {
      console.log(pitch);
      const freq = pitch + 7;
      const note = getNote(freq);
      const cents = getCents(freq, note);
      const noteName = noteStrings[note % 12];
      const octave = parseInt(note / 12) - 1;

      Store.dispatch(changeCurrentNote({ freq, cents, noteName, octave }));
      //console.log("Note: ", note.note.toString(), freq);
    }
  });
});
