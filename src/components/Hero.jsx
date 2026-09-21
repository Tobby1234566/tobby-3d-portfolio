import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

export default function Hero() {
  return (
    <section id="top" className="hero section-pad">
      <div className="hero-copy">
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.55}} className="eyebrow"><span /> Full-stack developer · Lagos, NG</motion.p>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}>I build digital products that feel <em>alive.</em></motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.16}} className="hero-lede">From commerce to developer tools, I turn ideas into fast, thoughtful web experiences with clean code and purposeful motion.</motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}} className="hero-actions">
          <a className="button primary" href="#work">Explore my work <span>↓</span></a>
          <a className="text-link" href="mailto:officialletterpro.com@gmail.com">Let’s work together ↗</a>
        </motion.div>
        <div className="hero-meta"><span>10 public repositories</span><span>React · TypeScript · Node</span></div>
      </div>
      <div className="hero-canvas" aria-hidden="true"><ComputersCanvas /><div className="canvas-label">SCROLL TO EXPLORE <span>↓</span></div></div>
    </section>
  );
}
