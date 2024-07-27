import Link from 'next/link';

import { Notifications } from '@/components/notifications';

export function Header() {
  return (
    <header className="h-[rem]">
      <nav className="flex justify-between align-middle py-4 w-full">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold select-none italic">cdbrw</h1>
          </Link>
        </div>
        <div>
          <Notifications />
        </div>
      </nav>
    </header>
  );
}
