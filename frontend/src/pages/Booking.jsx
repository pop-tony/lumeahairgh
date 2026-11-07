export default function Booking() {
  const submitBooking = (event) => {
    event.preventDefault()
    window.alert('Your booking request is ready. We will contact you on WhatsApp.')
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="font-bold italic tracking-widest text-gold">YOUR NEXT LOOK STARTS HERE</p>
      <h1 className="mt-3 text-5xl font-bold italic md:text-7xl">Book Appointment</h1>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <form onSubmit={submitBooking} className="linen-card space-y-6 rounded-[2rem] p-6 shadow-sm transition hover:shadow-[0_20px_60px_rgba(198,164,106,0.25)] md:p-8">
          <label className="block">
            <span className="mb-2 block font-bold italic">Full Name</span>
            <input name="name" autoComplete="name" placeholder="Your name" className="min-h-12 w-full rounded-full border border-gold/20 bg-white/80 px-6 py-4 outline-none transition focus:border-gold" required />
          </label>
          <label className="block">
            <span className="mb-2 block font-bold italic">Phone or WhatsApp</span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" className="min-h-12 w-full rounded-full border border-gold/20 bg-white/80 px-6 py-4 outline-none transition focus:border-gold" required />
          </label>
          <label className="block">
            <span className="mb-2 block font-bold italic">Choose a Service</span>
            <select name="service" className="min-h-12 w-full rounded-full border border-gold/20 bg-white/80 px-6 py-4 outline-none focus:border-gold">
              <option>Box Braids</option>
              <option>Bone Straight Wig</option>
              <option>Frontal Installation</option>
              <option>Hair Revamp</option>
              <option>Bridal Styling</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block font-bold italic">Tell Us More</span>
            <textarea name="details" placeholder="Share your preferred date and style" className="h-32 w-full rounded-[1.5rem] border border-gold/20 bg-white/80 px-6 py-4 outline-none transition focus:border-gold" />
          </label>
          <button type="submit" className="min-h-12 w-full rounded-full bg-gold py-4 text-lg font-bold italic text-white transition hover:bg-goldDeep">
            Send Booking Request
          </button>
        </form>
        <aside className="rounded-[2rem] bg-forestDeep p-8 text-beige md:p-10">
          <p className="text-sm font-bold italic tracking-widest text-gold">COME SAY HELLO</p>
          <h2 className="mt-3 text-3xl font-bold italic">Visit Studio</h2>
          <p className="mt-4 leading-relaxed opacity-75">
            East Legon Accra Ghana<br />
            Monday to Saturday 9am to 7pm<br />
            WhatsApp +233 XX XXX XXXX
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-gold/20 p-6">
            <p className="font-bold italic">Quick Booking via WhatsApp</p>
            <p className="mt-2 text-sm opacity-70">Send us a message to plan your visit and find your perfect look.</p>
          </div>
        </aside>
      </div>
    </main>
  )
}
