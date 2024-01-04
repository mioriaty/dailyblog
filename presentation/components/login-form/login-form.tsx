'use client';

import { Button } from '@/presentation/components/ui/button';
import { createBrowserClient } from '@supabase/ssr';
import { usePathname } from 'next/navigation';
import { SiGithub } from 'react-icons/si';

export default function LoginForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const pathName = usePathname();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
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
