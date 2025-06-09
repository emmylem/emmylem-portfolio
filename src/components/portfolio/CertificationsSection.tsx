"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; // <-- IMPORT REACT
import SectionHeader from "./SectionHeader";

type Certificate = {
  title: string;
  provider: string;
  platform: string;
  issued: string;
  credentialId: string;
  credentialLink: string;
  skills: string[];
  providerIcon: React.ReactNode; // <-- CHANGE JSX.Element to React.ReactNode
  color: string;
  certificatePreview: string;
};

// --- Custom ALX Logo Component ---
const AlxLogo = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-inner">
    <span className="text-2xl font-bold text-gray-800">A</span>
  </div>
);

const certifications: Certificate[] = [
  {
    title: "Software Engineering (12-Month Program)",
    provider: "ALX Africa",
    platform: "ALX",
    issued: "May 2024",
    credentialId: "ALX-SE-XXXXXXXX",
    credentialLink: "https://intranet.alxafrica.com/certificates/id",
    skills: ["Full-Stack Development", "Python", "C Language", "JavaScript", "DevOps", "MySQL", "Agile"],
    providerIcon: <AlxLogo />,
    color: "from-gray-800 to-black",
    certificatePreview: "/certificates/cert1.png",
  },
  {
    title: "AI Career Essentials (ACE)",
    provider: "ALX Africa",
    platform: "ALX",
    issued: "July 2024",
    credentialId: "ALX-AI-XXXXXXXX",
    credentialLink: "https://intranet.alxafrica.com/certificates/id",
    skills: ["Machine Learning", "Data Science", "AI Ethics", "Python", "Problem Solving"],
    providerIcon: <AlxLogo />,
    color: "from-gray-800 to-black",
    certificatePreview: "/certificates/cert2.png",
  },
  {
    title: "Software Engineering Virtual Experience",
    provider: "Wells Fargo",
    platform: "Forage",
    issued: "August 2024",
    credentialId: "WF-FORAGE-XXXXXXXX",
    credentialLink: "https://www.theforage.com/certificates/id",
    skills: ["Agile Methodologies", "Task Management", "Corporate Development", "Version Control"],
    providerIcon: <Icon icon="mdi:stagecoach" className="text-4xl text-white" />,
    color: "from-red-600 to-red-700",
    certificatePreview: "/certificates/cert3.png",
  }
];

export default function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "3s" }}
            className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-full blur-2xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            tagText="Professional Credentials"
            tagIcon="solar:verified-check-bold"
            heading="Certifications"
            description="Credentials that validate my expertise in modern technologies and development practices."
            showUnderline={false}
            centered={true}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group h-full"
              >
                <div className="h-full flex flex-col bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">

                  {/* Header with gradient */}
                  <div className={`p-4 bg-gradient-to-br ${cert.color} text-white`}>
                    <div className="flex items-center justify-between">
                      {cert.providerIcon}
                      <div className="flex items-center gap-2">
                        <Icon icon="solar:verified-check-bold" className="text-2xl" />
                        <span className="font-semibold">Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Provider Info */}
                    <div className="space-y-3 mb-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-600 dark:text-gray-400 font-medium w-20">Provider:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-600 dark:text-gray-400 font-medium w-20">Platform:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{cert.platform}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-600 dark:text-gray-400 font-medium w-20">Issued:</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issued}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">
                        Skills Validated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-300/60 dark:border-gray-600/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID and View Button */}
                    <div className="mt-auto pt-4 border-t border-gray-200/60 dark:border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <Link href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <div className="flex items-center gap-1.5">
                            <Icon icon="solar:link-bold" />
                            <span>ID: {cert.credentialId}</span>
                          </div>
                        </Link>
                        <button
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200/60 dark:border-blue-700/50 hover:bg-blue-200 dark:hover:bg-blue-900 transition-all duration-300 text-xs font-medium"
                          onClick={() => setSelectedCertificate(cert)}
                        >
                          <Icon icon="solar:eye-bold" />
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4 mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg">
              <Icon icon="solar:medal-star-bold-duotone" className="text-blue-500 text-2xl" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                3 Professional Certifications
              </span>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative border border-gray-200/20 dark:border-gray-700/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{selectedCertificate.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedCertificate.provider}</p>
                </div>
                <motion.button whileHover={{ scale: 1.1, rotate: 90 }} onClick={() => setSelectedCertificate(null)}>
                  <Icon icon="solar:close-circle-bold" className="text-2xl text-gray-500 hover:text-red-500 transition-colors" />
                </motion.button>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                <Image
                  src={selectedCertificate.certificatePreview}
                  alt={selectedCertificate.title}
                  width={1000}
                  height={750}
                  className="w-full h-auto object-contain max-h-[calc(90vh-140px)] rounded-lg shadow-lg"
                />
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                <Link
                  href={selectedCertificate.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Icon icon="solar:link-bold" />
                  <span>Verify Credential</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}