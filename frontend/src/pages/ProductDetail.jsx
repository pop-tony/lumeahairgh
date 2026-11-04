import { Link, useParams } from 'react-router-dom'
import { getProduct, products } from '../data/products.js'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProduct(productId)

  if (!product) {
    return (
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">LUMEAHAIRGH</p>
        <h1 className="mt-4 text-4xl">Style not found</h1>
        <Link to="/collections" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-7 text-white">Explore Collections</Link>
      </main>
    )
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3)

  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-10 pb-28 lg:px-8 lg:py-16">
      <Link to="/collections" className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--muted)]">← Back to Collections</Link>
      <section className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="product-photo-panel relative overflow-hidden rounded-[32px] p-5 md:p-8">
          <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-[var(--berry)] opacity-20 blur-3xl" />
          <img src={product.image} alt={product.name} className="relative z-10 aspect-[0.88] w-full rounded-[24px] object-cover" />
          <div className="absolute bottom-8 right-8 z-20 overflow-hidden rounded-[24px] border-4 border-white shadow-2xl md:bottom-10 md:right-10">
            <img src={product.lifestyleImage} alt="Hair style worn by a model" className="h-36 w-28 object-cover md:h-48 md:w-36" />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: `var(--${product.accent})` }}>LUMEAHAIRGH • ACCRA GHANA</p>
          <h1 className="text-4xl leading-[0.95] md:text-6xl">{product.name}</h1>
          <p className="text-2xl" style={{ color: `var(--${product.accent})` }}>{product.price}</p>
          <p className="max-w-xl text-base leading-7 text-[var(--muted)]">{product.description}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link to="/booking" className="inline-flex min-h-14 items-center justify-center rounded-full px-8 text-white transition hover:brightness-95" style={{ background: `var(--${product.accent})` }}>Book This Style</Link>
          </div>
          <div className="grid gap-3 border-t border-[var(--gold)]/25 pt-6 sm:grid-cols-3">
            {['Made with care', 'Personal fitting', 'Accra studio'].map((detail) => (
              <p key={detail} className="rounded-2xl bg-white/70 px-4 py-3 text-center text-xs text-[var(--muted)]">{detail}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">More to love</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Explore More Styles</h2>
          </div>
          <Link to="/collections" className="text-sm text-[var(--muted)]">All collections →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link key={item.id} to={`/collections/${item.id}`} className="glass group overflow-hidden rounded-[24px] transition hover:shadow-[0_20px_60px_rgba(198,164,106,0.25)]">
              <img src={item.image} alt={item.name} className="aspect-[0.95] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <h3 className="text-lg">{item.name}</h3>
                <p className="mt-2 text-sm" style={{ color: `var(--${item.accent})` }}>{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
