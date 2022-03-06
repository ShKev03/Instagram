import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
    return () => (
        <>
            <OriginalComponent />
            <motion.div
                className="absolute z-50 top-0 left-0 h-screen w-full bg-black origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute z-50 top-0 left-0 h-screen w-full bg-black origin-right"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </>
    );
};

export default withTransition;
