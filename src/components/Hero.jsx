import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0b1520]" id="home">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1520]/40 via-[#0b1520]/70 to-[#0b1520] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12">
        <div className="text-white">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Engineering trusted IoT systems for a connected industrial world
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.15, duration:0.6}} className="mt-6 text-lg text-white/80 max-w-xl">
            MALLOULINOVA partners with enterprises to design, build, and scale embedded devices and wireless solutions—accelerating digital transformation with reliability and security at the core.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="px-6 py-3 rounded-full bg-[#FE7743] text-white font-medium shadow-[0_8px_30px_rgba(254,119,67,0.35)] hover:brightness-110 transition">Explore Services</a>
            <a href="#projects" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition">View Case Studies</a>
          </motion.div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ['15+','years','industry experience'],
              ['20+','protocols','and standards'],
              ['99.9%','uptime','across deployments'],
            ].map(([a,b,c]) => (
              <div key={a} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold">{a}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{b}</div>
                <div className="text-xs text-white/60">{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
