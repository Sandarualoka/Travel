import { motion } from "framer-motion";
import React from "react";
import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.jpg";
import Card4 from "../../assets/card4.jpg";
import Card5 from "../../assets/card5.jpg";
import Card6 from "../../assets/card6.jpg";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const TopRated = () => {
  return (
    <div className="ml-4 sm:ml-8 md:ml-[10%] overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-10"
      >
        {[Card1, Card2, Card3, Card4, Card5, Card6].map((card, index) => (
          <motion.div
            key={index}
            variants={gridSquareVariants}
            className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center w-full sm:w-80 h-80"
          >
            <img
              src={card}
              alt={`card${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default TopRated;
