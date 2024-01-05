import { Button } from '@/presentation/components/ui/button';
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';

const BlogActions = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap md:flex-row">
      <Button size={'icon'} variant={'outline'} className="flex items-center gap-2">
        <EyeOpenIcon />
      </Button>

      <Button size={'icon'} variant={'outline'} className="flex items-center gap-2 border-red-500">
        <TrashIcon className="text-red-500" />
      </Button>

      <Button size={'icon'} variant={'outline'} className="flex items-center gap-2 border-sky-700">
        <Pencil1Icon className="text-sky-700" />
      </Button>
    </div>
  );
};

export default BlogActions;
