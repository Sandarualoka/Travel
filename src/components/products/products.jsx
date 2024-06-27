import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust this value to control when the animation triggers
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className="text-black font-sans mt-10 overflow-x-hidden flex"
    >
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-lg h-auto rounded-r-[50px] md:rounded-r-[100px]">
        <p className="text-[36px] sm:text-[40px] md:text-[50px] font-bold font-sans">
          Our Packages
        </p>
        <div className="flex justify-center items-center">
          <motion.p
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="text-[14px] sm:text-[16px] md:text-[18px] mt-5 sm:mt-7 md:mt-10"
          >
            Explore Sri Lanka with our diverse tour packages, featuring cultural
            immersion, wildlife adventures, and idyllic beaches. Our
            meticulously crafted options promise an unforgettable journey,
            tailored to meet your every desire.
          </motion.p>
        </div>

        <div className="mt-5 sm:mt-7 md:mt-10 flex justify-center">
          <motion.button
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="bg-black text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
          >
            Explore more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Products;
