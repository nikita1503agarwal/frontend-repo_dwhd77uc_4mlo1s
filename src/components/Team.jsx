const team = [
  { name: 'Amine Mallouli', role: 'Embedded Systems Lead', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop', bio: '15+ years building reliable firmware and RTOS platforms for industrial devices.' },
  { name: 'Lina Ivanova', role: 'Wireless Protocols Architect', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop', bio: 'Designs robust LoRaWAN/WMBUS/MIOTY networks with security first.' },
  { name: 'Jonas Richter', role: 'Cloud & DevOps', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop', bio: 'Bridges sensor data to cloud with scalable, observable pipelines.' },
]

export default function Team(){
  return (
    <section id="team" className="py-24 bg-[#0b1520] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Team</h2>
          <p className="mt-3 text-white/70">Experts who combine deep engineering with practical, production experience.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(m => (
            <div key={m.name} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <div className="text-sm text-[#447D9B]">{m.role}</div>
                <p className="mt-2 text-sm text-white/70">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
