'use client';

import { useState } from 'react';

const BP_ROLES = [
  'Opening Government - Prime Minister',
  'Opening Opposition - Leader of Opposition',
  'Closing Government - Member of Government',
  'Closing Opposition - Member of Opposition',
];

export default function RoleAssign({ onSelect }: { onSelect: (role: string) => void }) {
  const [selectedRole, setSelectedRole] = useState('');

  const handleGenerate = () => {
    const role = BP_ROLES[Math.floor(Math.random() * BP_ROLES.length)];
    setSelectedRole(role);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">🎭 Assign a Role</h2>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        🎲 Generate Random Role
      </button>

      {selectedRole && (
        <div className="space-y-2">
          <p className="text-lg font-medium">Your Role: <span className="text-indigo-700">{selectedRole}</span></p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => onSelect(selectedRole)}
          >
            ✅ Continue with this Role
          </button>
        </div>
      )}
    </div>
  );
}
