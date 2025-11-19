const faqs = [
  { q: 'What industries do you serve?', a: 'Utilities, manufacturing, logistics, energy, and smart infrastructure. We tailor solutions to industrial realities and compliance.' },
  { q: 'Do you support LoRaWAN, WMBUS, and MIOTY?', a: 'Yes. We design and implement end‑to‑end stacks and gateways using these protocols, including optimization and certification.' },
  { q: 'Can you help with device security?', a: 'Absolutely. We implement secure boot, encryption, PKI, and OTA strategies aligned with best practices.' },
  { q: 'How do projects start?', a: 'We begin with a discovery workshop, define KPIs, and craft a roadmap from prototype to production.' },
]

export default function FAQs(){
  return (
    <section id="faqs" className="py-24 bg-[#0e1a25] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">FAQs</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-white/5">
              <summary className="list-none cursor-pointer select-none p-6 flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <span className="ml-6 text-[#FE7743] group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-6 pb-6 text-white/80">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
