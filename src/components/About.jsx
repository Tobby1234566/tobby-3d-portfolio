import { motion } from "framer-motion";

const stack = ["TypeScript", "React", "Next.js", "Node.js", "Tailwind", "MongoDB", "Three.js", "Git"];

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <motion.div className="section-kicker" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>01 / ABOUT</motion.div>
      <div className="about-grid">
        <motion.h2 initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>A product-minded developer with an eye for the <em>details.</em></motion.h2>
        <div className="about-copy">
          <p>I design and build useful web products—from polished storefronts and service platforms to automation tools. I care about the full experience: clarity, performance, interaction, and the code behind it.</p>
          <p>My recent work spans e-commerce, security auditing, professional services, and conversational automation.</p>
        </div>
      </div>
      <div className="stack-row">{stack.map((item, i) => <motion.span key={item} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{delay:i*.04}} viewport={{once:true}}>{item}</motion.span>)}</div>
    </section>
  );
}
