'use client';

import dynamic from 'next/dynamic';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View));

export default function Page() {
  return (
    <div className='relative w-screen h-screen'>
      <View className={'absolute inset-0'}></View>
    </div>
  );
}
