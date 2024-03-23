"use client";
import Countdown from "react-countdown";

const endingDate = new Date("2024-03-24");

const CountDown = () => {
  return <Countdown className="text-yellow-500 font-bold text-5xl" date={endingDate} />;
};

export default CountDown;
