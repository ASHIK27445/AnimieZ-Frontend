import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Test() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Card 1
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.40],
    [600, 0, -500]
  );

  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.40],
    [1, 1, 0]
  );

  // Card 2
  const card2Y = useTransform(
    scrollYProgress,
    [0.20, 0.50, 0.65],
    [600, 0, -500]
  );

  const card2Opacity = useTransform(
    scrollYProgress,
    [0.20, 0.50, 0.65],
    [0, 1, 0]
  );

  // Card 3
  const card3Y = useTransform(
    scrollYProgress,
    [0.45, 0.75, 1],
    [600, 0, -500]
  );

  const card3Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.75, 1],
    [0, 1, 0]
  );

  return (
    <div className="bg-white">

      <section
        ref={sectionRef}
        className="relative h-[400vh]"
      >

        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

          {/* CARD 1 */}
          <motion.div
            style={{
              y: card1Y,
              opacity: card1Opacity,
            }}
            className="absolute w-[280px] h-[380px] rounded-3xl bg-black text-white flex items-center justify-center"
          >
            <h1 className="text-3xl font-bold">
              Card 1
            </h1>
          </motion.div>


          {/* CARD 2 */}
          <motion.div
            style={{
              y: card2Y,
              opacity: card2Opacity,
            }}
            className="absolute w-[280px] h-[380px] rounded-3xl bg-blue-600 text-white flex items-center justify-center"
          >
            <h1 className="text-3xl font-bold">
              Card 2
            </h1>
          </motion.div>


          {/* CARD 3 */}
          <motion.div
            style={{
              y: card3Y,
              opacity: card3Opacity,
            }}
            className="absolute w-[280px] h-[380px] rounded-3xl bg-green-600 text-white flex items-center justify-center"
          >
            <h1 className="text-3xl font-bold">
              Card 3
            </h1>
          </motion.div>

        </div>

      </section>

    </div>
  );
}