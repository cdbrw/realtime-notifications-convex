'use client';

import { Bell, CheckIcon } from 'lucide-react';
import { useMutation, useQuery } from 'convex/react';

import { api } from '../../convex/_generated/api';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { timeAgo } from '@/lib/utils';

export function Notifications() {
  const notifications = useQuery(api.notifications.getNotifications);
  const markAsRead = useMutation(api.notifications.markNotificationAsRead);
  const markAllAsRead = useMutation(
    api.notifications.markAllNotificationsAsRead
  );

  const hasNewNotifications = !!notifications?.length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2 relative">
          <Bell width={16} />
          {hasNewNotifications && (
            <div className="absolute -top-0 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {notifications.length}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px]">
        <div className="flex p-4">
          <h3 className="text-lg font-medium">Notifications</h3>
        </div>
        <Separator />
        <ScrollArea className="max-h-[400px]">
          <div className="space-y-4 p-4">
            {!hasNewNotifications && <p>You have no unread notifications.</p>}

            {hasNewNotifications &&
              notifications?.map(({ _id, text, _creationTime }) => (
                <div
                  key={_id}
                  className="grid grid-cols-[1fr_auto] items-start gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{text}</p>
                    <p className="text-xs text-muted-foreground">
                      {timeAgo(_creationTime)}
                    </p>
                  </div>
                  <Button
                    onClick={() => markAsRead({ id: _id })}
                    variant="ghost"
                    size="icon"
                  >
                    <CheckIcon className="h-5 w-5" />
                  </Button>
                </div>
              ))}
          </div>
        </ScrollArea>
        {hasNewNotifications && (
          <>
            <Separator />
            <div className="p-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => markAllAsRead()}
              >
                Mark all as read
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
