"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center py-10 bg-white h-full pt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
        VN REGISTRATIONS CLOSE SOON VN
      </h2>
      <p className="text-blue-900 mb-6">
        Take your Vietnamese to the next level!
      </p>

      <div className="flex justify-center space-x-8 text-red-700 text-4xl font-bold">
        <div className="flex flex-col items-center">
          {timeLeft.days}
          <span className="text-base text-black">DAYS</span>
        </div>
        <div className="flex flex-col items-center">
          {timeLeft.hours}
          <span className="text-base text-black">HOURS</span>
        </div>
        <div className="flex flex-col items-center">
          {timeLeft.minutes}
          <span className="text-base text-black">MINS</span>
        </div>
        <div className="flex flex-col items-center">
          {timeLeft.seconds}
          <span className="text-base text-black">SECS</span>
        </div>
      </div>
      <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition">
        Sign Up Now
      </button>
    </div>
  );
}
