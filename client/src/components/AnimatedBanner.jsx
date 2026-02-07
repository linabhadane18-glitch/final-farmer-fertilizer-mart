import { useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedBanner.css";

// 👉 PUT YOUR IMAGES IN src/assets
import img1 from "../assets/banner1.jpeg";
import img2 from "../assets/banner2.jpeg";
import img3 from "../assets/banner3.jpeg";
import img4 from "../assets/banner4.jpeg";

const panels = [
  { id: 1, text: "TOGETHER", image: img1 },
  { id: 2, text: "FOR", image: img2 },
  { id: 3, text: "GREATER", image: img3 },
  { id: 4, text: "GOOD", image: img4 },
];

export default function AnimatedBanner() {
  const [active, setActive] = useState(1);

  return (
    <div className="ifco-wrapper">
      {panels.map((panel) => {
        const isActive = active === panel.id;

        return (
          <motion.div
            key={panel.id}
            className="ifco-panel"
            onMouseEnter={() => setActive(panel.id)}
            animate={{
              flex: isActive ? 3 : 1,
              opacity: !isActive ? 0.55 : 1,
              y: isActive ? -20 :0,
              scale: isActive ? 1.06 :1,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], }}
            style={{
              backgroundImage: `url(${panel.image})`,
            }}
          >
            <div className="ifco-overlay">
              <span className="ifco-text">{panel.text}</span>
            </div>
          </motion.div>
          
        );
      })}
    </div>
  );
}