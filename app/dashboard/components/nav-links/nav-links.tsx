'use client';

import { cn } from '@/presentation/lib/utils';
import { PersonIcon, ReaderIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavItem {
  href: string;
  text: string;
  Icon: ReactNode;
}

const navLinks: NavItem[] = [
  {
    href: '/dashboard',
    text: 'Dashboard',
    Icon: <ReaderIcon />,
  },
  {
    href: '/dashboard/user',
    text: 'User',
    Icon: <PersonIcon />,
  },
];

function NavLinks() {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-5 border-b pb-2">
      {navLinks.map(link => {
        return (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              'flex items-center gap-[2px] hover:underline transition-all',
              pathName === link.href && 'text-blue-500 underline',
            )}
          >
            {link.Icon}
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
