'use client';

import { supabaseClient } from '@/infrastructure/supabase/connectSupabaseClient';
import { useUserStore } from '@/stores/user.store';
import { useEffect } from 'react';

export default function SessionProvider() {
  const setUser = useUserStore(state => state.setUser);

  const readUserSession = async () => {
    const { data } = await supabaseClient.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
