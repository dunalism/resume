import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      {/* Animated Rings */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 border-4 border-primary rounded-full"
      />

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-0 border-2 border-accent rounded-full animate-spin-slow"
      />

      {/* Profile Image with Hover Effect */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-white"
      >
        <img
          src="/image.png"
          alt="Hamdika Hidayat Muslim"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ProfileImage;
