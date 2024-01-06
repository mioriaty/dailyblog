'use client';

import { supabaseClient } from '@/infrastructure/supabase/connectSupabaseClient';
import { Button } from '@/presentation/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/presentation/components/ui/popover';
import { useUserStore } from '@/stores/user.store';
import { DashboardIcon, LockOpen1Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const UserProfile = () => {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);

  const isAdmin = user?.user_metadata.role === 'admin';

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    setUser(undefined);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          className="rounded-full"
          src={user?.user_metadata.avatar_url ?? ''}
          alt={user?.user_metadata.user_name ?? ''}
          width={40}
          height={40}
        />
      </PopoverTrigger>
      <PopoverContent className="p-2 divide-y space-y-2">
        <div className="px-4 text-sm">
          <p>{user?.user_metadata.user_name}</p>
          <p className="text-gray-500">{user?.user_metadata.email}</p>
        </div>

        {isAdmin && (
          <Link href={'/dashboard'} className="block">
            <Button variant={'ghost'} className="w-full flex items-center justify-between">
              Dashboard
              <DashboardIcon />
            </Button>
          </Link>
        )}

        <Button variant={'ghost'} className="w-full  flex items-center justify-between" onClick={handleLogout}>
          Logout
          <LockOpen1Icon />
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
