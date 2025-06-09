"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hi, I’m Benjamin Osondu (also known as Emmylem) — a Full Stack Software Engineer and UI/UX enthusiast focused on building high-performance, user-focused digital experiences.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          With over five years of industry experience, I specialize in developing scalable web and mobile applications using technologies like React, Next.js, TypeScript, and Node.js. I enjoy transforming complex challenges into clean, efficient, and maintainable solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Outside of coding, I actively explore emerging technologies, contribute to open-source initiatives, and mentor aspiring developers. I’m a firm believer in continuous learning and strive to stay ahead of the curve in a fast-evolving tech landscape.
        </p>
      </div>
    </motion.section>
  );
}
