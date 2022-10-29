import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li>
          <Link href="/">Home</Link>
        </li>
      </nav>
      {children}
    </div>
  );
}
