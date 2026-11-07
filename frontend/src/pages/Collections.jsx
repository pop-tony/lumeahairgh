import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

export default function Collections() {
  return (
    <main className="collections-page mx-auto max-w-7xl px-6 py-16">
      <div className="collections-intro">
      <p className="font-bold italic tracking-widest text-gold">LUMEAHAIRGH • ACCRA GHANA</p>
      <h1 className="mt-3 text-5xl font-bold italic md:text-7xl">Collections</h1>
      <p className="mt-4 text-xl opacity-70">Premium wigs crafted in Accra Ghana</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link to={`/collections/${product.id}`} key={product.id} className="linen-card group block rounded-[2rem] p-4 shadow-sm transition hover:shadow-[0_20px_60px_rgba(198,164,106,0.25)]">
            <div className="image-glow relative h-80 overflow-hidden rounded-[1.5rem]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <img src={product.lifestyleImage} alt="" className="absolute bottom-3 right-3 h-16 w-16 rounded-full border-[3px] border-white object-cover shadow-xl" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold italic">{product.name}</h2>
              <p className="mt-2 font-bold" style={{ color: `var(--${product.accent})` }}>{product.price}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">View style details →</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-16 rounded-[2rem] bg-forestDeep p-8 text-beige md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold italic">Find Your Signature Look</h2>
          <p className="mt-2 opacity-70">Book a personal fitting with our Accra studio.</p>
        </div>
        <Link to="/booking" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-gold px-7 py-4 font-bold italic text-white md:mt-0">
          Book Appointment
        </Link>
      </div>
    </main>
  )
}
