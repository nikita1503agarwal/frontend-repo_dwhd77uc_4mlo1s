export default function Footer(){
  return (
    <footer className="bg-[#0b1520] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#447D9B] to-[#273F4F] grid place-items-center">
              <span className="text-white font-black text-sm">M</span>
            </div>
            <span>MALLOULINOVA © {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm">Embedded systems • Wireless • Industrial IoT</div>
        </div>
      </div>
    </footer>
  )
}
