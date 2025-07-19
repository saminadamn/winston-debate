'use client';

import { useState } from 'react';

export default function StructuredOutput({ role }: { role: string }) {
  const [statements, setStatements] = useState(['']);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (val: string, i: number) => {
    const newStmts = [...statements];
    newStmts[i] = val;
    setStatements(newStmts);
  };

  const handleAdd = () => {
    setStatements([...statements, '']);
    setActiveIndex(statements.length);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">🧱 Structure Your Speech</h2>
      <p className="text-sm text-gray-600 mb-2">Role: <strong>{role}</strong></p>

      {statements.map((stmt, i) => (
        <div key={i} className="space-y-1">
          <label className="text-sm font-medium">Point {i + 1} (SEXC)</label>
          <textarea
            value={stmt}
            onChange={(e) => handleChange(e.target.value, i)}
            rows={3}
            className="w-full border rounded p-2"
            placeholder="Statement, Explanation, Example, Conclusion..."
          />
        </div>
      ))}

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        ➕ Add Another Point
      </button>
    </div>
  );
}
