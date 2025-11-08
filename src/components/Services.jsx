import { motion } from 'framer-motion';
import { Rocket, MousePointerClick, LineChart, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Website Launchpads',
    desc: 'Conversion-optimized, SEO-ready sites that load fast and feel premium.'
  },
  {
    icon: MousePointerClick,
    title: 'Paid Media & Funnels',
    desc: 'High-ROI ad funnels with relentless A/B testing and creative iteration.'
  },
  {
    icon: LineChart,
    title: 'Analytics & CRO',
    desc: 'From heatmaps to multivariate tests—turn insights into growth.'
  },
  {
    icon: Megaphone,
    title: 'Brand & Content',
    desc: 'Narratives, visuals, and GTM assets that make you unforgettable.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What We Do</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">Full‑stack growth: from first click to loyal customer, engineered with precision.</p>
          </div>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 hover:bg-white/15 transition">Free Strategy Call →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
