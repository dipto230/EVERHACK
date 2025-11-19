import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeContactPreview = () => {
  return (
    <div className="w-full py-16 bg-[#020617] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Have Questions?
      </motion.h2>

      <p className="text-gray-400 mb-8">
        Reach out to us for collaborations, help, or general queries.
      </p>

      <Link to="/contact">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_20px_#00ffff] transition-all">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default HomeContactPreview;
