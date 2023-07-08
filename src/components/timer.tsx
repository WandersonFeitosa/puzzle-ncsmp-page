import { useEffect, useState } from "react";

interface TimerProps {
  date: Date;
  endTimer: Function;
}

export function Timer({ date, endTimer }: TimerProps) {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = date.getTime();

    function updateTimer() {
      const timeRemaining = endDate - new Date().getTime();

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimer({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        endTimer();
      }
    }
    updateTimer();
    const countdownInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="timer">
      {timer.days} : {timer.hours} : {timer.minutes} : {timer.seconds}
    </div>
  );
}
