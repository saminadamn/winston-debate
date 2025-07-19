'use client';

import { useEffect, useState, useRef } from 'react';

export default function CountdownTimer({
  minutes = 15,
  onDone,
}: {
  minutes?: number;
  onDone: () => void;
}) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            onDone();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current!);
  }, [isRunning, onDone]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60)
      .toString()
      .padStart(2, '0')}`;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">⏱️ Prep Time</h2>
      <p className="text-4xl font-mono">{formatTime(secondsLeft)}</p>

      <div className="space-x-4">
        {isRunning ? (
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={() => setIsRunning(false)}
          >
            ⏸️ Pause
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsRunning(true)}
          >
            ▶️ Resume
          </button>
        )}
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => {
            clearInterval(timerRef.current!);
            onDone();
          }}
        >
          ⏹️ End Early
        </button>
      </div>
    </div>
  );
}
