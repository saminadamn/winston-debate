'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { href: '/', label: '🏠 Home' },
  { href: '/prep', label: '🧠 Prep' },
  { href: '/debate', label: '🎤 Debate' },
  { href: '/result', label: '🧑‍⚖️ Result' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 p-3 shadow-sm mb-4">
      <ul className="flex gap-6 justify-center text-sm font-medium text-gray-700">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={`hover:text-blue-600 ${
                pathname === route.href ? 'text-blue-600 underline' : ''
              }`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
