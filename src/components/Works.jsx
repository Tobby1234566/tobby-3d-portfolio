import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lumera from "../assets/lumera-preview.png";
import audit from "../assets/audit-preview.png";

const projects = [
  { n:"01", name:"LUMÉRA Store", type:"E-commerce platform", description:"A refined full-stack skincare storefront with product discovery, account flows, checkout, and an admin experience.", tech:["TypeScript","React","Node"], image:lumera, live:"https://lumera-store-client.vercel.app", code:"https://github.com/Tobby1234566/lumera-store", tone:"cream" },
  { n:"02", name:"AuditPulse", type:"Developer security tool", description:"A launch-readiness product that helps teams catch security, UX, compliance, and performance issues before users do.", tech:["Next.js","TypeScript","Auditing"], image:audit, live:"https://audit-agency.vercel.app", code:"https://github.com/Tobby1234566/audit-agency", tone:"blue" },
  { n:"03", name:"LetterPro", type:"Professional services", description:"A professional letter-writing platform designed to make polished business and personal communication easy to request and manage.", tech:["Node.js","Express","SQLite"], code:"https://github.com/Tobby1234566/-letter-pro", tone:"gold", mock:"letter" },
  { n:"04", name:"WhatsApp Bot", type:"Conversational automation", description:"A lightweight JavaScript bot that automates WhatsApp responses and repetitive messaging workflows.", tech:["JavaScript","Automation","Bot"], code:"https://github.com/Tobby1234566/whatsapp-bot", tone:"green", mock:"chat" },
  { n:"05", name:"Hot House", type:"Restaurant experience", description:"A warm, responsive restaurant website that presents the menu, atmosphere, and brand in a focused one-page experience.", tech:["HTML","CSS","Responsive"], code:"https://github.com/Tobby1234566/hot-house-restaurant-web-", tone:"red", mock:"food" },
];

function MockPreview({kind, name}) {
  if (kind === "chat") return <div className="mock chat-mock"><div className="mockbar"><b>●</b><span>Assistant online</span></div><div className="bubbles"><i>Hi! How can I help?</i><i>Show me today’s options</i><i>Here are the latest choices →</i></div><strong>Type a message… <span>↑</span></strong></div>;
  if (kind === "letter") return <div className="mock letter-mock"><div className="paper"><small>LETTERPRO / 2026</small><h4>Write with confidence.</h4><p>Professional letters, shaped around your purpose and your voice.</p><div className="line"/><div className="line short"/><button>Get started →</button></div></div>;
  return <div className="mock food-mock"><div className="plate">H</div><div><small>HOT HOUSE</small><h4>Good food.<br/>Great moments.</h4><p>Fresh from the kitchen.</p></div></div>;
}

function ProjectCard({project}) {
  return (
    <article className={`project-card tone-${project.tone}`}>
      <div className="project-preview">{project.image ? <img src={project.image} alt={`${project.name} website preview`} /> : <MockPreview kind={project.mock} name={project.name}/>}<span className="project-no">{project.n}</span></div>
      <div className="project-info">
        <p>{project.type}</p><h3>{project.name}</h3><p className="project-desc">{project.description}</p>
        <div className="project-tags">{project.tech.map(t=><span key={t}>{t}</span>)}</div>
        <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>}<a href={project.code} target="_blank" rel="noreferrer">View code ↗</a></div>
      </div>
    </article>
  );
}

export default function Works() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target, offset:["start start","end end"] });
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-81%"]);
  return (
    <section id="work" ref={target} className="work-scroll">
      <div className="work-sticky">
        <div className="work-head section-pad"><p className="section-kicker">02 / SELECTED PROJECTS</p><div className="work-title"><h2>Scroll through<br/><em>the work.</em></h2><p>Each movement reveals another project from my GitHub—built for real businesses, real users, and real problems.</p></div></div>
        <motion.div className="project-track" style={{x}}>{projects.map(p=><ProjectCard project={p} key={p.name}/>)}</motion.div>
        <div className="scroll-progress"><motion.i style={{scaleX:scrollYProgress}}/><span>KEEP SCROLLING →</span></div>
      </div>
    </section>
  );
}
