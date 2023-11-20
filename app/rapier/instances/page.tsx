'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View));
const RapierInstances = dynamic(() => import('@/components/canvas/groups/RapierInstances'));

export default function Page() {
  return (
    <div className='relative h-screen w-screen'>
      <View className={'absolute inset-0'} orbit>
        <Suspense>
          <RapierInstances />
        </Suspense>
      </View>
    </div>
  );
}
