import { Popover, PopoverContent, PopoverTrigger } from '@/presentation/components/ui/popover';
import { useUserStore } from '@/stores/user.store';
import Image from 'next/image';

const UserProfile = () => {
  const user = useUserStore(state => state.user);

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          className="rounded-full"
          src={user?.user_metadata.avatar_url ?? ''}
          alt={user?.user_metadata.user_name ?? ''}
          width={50}
          height={50}
        />
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <p>{user?.user_metadata.user_name}</p>
          <p>{user?.user_metadata.email}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
