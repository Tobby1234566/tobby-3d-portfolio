import { useState } from "react";

const links = [["about", "About"], ["work", "Projects"], ["contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Tobby home"><span>TOBBY</span><i /></a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-github" href="https://github.com/Tobby1234566" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? "×" : "☰"}</button>
    </header>
  );
}
