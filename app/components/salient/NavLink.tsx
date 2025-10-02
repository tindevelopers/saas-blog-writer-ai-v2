import Link from 'next/link';

import NextLink from 'next/link';
import type { ReactNode } from 'react';

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <NextLink
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </NextLink>
  );
}
