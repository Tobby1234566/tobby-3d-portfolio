import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Works, Contact } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <main className="site-shell">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </BrowserRouter>
  );
}
