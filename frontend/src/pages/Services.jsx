import { Link } from 'react-router-dom'

const services = [
  { title: 'Braids Installation', text: 'Box braids Ghana weaving and cornrows crafted with precision.' },
  { title: 'Wig Making', text: 'Custom wigs from bone straight styles to soft curls.' },
  { title: 'Frontal Installation', text: 'Seamless lace application with a natural finish.' },
  { title: 'Hair Revamp', text: 'Restore and refresh your favourite wigs.' },
  { title: 'Coloring', text: 'Beautiful colour selected with care for your hair.' },
  { title: 'Bridal Styling', text: 'Luxury bridal styling for your special day.' },
]

export default function Services() {
  return (
    <main className="services-page mx-auto max-w-7xl px-6 py-16">
      <section className="services-hero relative overflow-hidden rounded-[2rem] p-8 text-white md:p-14">
        <div className="relative z-10 max-w-2xl">
          <p className="font-bold italic tracking-widest text-gold">MADE FOR YOUR MOMENT</p>
          <h1 className="mt-3 text-5xl font-bold italic md:text-7xl">Your Hair, Your Moment</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            Thoughtful hair care and styling, tailored to bring your vision to life.
          </p>
          <Link to="/booking" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-gold px-7 py-4 font-bold italic text-forestDeep transition hover:bg-ivory">
            Find Your Style
          </Link>
        </div>
      </section>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className={`service-card service-card-${index + 1} linen-card rounded-[2rem] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(198,164,106,0.25)]`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold italic text-white">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h2 className="mt-6 text-2xl font-bold italic">{service.title}</h2>
            <p className="mt-2 leading-relaxed opacity-70">{service.text}</p>
            <Link to="/booking" className="mt-6 inline-flex min-h-11 items-center border-b border-gold font-bold italic text-gold">
              Book this service
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
