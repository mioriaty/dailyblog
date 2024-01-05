import BlogActions from '@/app/dashboard/components/blog-actions';
import { Switch } from '@/presentation/components/ui/switch';
import { cn } from '@/presentation/lib/utils';

export default function BlogTable() {
  return (
    <div className='overflow-x-auto'>
      <div className={cn('border rounded-md w-[800px]', 'md:w-full')}>
        <div className="grid grid-cols-5 p-5 text-gray-600 border-b bg-gray-100">
          <div className="col-span-2">Title</div>
          <div>Premium</div>
          <div>Publish</div>
          <div>Actions</div>
        </div>
        <div className="grid grid-cols-5 p-5 items-center">
          <div className="col-span-2">Blog Title</div>
          <Switch checked={false} />
          <Switch checked={true} />

          <BlogActions />
        </div>
      </div>
    </div>
  );
}
