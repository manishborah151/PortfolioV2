import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const variants = {
  hidden: {opacity: 0, y: 100},
  visible: {opacity: 1, y: 0},
};

const AnimatedSection = ({children}) => {
  const {ref, inView} = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
