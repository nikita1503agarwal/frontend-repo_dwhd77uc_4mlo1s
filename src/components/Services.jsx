import { Signal, Cpu, Radio, Cloud, ShieldCheck, CircuitBoard } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Embedded Systems Development',
    desc: 'Firmware, RTOS, board bring-up, drivers, and performance optimization across ARM, RISC-V, and custom silicon.',
    tags: ['C/C++', 'Zephyr/FreeRTOS', 'Bare-metal', 'Drivers'],
  },
  {
    icon: Radio,
    title: 'Wireless Protocols',
    desc: 'Expertise in LoRaWAN, WMBUS, MIOTY, BLE, Wi‑Fi, and proprietary sub-GHz stacks for robust industrial networks.',
    tags: ['LoRaWAN', 'WMBUS', 'MIOTY', 'BLE/Wi‑Fi'],
  },
  {
    icon: Signal,
    title: 'Industrial IoT Solutions',
    desc: 'Sensor-to-cloud architectures, gateway engineering, OTA, and secure device management at scale.',
    tags: ['Gateways', 'Telemetry', 'OTA', 'Device Mgmt'],
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    desc: 'Data ingestion, time-series storage, dashboards, and analytics on AWS, Azure, or on‑prem platforms.',
    tags: ['AWS IoT', 'Azure IoT', 'MQTT', 'Timeseries'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'PKI, secure boot, encryption, and certification workflows tailored to industrial requirements.',
    tags: ['Secure Boot', 'PKI', 'TLS', 'Certification'],
  },
  {
    icon: CircuitBoard,
    title: 'Hardware Co‑Design',
    desc: 'Schematic review, BOM optimization, and DFM support with our hardware partners.',
    tags: ['Schematics', 'BOM', 'DFM', 'EMC']
  }
]

export default function Services(){
  return (
    <section id="services" className="relative py-24 bg-[#0e1a25] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(68,125,155,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="mt-3 text-white/70">End‑to‑end expertise from device to cloud, designed for real‑world industrial environments.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, desc, tags}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-[#447D9B]/40 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#447D9B]/10 blur-2xl" />
              <div className="w-11 h-11 rounded-xl bg-[#273F4F] text-white grid place-items-center shadow-md shadow-[#273F4F]/40">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
