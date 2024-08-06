'use client';

import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense';
import React from 'react';

import { Editor } from './editor/Editor';
import Header from './Header';

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        <Header>
          <div className="flex w-fit items-center justify-center gap-2">
            <p className="document-title">Share</p>
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Header>
        <Editor />
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
