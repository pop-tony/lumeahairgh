import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="font-bold italic tracking-widest text-gold">OUR STORY</p>
      <h1 className="mt-3 max-w-4xl text-[clamp(2rem,10vw,3rem)] font-bold italic md:text-7xl">A Little More LUMEAHAIRGH</h1>
      <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
        <div className="image-glow h-[440px] overflow-hidden rounded-[2rem]">
          <img src="/images/braids-portrait.jpg" alt="Braided hair artistry at LUMEAHAIRGH" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold italic">Luxury hair, with a personal touch</h2>
          <p className="mt-5 text-lg leading-relaxed opacity-80">
            LUMEAHAIRGH is a luxury hair brand based in East Legon Accra Ghana. We specialize in premium wigs braids and frontal installations, made for queens who know quality. Every piece is crafted with care and attention to detail.
          </p>
          <p className="mt-4 text-lg leading-relaxed opacity-80">
            From a custom fit to your final styling, our studio experience is rooted in thoughtful service, beautiful results and hair you will love to wear.
          </p>
          <div className="mt-8 flex gap-8">
            <div><p className="text-4xl font-bold italic text-gold">500+</p><p className="mt-1 opacity-70">Happy Clients</p></div>
            <div><p className="text-4xl font-bold italic text-gold">5 Years</p><p className="mt-1 opacity-70">Hair Artistry</p></div>
          </div>
          <Link to="/booking" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-8 py-4 font-bold italic text-white hover:bg-goldDeep">
            Visit Our Studio
          </Link>
        </div>
      </div>
    </main>
  )
}
