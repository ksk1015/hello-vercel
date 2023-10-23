'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function HeaderNavigation() {
  const pathname = usePathname()
  const links = [
    { href: '/', title: 'Home' },
    { href: '/hello', title: 'Hello' },
    { href: '/hello/vercel', title: 'Vercel' },
  ]
  return (
    <div className="sticky z-20 top-0 p-2 border-b border-b-gray-200 bg-white">
      <nav className="flex justify-center gap-4">
        {links.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            aria-current={item.href === pathname ? 'page' : undefined}
            className="text-blue-700 underline aria-[current]:text-black aria-[current]:no-underline"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="mt-2 text-center text-gray-500 text-sm">{pathname}</div>
    </div>
  )
}
