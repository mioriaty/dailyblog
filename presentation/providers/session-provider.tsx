'use client';

import { useUserStore } from '@/stores/user.store';
import { createBrowserClient } from '@supabase/ssr';
import { useEffect } from 'react';

interface SessionProviderProps {
  children: React.ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const setUser = useUserStore(state => state.setUser);

  const readUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
