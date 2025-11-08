import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Moew Digital — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
