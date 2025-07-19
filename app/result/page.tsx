'use client';

import { useState } from 'react';
import { getAdjudication } from '@/../lib/gemini';

export default function ResultPage() {
  const [speech, setSpeech] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJudge = async () => {
    setLoading(true);
    const feedback = await getAdjudication(speech);
    setResult(feedback);
    setLoading(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🧑‍⚖️ Adjudicator Feedback</h1>

      <textarea
        placeholder="Paste your full debate speech here..."
        className="w-full h-60 p-4 border rounded-lg text-gray-800"
        value={speech}
        onChange={(e) => setSpeech(e.target.value)}
      />

      <button
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
        onClick={handleJudge}
        disabled={loading}
      >
        {loading ? 'Judging...' : '🧠 Get Feedback'}
      </button>

      {result && (
        <div className="mt-6 p-4 border rounded-xl bg-gray-50 whitespace-pre-line text-gray-800">
          <h2 className="text-xl font-semibold mb-2">📝 Verdict:</h2>
          {result}
        </div>
      )}
    </main>
  );
}
