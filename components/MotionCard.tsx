'use client';

import { useState } from 'react';
import { motions } from '../data/motion';

export default function MotionCard({ onSelect }: { onSelect: (motion: string) => void }) {
  const [currentMotion, setCurrentMotion] = useState('');

  // Function to pick a truly random motion
  const getRandomMotion = () => {
    const randomIndex = Math.floor(Math.random() * motions.length);
    return motions[randomIndex];
  };

  const handleRoll = () => {
    let newMotion = getRandomMotion();

    // Avoid repeating same motion
    while (newMotion === currentMotion) {
      newMotion = getRandomMotion();
    }

    setCurrentMotion(newMotion);
  };

  return (
    <div className="space-y-4 border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">🎯 Debate Motion</h2>

      {currentMotion ? (
        <p className="text-lg italic">“{currentMotion}”</p>
      ) : (
        <p className="text-gray-500">Click below to reveal a motion.</p>
      )}

      <div className="space-x-4">
        <button
          onClick={handleRoll}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          🎲 New Motion
        </button>
        {currentMotion && (
          <button
            onClick={() => onSelect(currentMotion)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            ✅ Lock Motion
          </button>
        )}
      </div>
    </div>
  );
}
