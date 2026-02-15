import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Center,
  Bounds,
  Environment,
} from "@react-three/drei";

import * as THREE from "three";

/* ================= PAGE TRANSITION ================= */
const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

/* ================= MODEL ================= */
function Model() {
  const { scene } = useGLTF("/models/tshirt.glb");

  scene.traverse((child) => {
    if (child.isMesh && child.material) {

      // preserve original color
      child.material.toneMapped = false;

      // improve texture detail visibility
      child.material.roughness = 0.65;
      child.material.metalness = 0.05;

      // improve sharpness
      if (child.material.map) {
        child.material.map.anisotropy = 16;
      }

      child.material.needsUpdate = true;
    }
  });

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

/* ================= MAIN ================= */
export default function OfficialAttire() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-slate-950 text-white min-h-screen px-4 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <Reveal>
          <h1 className="text-center text-4xl md:text-5xl font-black mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              OFFICIAL ATTIRE
            </span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <Reveal>
            <div className="space-y-6">

              {/* PREMIUM GRADIENT CARD */}
<motion.div
  whileHover={{ y: -4 }}
  className="
    relative
    h-[420px]
    rounded-3xl
    overflow-hidden
    border border-cyan-400/30

    /* UNIQUE PREMIUM BACKGROUND */
    bg-gradient-to-br
    from-[#ecfeff]
    via-[#e0f2fe]
    to-[#cffafe]

    shadow-[0_0_60px_rgba(6,182,212,0.25)]
  "
>

  {/* glow layer */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.25),transparent_70%)] pointer-events-none" />

  <Canvas
    camera={{ fov: 45, position: [0, 0, 6] }}
    shadows
    gl={{
      antialias: true,
      toneMapping: THREE.NoToneMapping,
      outputColorSpace: THREE.SRGBColorSpace,
      alpha: true, // IMPORTANT
    }}
  >

    {/* REMOVE white background line completely */}

    {/* balanced lighting */}
    <ambientLight intensity={0.8} />

    <directionalLight
      position={[5, 6, 5]}
      intensity={1.2}
      castShadow
    />

    <directionalLight
      position={[-5, 3, -5]}
      intensity={0.6}
      color="#22d3ee"
    />

    {/* soft environment */}
    <Environment preset="city" intensity={0.25} />

    <Bounds fit clip observe margin={1.2}>
      <Model />
    </Bounds>

    <ContactShadows
      position={[0, -1.5, 0]}
      opacity={0.35}
      scale={10}
      blur={2}
    />

    <OrbitControls
      autoRotate
      autoRotateSpeed={1}
      enableZoom={false}
      enablePan={false}
    />

  </Canvas>
  <p className="absolute bottom-3 w-full text-center text-xs text-slate-600">
    Drag to rotate
  </p>

</motion.div>

              {/* BUTTON */}
              <Magnetic>
                <a
                  href="#"
                  className="block text-center bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-4 rounded-xl shadow-lg"
                >
                  REGISTER & ORDER NOW →
                </a>
              </Magnetic>

            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal>
            <div className="space-y-8">

              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-cyan-400 font-bold mb-4">
                  PRODUCT DETAILS
                </h3>

                <ul className="text-slate-400 space-y-2 text-sm">
                  <li>• Official Reflexons’26 T-Shirt</li>
                  <li>• Premium fabric & print</li>
                  <li>• Unisex fit</li>
                  <li>• Limited stock available</li>
                  <li>• Payment details shared after registration</li>
                </ul>

              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-cyan-400 font-bold mb-4">
                  IMPORTANT DATES
                </h3>

                <p className="text-cyan-400 font-semibold">
                  Order by Feb 20
                </p>

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </motion.div>
  );
}
