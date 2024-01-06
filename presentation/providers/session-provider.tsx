'use client';

import { supabaseClient } from '@/infrastructure/supabase/connectSupabaseClient';
import { useUserStore } from '@/stores/user.store';
import { useEffect } from 'react';

interface SessionProviderProps {
  children: React.ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const setUser = useUserStore(state => state.setUser);

  const readUserSession = async () => {
    const { data } = await supabaseClient.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
