import { useRef, memo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/utils";
import Main from "./Main";

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{
          marginTop: "-35px",
        }}
        className="!h-[30vh] bg-background_color md:!h-[80vh]"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="pointer-events-none absolute left-[50%] top-[50%] w-full -translate-x-[50%] -translate-y-[50%] pt-[60vh] lg:pt-0">
        <Main />
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  // Use useCallback to avoid re-creating the function on every render
  useFrame(
    useCallback(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;
      }
    }, []),
  );

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <MemoizedPoint
          key={point.idx}
          position={point.position}
          color={point.color}
        />
      ))}
      {pointsOuter.map((point) => (
        <MemoizedPoint
          key={point.idx}
          position={point.position}
          color={point.color}
        />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

// Memoize the Point component to avoid unnecessary re-renders
const MemoizedPoint = memo(Point);

export default ParticleRing;
