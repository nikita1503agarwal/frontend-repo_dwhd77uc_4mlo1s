import { BadgeCheck } from 'lucide-react'

const projects = [
  { id: 1, title: 'Smart Metering Platform', category: 'Utilities', tags: ['WMBUS', 'LoRaWAN', 'Cloud'], thumb: 'https://images.unsplash.com/photo-1581091014534-7c77c7a1a5ce?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Predictive Maintenance', category: 'Manufacturing', tags: ['Edge AI', 'Sensors', 'MQTT'], thumb: 'https://images.unsplash.com/photo-1581093588401-16b1c4fc2b0d?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Cold Chain Monitoring', category: 'Logistics', tags: ['MIOTY', 'BLE', 'Gateway'], thumb: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects(){
  return (
    <section id="projects" className="py-24 bg-[#0b1520] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Real deployments built for scale, security, and measurable business outcomes.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/70">
            <BadgeCheck size={18} className="text-[#FE7743]" /> Industry‑grade, production‑proven
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.thumb} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-[#447D9B] font-semibold">{p.category}</div>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
