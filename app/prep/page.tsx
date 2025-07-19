'use client';

import { useState } from 'react';
import CountdownTimer from '@/../components/CountdownTimer';
import PrepInput from '@/../components/PrepInput';
import { useRouter } from 'next/navigation';

export default function PrepPage() {
  const [structured, setStructured] = useState<string[]>([]);
  const router = useRouter();

  const handleStructure = (rawText: string) => {
    const points = rawText
      .split('\n')
      .filter(Boolean)
      .map((line) => `• ${line.trim()}`);
    setStructured(points);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Prep Time (15 min)</h1>

      <div className="mb-4">
        <CountdownTimer minutes={15} />
      </div>

      <div className="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-900 shadow-sm">
        <strong>Motion:</strong> This House would criminalize climate change denial in public discourse.
      </div>

      <PrepInput onStructure={handleStructure} />

      {structured.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">🗂️ Structured Points:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {structured.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        onClick={() => router.push('/debate')}
      >
        ➡️ Start Debate
      </button>
    </main>
  );
}
