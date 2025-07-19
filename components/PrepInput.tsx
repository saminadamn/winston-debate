'use client';

import { useState } from 'react';

interface PrepInputProps {
  onStructure: (input: string) => void;
}

export default function PrepInput({ onStructure }: PrepInputProps) {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col">
      <textarea
        className="border rounded-lg p-4 mb-4 h-40 text-gray-800"
        placeholder="Type your ideas freely here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => onStructure(input)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
      >
        🧩 Structure My Ideas
      </button>
    </div>
  );
}
