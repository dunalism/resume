import React from "react";
import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-spin-slow" />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-white"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQEL7bw6G1Sj9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718219214416?e=1738800000&v=beta&t=8ng7ArRzE8ooguEc4lQDDrO71t0vcIL_H4maVRW37b8"
          alt="Hamdika Hidayat Muslim"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;
