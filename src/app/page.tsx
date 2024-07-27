'use client';

import { useMutation } from 'convex/react';

import { api } from '../../convex/_generated/api';

import { Button } from '@/components/ui/button';

export default function Home() {
  const createNotification = useMutation(api.notifications.createNotification);

  return (
    <div className="w-fit">
      <h1 className="text-xl mb-4">Create notifications</h1>
      <div className="flex flex-col gap-2 w-48">
        <Button
          onClick={() =>
            createNotification({ text: 'Your video received a new like!' })
          }
        >
          New Like
        </Button>
        <Button
          onClick={() =>
            createNotification({ text: 'CodeBrew uploaded a new video!' })
          }
        >
          New Video
        </Button>
        <Button
          onClick={() =>
            createNotification({ text: 'You subscribed to Codebrew!' })
          }
        >
          Subscription
        </Button>
      </div>
    </div>
  );
}
