import { useEffect, useState } from "react";

import { Timer } from "../components/timer";
import { API_URL } from "../App";
import discordLogo from "../assets/img/discord-logo.png";

export function P010() {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState<Date | null>(null);
  const [isTimerEnded, setIsTimerEnded] = useState(false);

  function handleTimerEnd() {
    setIsTimerEnded(true);
  }

  async function getDate() {
    const response = await fetch(`${API_URL}/getDate`);
    const data = await response.json();
    return new Date(data.completionDate);
  }

  useEffect(() => {
    getDate().then((responseDate) => {
      setDate(responseDate);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="timer-wrapper"></div>;
  }

  const dateFormated = new Date(date || "");

  if (isTimerEnded) {
    return (
      <div className="timer-wrapper p010">
        <h1>ENCERRAMOS A PRIMEIRA ETAPA</h1>
        <h1>ELES SERÃO DESCARTADOS</h1>
        <h1><a href="" target="_blank">
          <img src={discordLogo} alt="" />
        </a></h1>
        
      </div>
    );
  }
  return (
    <div className="timer-wrapper">
      <Timer date={dateFormated} endTimer={handleTimerEnd} />
    </div>
  );
}
