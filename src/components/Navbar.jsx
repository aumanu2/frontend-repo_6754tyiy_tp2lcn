import { motion } from 'framer-motion';
import { Rocket, Sparkles, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 to-transparent" />
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg"
        >
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <Rocket className="h-6 w-6 text-cyan-400" />
              <Sparkles className="h-3 w-3 text-fuchsia-400 absolute -right-1 -top-1 animate-pulse" />
            </div>
            <span className="font-semibold tracking-tight">Moew Digital</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-4 py-2 shadow-md hover:shadow-cyan-500/30 transition-shadow"
            >
              Start Project
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 md:hidden backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 rounded-2xl p-3"
          >
            <div className="flex flex-col">
              <a href="#services" className="px-3 py-2 rounded-lg hover:bg-white/5">Services</a>
              <a href="#work" className="px-3 py-2 rounded-lg hover:bg-white/5">Work</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-white/5">Contact</a>
              <a
                href="#contact"
                className="mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-center"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
