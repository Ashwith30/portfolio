import React from "react";
import { motion } from "framer-motion";

export const FloatingDock = ({ items }) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        bottom: "30px",
        left: "40%",
        transform: "translate(-50%, 0)",
        display: "flex",
        gap: "28px",
        padding: "16px 28px",
        borderRadius: "40px",
        background: "rgba(20,20,20,0.55)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
        zIndex: 1000,
      }}
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          whileHover={{
            scale: 1.4,
            y: -8,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          style={{
            width: "42px",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {item.icon}

          {/* tooltip */}
          <span
            style={{
              position: "absolute",
              bottom: "60px",
              fontSize: "12px",
              color: "#ddd",
              opacity: 0,
              transition: "0.3s",
              pointerEvents: "none",
            }}
            className="dock-tooltip"
          >
            {item.title}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};