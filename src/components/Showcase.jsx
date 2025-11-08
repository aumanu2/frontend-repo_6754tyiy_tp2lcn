import { motion } from 'framer-motion';

const items = [
  {
    tag: 'E‑commerce',
    title: 'NeonWear Store',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'SaaS',
    title: 'FlowOS Platform',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Fintech',
    title: 'VoltPay App',
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">A few recent builds blending aesthetics, speed, and measurable impact.</p>
          </div>
          <a href="#contact" className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 hover:bg-white/15 transition">Request Case Study →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              href="#"
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-cyan-300/80 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2 py-1">{item.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
