const partners = [
  { name: 'Bosch', logo: 'https://img.logoipsum.com/288.svg' },
  { name: 'Siemens', logo: 'https://img.logoipsum.com/297.svg' },
  { name: 'Honeywell', logo: 'https://img.logoipsum.com/284.svg' },
  { name: 'Cisco', logo: 'https://img.logoipsum.com/270.svg' },
  { name: 'ABB', logo: 'https://img.logoipsum.com/265.svg' },
  { name: 'Schneider', logo: 'https://img.logoipsum.com/261.svg' },
]

export default function Partners(){
  return (
    <section id="partners" className="py-20 bg-[#0e1a25]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/60 text-sm uppercase tracking-wider">Trusted by innovators and industry leaders</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-80">
          {partners.map(p => (
            <div key={p.name} className="flex items-center justify-center">
              <img src={p.logo} alt={p.name} className="h-9 brightness-0 invert opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
