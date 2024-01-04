"use client";

import LoginForm from '@/presentation/components/login-form';
import UserProfile from '@/presentation/components/user-profile';
import { useUserStore } from '@/stores/user.store';
import Link from 'next/link';

export default function Navbar() {
  const user = useUserStore(state => state.user);

  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          Daily Blog
        </Link>
        <div className="h-[1px] w-0 group-hover:w-full transition-all bg-gray-700"></div>
      </div>

      {user ? <UserProfile /> : <LoginForm />}
    </nav>
  );
}
