import { getRandomItem } from '@/helpers/global';
import { useThree } from '@react-three/fiber';
import { Physics, RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import Common from '../environments/Common';
import Plane from '../meshes/Plane';
import TorusKnot from '../meshes/TorusKnot';

const RapierCollisions: React.FC = () => {
  const { debug } = useControls({
    debug: false,
  });

  const three = useThree();

  const ballRef = useRef<RapierRigidBody>(null);
  const cuboidRef = useRef<RapierRigidBody>(null);
  const hullRef = useRef<RapierRigidBody>(null);
  const trimeshRef = useRef<RapierRigidBody>(null);

  const [selectedBody, setSelectedBody] = useState<RapierRigidBody>(null);

  const pointerState = useMemo<{
    intersection: THREE.Intersection;
    ray: THREE.Ray;
    prevDirection: THREE.Vector3;
    axis: THREE.Vector3;
    mouse: THREE.Vector2;
    rotation: THREE.Vector3;
  }>(
    () => ({
      intersection: null,
      ray: null,
      prevDirection: null,
      axis: new THREE.Vector3(0, -1, 0),
      mouse: new THREE.Vector2(),
      rotation: new THREE.Vector3(),
    }),
    [],
  );

  useEffect(() => {
    three.camera.lookAt(0, 0, 0);
  }, [three.camera]);

  useEffect(() => {
    if (selectedBody) {
      const onPointerMove = (event: MouseEvent) => {
        // console.log('moving', selectedBody);

        pointerState.mouse.set(
          (event.clientX / window.innerWidth) * 2 - 1,
          (event.clientY / window.innerHeight) * 2 - 1,
        );

        three.raycaster.setFromCamera(pointerState.mouse, three.camera);
        const newDirection = three.raycaster.ray.direction;
        const oldDirection = pointerState.prevDirection ? pointerState.prevDirection.clone() : newDirection;

        const axis = newDirection.clone().sub(oldDirection);

        pointerState.axis = axis.clone();
        pointerState.prevDirection = newDirection.clone();

        const position = vec3(selectedBody.translation());
        const origin = pointerState.ray.origin.clone();

        pointerState.rotation.setX(pointerState.axis.y);
        pointerState.rotation.setY(pointerState.axis.x);
        pointerState.rotation.setZ(pointerState.axis.z);

        position.sub(origin);
        position.applyAxisAngle(pointerState.rotation, 1);
        position.add(origin);

        selectedBody.setTranslation(position, true);
        selectedBody.setLinvel({ x: 0, y: 0, z: 0 }, true);
        selectedBody.resetForces(true);
      };

      const onPointerUp = () => {
        selectedBody.resetForces(true);

        setSelectedBody(null);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);

      return () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };
    }
  }, [pointerState.axis, pointerState, selectedBody, three.camera, three.raycaster]);

  return (
    <>
      <Suspense>
        <Physics debug={debug}>
          <RigidBody ref={ballRef} colliders='ball' position={[-3, 5, 3]} restitution={1}>
            <TorusKnot
              onPointerDown={(event) => {
                (event.object as THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>).material.color.set(
                  getRandomItem(['#6363F3', '#52F2CC', '#DFF793']),
                );

                pointerState.intersection = event.intersections.at(0);
                pointerState.ray = event.ray;
                pointerState.prevDirection = null;

                setSelectedBody(ballRef.current);
              }}
            />
          </RigidBody>
          <RigidBody ref={cuboidRef} colliders='cuboid' position={[3, 5, -3]}>
            <TorusKnot
              onPointerDown={(event) => {
                (event.object as THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>).material.color.set(
                  getRandomItem(['#6363F3', '#52F2CC', '#DFF793']),
                );

                pointerState.intersection = event.intersections.at(0);
                pointerState.ray = event.ray;
                pointerState.prevDirection = null;

                setSelectedBody(cuboidRef.current);
              }}
            />
          </RigidBody>
          <RigidBody ref={hullRef} colliders='hull' position={[-3, 5, -3]}>
            <TorusKnot
              onPointerDown={(event) => {
                (event.object as THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>).material.color.set(
                  getRandomItem(['#6363F3', '#52F2CC', '#DFF793']),
                );

                pointerState.intersection = event.intersections.at(0);
                pointerState.ray = event.ray;
                pointerState.prevDirection = null;

                setSelectedBody(hullRef.current);
              }}
            />
          </RigidBody>
          <RigidBody ref={trimeshRef} colliders='trimesh' position={[3, 5, 3]}>
            <TorusKnot
              onPointerDown={(event) => {
                (event.object as THREE.Mesh<THREE.TorusKnotGeometry, THREE.MeshStandardMaterial>).material.color.set(
                  getRandomItem(['#6363F3', '#52F2CC', '#DFF793']),
                );

                pointerState.intersection = event.intersections.at(0);
                pointerState.ray = event.ray;
                pointerState.prevDirection = null;

                setSelectedBody(trimeshRef.current);
              }}
            />
          </RigidBody>
          <RigidBody>
            <Plane />
          </RigidBody>
        </Physics>
      </Suspense>
      <Common cameraPosition={new THREE.Vector3(0, 15, -25)} />
    </>
  );
};

export default RapierCollisions;
