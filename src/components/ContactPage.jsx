import { useState } from 'react'

export default function ContactPage(){
  const [status, setStatus] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    setStatus('Thanks! We\'ll get back to you within one business day.')
    e.currentTarget.reset()
  }

  return (
    <div className="bg-[#0b1520] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-white/70">Let\'s discuss your IoT initiatives. We operate from Tunisia and Germany and work with clients worldwide.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/80">Full Name</label>
                <input className="mt-1 w-full rounded-md bg-[#0e1a25] border border-white/10 px-3 py-2 outline-none focus:border-[#447D9B]" required />
              </div>
              <div>
                <label className="text-sm text-white/80">Work Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-[#0e1a25] border border-white/10 px-3 py-2 outline-none focus:border-[#447D9B]" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/80">Company</label>
              <input className="mt-1 w-full rounded-md bg-[#0e1a25] border border-white/10 px-3 py-2 outline-none focus:border-[#447D9B]" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/80">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-md bg-[#0e1a25] border border-white/10 px-3 py-2 outline-none focus:border-[#447D9B]" required />
            </div>
            <button type="submit" className="mt-6 px-6 py-3 rounded-full bg-[#FE7743] text-white font-medium shadow-[0_8px_30px_rgba(254,119,67,0.35)] hover:brightness-110 transition">Send Inquiry</button>
            {status && <p className="mt-3 text-sm text-[#7ce7a0]">{status}</p>}
          </form>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Offices</h3>
            <div className="mt-3 text-sm text-white/80">
              <div className="font-medium text-white">Tunis, Tunisia</div>
              <div>Centre Urbain Nord, Tunis</div>
            </div>
            <div className="mt-4 text-sm text-white/80">
              <div className="font-medium text-white">Munich, Germany</div>
              <div>Maxvorstadt, Munich</div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Social</h4>
              <div className="mt-2 flex gap-3 text-sm">
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">GitHub</a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Map</h4>
              <div className="mt-2 rounded-xl overflow-hidden border border-white/10">
                <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.330356069955!2d10.183!3d36.843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb17b3e2b8b7%3A0xd6f5b0e2d9df1f1!2sTunis!5e0!3m2!1sen!2stn!4v1700000000000" width="100%" height="220" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
