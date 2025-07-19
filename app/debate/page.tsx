// app/debate/page.tsx
'use client';

import { useState } from 'react';
import RoleAssign from '../../components/RoleAssign';
import CountdownTimer from '../../components/CountdownTimer';
import StructuredOutput from '../../components/StructuredOutput';

export default function DebatePage() {
  const [stage, setStage] = useState<'role' | 'prep' | 'speech' | 'judge'>('role');
  const [role, setRole] = useState('');

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧠 Winston BP Debate Coach</h1>

      {stage === 'role' && (
        <RoleAssign onSelect={(r) => {
          setRole(r);
          setStage('prep');
        }} />
      )}

      {stage === 'prep' && (
        <CountdownTimer minutes={15} onDone={() => setStage('speech')} />
      )}

      {stage === 'speech' && (
        <StructuredOutput role={role} />
      )}
    </div>
  );
}
