'use client';

import RapierAttractors from '@/components/canvas/groups/RapierAttractors';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View));

export default function page() {
  return (
    <div className='relative h-screen w-screen bg-white'>
      <View className={'absolute inset-0'} orbit>
        <Suspense>
          <RapierAttractors />
        </Suspense>
      </View>
    </div>
  );
}
