'use client';

import { Button } from '@/presentation/components/ui/button';
import { supabaseClient } from '@/presentation/utils/createSupabaseClient';
import { usePathname } from 'next/navigation';
import { SiGithub } from 'react-icons/si';

export default function LoginForm() {
  const pathName = usePathname();

  const handleLogin = () => {
    supabaseClient.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: location.origin + '/auth/callback?next=' + pathName,
      },
    });
  };

  return (
    <Button variant="default" className="flex items-center gap-2" onClick={handleLogin}>
      <SiGithub />
      Login
    </Button>
  );
}
