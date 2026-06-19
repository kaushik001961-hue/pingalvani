"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between px-6 py-4 shadow">
      <h1 className="font-bold">Poet</h1>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/poems">Poems</Link>
        <Link href="/achievements">Achievements</Link>
      </div>

      <div className="space-x-2">
        <Link href="/en">EN</Link>
        <Link href="/hi">HI</Link>
        <Link href="/gu">GU</Link>
      </div>
    </nav>
  );
}
