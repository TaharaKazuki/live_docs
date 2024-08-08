import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

import CollaborativeRoom from '@/components/CollaborativeRoom';

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom />
    </main>
  );
};

export default Document;
