'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/presentation/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/presentation/components/ui/form';
import { Input } from '@/presentation/components/ui/input';
import { Switch } from '@/presentation/components/ui/switch';
import { toast } from '@/presentation/components/ui/use-toast';
import { cn } from '@/presentation/lib/utils';
import { EyeOpenIcon, Pencil1Icon, RocketIcon, StarIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { BsSafe } from 'react-icons/bs';

const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'tITLE must be at least 2 characters.',
  }),
  image_url: z.string().url({
    message: 'Image URL must be a valid URL.',
  }),
  content: z.string().min(2, {
    message: 'Content must be at least 2 characters.',
  }),
  is_published: z.boolean(),
  is_premium: z.boolean(),
});

export default function CreateBlogPage() {
  const [preview, setPreview] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      content: '',
      image_url: '',
      is_premium: false,
      is_published: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full border border-gray-300 rounded-md space-y-6 p-4">
        <div className="pt-2 pb-5 flex items-center flex-wrap gap-2 justify-between border-b">
          <div className="flex items-center gap-5">
            <span
              role="button"
              tabIndex={0}
              className="flex items-center gap-1 border border-gray-300 p-2 select-none rounded-md"
              onClick={() => setPreview(!preview)}
            >
              {preview ? (
                <>
                  <Pencil1Icon />
                  Edit
                </>
              ) : (
                <>
                  <EyeOpenIcon />
                  Preview
                </>
              )}
            </span>

            <FormField
              control={form.control}
              name="is_premium"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-1 p-2 rounded-md border border-gray-300">
                      <StarIcon />
                      <span>Premium</span>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_published"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-1 p-2 rounded-md border border-gray-300">
                      <RocketIcon />
                      <span>Publish</span>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button className="flex items-center gap-2 justify-between">
            <BsSafe />
            Save
          </Button>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <div
                  className={cn(
                    'w-full break-words gap-2 flex',
                    preview ? 'divide-x-0' : 'divide-x border-gray-300',
                  )}
                >
                  <Input
                    {...field}
                    className={cn(
                      'border-gray-300 text-lg font-medium leading-relaxed outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-opacity-0',
                    )}
                  />
                  <div>
                    <h1>{form.getValues().title}</h1>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="bg-blue-800 border-blue-800" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
