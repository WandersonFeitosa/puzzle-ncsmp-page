import { Input } from "../components/input";
import { Password } from "../components/passwordDisplay";
import { Timer } from "../components/timer";
import { useState } from "react";

export function P005() {
  const date = new Date("2023-07-05 18:00:00");

  const [isTimerEnded, setIsTimerEnded] = useState(false);

  function handleTimerEnd() {
    setIsTimerEnded(true);
  }

  if (isTimerEnded) {
    return (
      <div className="allign-center p005">
        <Password password="sculk" />
        <h1>O que ele está estudando ?</h1>
        <h2>1176 -48 -1778</h2>
        <Input />
      </div>
    );
  }

  return (
    <div className="allign-center p005">
      <h1>O que ele está estudando ?</h1>
      <Timer date={date} endTimer={handleTimerEnd} />
    </div>
  );
}
