import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.section className="min-h-[90vh] flex relative isolate justify-center flex-col">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-10 -z-10 hidden lg:flex transform-gpu justify-center overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={0}
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <motion.h1
        initial={{
          opacity: 0,
          translateY: "-20px",
        }}
        animate={{
          opacity: 1,
          translateY: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="text-6xl text-white lg:text-8xl font-bold"
      >
        Dom Grad.
      </motion.h1>
      <motion.h2
        initial={{
          opacity: 0,
          translateY: "-20px",
        }}
        animate={{
          opacity: 1,
          translateY: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="mt-2 text-3xl lg:text-5xl text-app-accent"
      >
        I like to build cool shit for the web that makes a difference to people.
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
          translateY: "-20px",
        }}
        animate={{
          opacity: 1,
          translateY: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="mt-2 text-app-accent max-w-[500px] md:max-w-[650px]"
      ></motion.p>
    </motion.section>
  );
}
