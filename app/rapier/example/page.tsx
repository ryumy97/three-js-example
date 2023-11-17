'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View));
const RapierExample = dynamic(() => import('@/components/canvas/groups/RapierExample'));

export default function Page() {
  return (
    <div className='relative h-screen w-screen'>
      <View className={'absolute inset-0'} orbit>
        <Suspense>
          <RapierExample />
        </Suspense>
      </View>
    </div>
  );
}
