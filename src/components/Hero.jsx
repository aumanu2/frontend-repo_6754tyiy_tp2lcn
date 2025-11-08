import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
            >
              Clean. Clever. Conversion‑First.
              <span className="block bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Digital Marketing</span>
              for Modern Brands.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              We craft high‑performing websites and ad experiences using interactive 3D, bold typography, and data‑driven strategy.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-5 py-3 shadow-lg hover:shadow-cyan-500/30 transition">Get a Proposal</a>
              <a href="#work" className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 hover:bg-white/15 transition">See Our Work</a>
            </motion.div>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full border border-white/10" src="https://i.pravatar.cc/40?img=1" alt="" />
                <img className="h-8 w-8 rounded-full border border-white/10" src="https://i.pravatar.cc/40?img=2" alt="" />
                <img className="h-8 w-8 rounded-full border border-white/10" src="https://i.pravatar.cc/40?img=3" alt="" />
              </div>
              <span>Trusted by 50+ startups</span>
            </div>
          </div>
          <div className="lg:col-span-6"></div>
        </div>
      </div>
    </section>
  );
}
