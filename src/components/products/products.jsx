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
    <div ref={ref} className="text-black font-sans mt-10">
      <div className="bg-white p-4 w-[500px] h-[500px] rounded-r-[100px]">
        <p className="text-[50px]">OUR PACKAGES</p>

        <div className="flex justify-center items-center">
          <motion.p
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="text-[18px] mt-10"
          >
            Explore Sri Lanka with our diverse tour packages, featuring cultural
            immersion, wildlife adventures, and idyllic beaches. Our
            meticulously crafted options promise an unforgettable journey,
            tailored to meet your every desire.
          </motion.p>
        </div>

        <div className="mt-5">
          <motion.button
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="bg-black text-white rounded-lg p-4"
          >
            Explore more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Products;
