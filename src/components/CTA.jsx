import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-cyan-500/10" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Ready to make your brand unmissable?
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-muted-foreground"
        >
          Get a custom growth plan tailored to your goals. No fluff—just actionable insights.
        </motion.p>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-3 sm:grid-cols-6 text-left"
        >
          <input className="sm:col-span-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500/40" placeholder="Your name" />
          <input type="email" className="sm:col-span-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500/40" placeholder="Work email" />
          <input className="sm:col-span-4 rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500/40" placeholder="Company" />
          <button className="sm:col-span-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-6 py-3 shadow-lg hover:shadow-cyan-500/30 transition">Get Proposal →</button>
        </motion.form>
        <p className="mt-3 text-xs text-muted-foreground">We’ll get back within 24 hours.</p>
      </div>
    </section>
  );
}
