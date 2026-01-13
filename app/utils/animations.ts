export const formatPrice = (price: number): string => {
  return price.toFixed(2).replace('.', ',');
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

export const lineAnimation = {
  initial: { x: "-100%" },
  whileInView: { x: "0%" },
  viewport: { once: false },
  transition: { duration: 3, ease: "linear" as const, repeat: Infinity, repeatDelay: 1 }
};
