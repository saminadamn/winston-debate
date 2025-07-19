// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Winston 🎙️</h1>
      <p className="mb-8 text-lg text-gray-700">
        Your AI Debate Coach for British Parliamentary Debating
      </p>

      <div className="space-y-4">
        <Link
          href="/prep"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Start Preparation
        </Link>
        <Link
          href="/debate"
          className="block px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Start Debate
        </Link>
        <Link
          href="/result"
          className="block px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition"
        >
          View Adjudication
        </Link>
      </div>
    </main>
  );
}
