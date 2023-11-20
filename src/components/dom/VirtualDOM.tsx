import { useControls } from 'leva';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

let loaded = false;

const VirtualDOM: React.FC = () => {
  const [{ example }, set] = useControls(() => ({
    example: {
      options: {
        home: '/',
        'cannon instances': '/cannon/instances',
        rapier: '/rapier/example',
        'rapier instances': '/rapier/instances',
        'rapier collisions': '/rapier/collisions',
      },
    },
  }));

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!loaded) {
      set({
        example: pathName,
      });
      loaded = true;
    }
    if (pathName !== example) {
      router.push(example);
    }
  }, [example, pathName, router, set]);

  return null;
};

export default VirtualDOM;
