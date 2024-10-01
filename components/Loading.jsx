import { motion } from "framer-motion";

const loadingAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
}

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Loading = () => {
  return (
    <>
        {[...Array(6)].map((_, index) => {
            return (
                <motion.div key={index} variants={loadingAnimation} initial="initial"
                    animate="animate" exit="exit" transition={{
                    duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1,
                }} className="h-full w-full bg-secundary relative" />
            )
        })}
    </>
  )
}

export default Loading
