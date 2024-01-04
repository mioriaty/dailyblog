import { Button } from '@/presentation/components/ui/button';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          Daily Blog
        </Link>
        <div className="h-[1px] w-0 group-hover:w-full transition-all bg-gray-700"></div>
      </div>

      <Button variant="default" className='flex items-center gap-2'>
        <SiGithub />
        Login
      </Button>
    </nav>
  );
}
