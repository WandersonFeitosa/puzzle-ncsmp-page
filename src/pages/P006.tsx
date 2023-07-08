import { Input } from "../components/input";
import audio1 from "../assets/video/424131.mp3";
import { useEffect } from "react";
import { Password } from "../components/passwordDisplay";

export function P006() {
  useEffect(() => {
    const audioEl = document.getElementsByClassName(
      "audio-element"
    )[0] as HTMLAudioElement;
    audioEl.play();
    
    audioEl.addEventListener("ended", () => {
      audioEl.currentTime = 0;
      audioEl.play();
    });
  }, []);

  return (
    <div className="allign-center p006">
      <Password password="liberte" />
      <audio data-spaces="424131" className="audio-element" controls>
        <source src={audio1} type="audio/mp3" />
      </audio>
      <Input />
    </div>
  );
}
