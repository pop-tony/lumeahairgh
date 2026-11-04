import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

const heroImage = '/images/braids-portrait.jpg'

const services = [
  { icon: 'B', title: 'Braids', description: 'Neat long lasting braids styled to protect and slay' },
  { icon: 'W', title: 'Wigs', description: 'Custom wigs built to fit like your own hair' },
  { icon: 'F', title: 'Frontal', description: 'Seamless frontal installs that melt perfectly' },
]

const testimonials = [
  {
    name: 'Ama Serwaa',
    quote: 'My wig still looks new after months. LUMEAHAIRGH quality is really unmatched.',
    image: '/images/braids-portrait.jpg',
  },
  {
    name: 'Nana Yaa',
    quote: 'The frontal melted like skin. I got compliments all day and night.',
    image: '/images/hair-curls.jpg',
  },
  {
    name: 'Esi Coleman',
    quote: 'Braids so neat and light. I wore them for weeks with no pain at all.',
    image: '/images/hair-editorial.jpg',
  },
]

export default function Home() {
  const [activeStory, setActiveStory] = useState(null)
  const heroSpin = useRef(null)

  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      if (heroSpin.current) heroSpin.current.style.transform = `rotateY(${next * 1080}deg)`
    }

    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const tiltCard = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10
    event.currentTarget.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`
  }

  const resetTilt = (event) => {
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }

  return (
    <main className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-8 py-6 lg:py-10 overflow-x-clip pb-28 md:pb-8">
      <div className="page-enter">
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[86vh]">
          <div className="space-y-6 lg:space-y-8 order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              New Collection Live
            </div>
            <h1 className="hero-title text-[44px] lg:text-[74px] leading-[0.88] tracking-[-0.04em]" style={{ color: 'var(--text)' }}>
              Luxury Hair<br /><span style={{ color: 'var(--gold)' }}>Crafted In Accra</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] leading-[1.55] max-w-[480px]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>
              Premium wigs braids and frontal installations made for queens who know quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/collections" className="btn-3d px-8 py-4 rounded-full text-white text-[12px] tracking-[0.16em] uppercase gold-glow min-h-[52px] inline-flex items-center justify-center" style={{ background: 'var(--gold)' }}>
                Explore Collection
              </Link>
              <Link to="/booking" className="btn-3d px-8 py-4 rounded-full glass text-[12px] tracking-[0.16em] uppercase min-h-[52px] inline-flex items-center justify-center" style={{ color: 'var(--text)' }}>
                Book Appointment
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:gap-6 pt-4 lg:pt-8">
              {[
                ['500 plus', 'Happy Queens'],
                ['8 years', 'Years Crafting'],
                ['100 percent', 'Percent Luxury'],
              ].map(([value, label]) => (
                <div key={label} data-reveal="true" onMouseMove={tiltCard} onMouseLeave={resetTilt} className="glass rounded-[20px] lg:rounded-[24px] p-4 lg:p-5 tilt-card linen" style={{ transformStyle: 'preserve-3d', boxShadow: '0 10px 40px var(--shadow)' }}>
                  <div className="text-[20px] lg:text-[28px]" style={{ color: 'var(--gold)', transform: 'translateZ(28px)' }}>{value}</div>
                  <div className="text-[10px] lg:text-[11px] tracking-[0.15em] uppercase mt-1" style={{ color: 'var(--muted)', transform: 'translateZ(14px)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual relative w-full aspect-[0.95] lg:aspect-[1] flex items-center justify-center order-2 lg:sticky lg:top-[92px] hero-no-border" style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
            <div className="hero-visual-glow absolute inset-[8%] rounded-full pointer-events-none" />
            <div className="relative w-full h-full flex items-center justify-center hero-no-border">
              <div ref={heroSpin} className="relative w-[92%] lg:w-[88%] aspect-[0.9] flex items-center justify-center hero-no-border select-none" style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d', willChange: 'transform' }}>
                <img src={heroImage} alt="Braided hair style by LUMEAHAIRGH" className="w-full h-full object-cover rounded-[2rem]" style={{ border: 'none', outline: 'none', boxShadow: '0 30px 80px rgba(198,164,106,0.25)' }} />
                <div className="absolute bottom-[2%] left-1/2 w-[58%] h-[14%] rounded-full blur-[22px] opacity-35 pointer-events-none" style={{ background: 'var(--gold)' }} />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 lg:mt-14 rounded-[20px] lg:rounded-full glass py-4 w-full max-w-full overflow-hidden linen">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-10 px-4">
            {['Box Braids', 'Bone Straight', 'Frontal Wigs', 'Ghana Weaving', 'Bridal Glam', 'Revamp Services', 'Color Glow', 'Luxury Installs'].map((item) => (
              <span key={item} className="text-[11px] lg:text-[13px] tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="showcase-section mt-16 space-y-8 lg:mt-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="inline-flex glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase mb-4">Featured on Home</div>
              <h2 className="text-[32px] lg:text-[52px] leading-[0.9] tracking-[-0.03em]">Curated Best Sellers</h2>
              <p className="mt-3 text-[15px] max-w-[480px]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>
                Our most loved ready to wear styles, selected for their beauty and quality.
              </p>
            </div>
            <Link to="/collections" className="self-start lg:self-auto px-6 py-3 rounded-full glass text-[11px] tracking-[0.15em] uppercase min-h-[44px] btn-3d inline-flex items-center">
              View All Collections →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {products.map((product) => (
              <Link key={product.id} to={`/collections/${product.id}`} data-reveal="true" onMouseMove={tiltCard} onMouseLeave={resetTilt} className="group tilt-card cursor-pointer glass rounded-[24px] lg:rounded-[28px] overflow-hidden gold-glow min-h-[44px]" style={{ transformStyle: 'preserve-3d' }}>
                <div className="aspect-[1] sm:aspect-[0.9] overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover scale-[1.05] group-hover:scale-[1.12] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 rounded-full px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase text-white" style={{ background: `var(--${product.accent})` }}>{product.price}</div>
                  <img src={product.lifestyleImage} alt="" className="absolute bottom-4 right-4 h-16 w-16 rounded-full border-[3px] border-white object-cover shadow-xl transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[16px] tracking-[-0.01em]">{product.name}</h3>
                    <p className="text-[10px] tracking-[0.12em] uppercase mt-2" style={{ color: 'var(--muted)' }}>Crafted for everyday luxury</p>
                  </div>
                  <span className="w-11 h-11 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition" style={{ background: 'var(--gold)' }}>↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 grid items-center gap-8 lg:mt-28 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/braids-portrait.jpg" alt="Braided style by LUMEAHAIRGH" className="w-full h-[320px] object-cover rounded-[24px] gold-glow" />
              <img src="/images/sleek-ponytail.jpg" alt="Sleek hair inspiration by LUMEAHAIRGH" className="w-full h-[320px] object-cover rounded-[24px] mt-10 gold-glow" />
            </div>
            <div className="absolute bottom-5 left-5 rounded-[18px] glass p-4">
              <p className="text-[14px]">LUMEAHAIRGH Studio East Legon</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>Open daily 9am to 7pm True luxury</p>
            </div>
            <div className="absolute right-4 top-4 w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: 'var(--gold)' }}>♥</div>
          </div>
          <div>
            <div className="inline-flex glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase mb-4">Why LUMEAHAIRGH</div>
            <h2 className="text-[32px] lg:text-[54px] leading-[0.9] tracking-[-0.03em]">Luxury That Feels<br />Like Your Own</h2>
            <p className="mt-5 text-[15px] leading-[1.7]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>
              LUMEAHAIRGH Hair Studio started in a small room in East Legon with one mission to make every woman feel like royalty. Today we craft luxury wigs and braids for queens across Ghana and beyond. Our hands are skilled, our heart is pure, our quality is unmatched.
            </p>
            <div className="mt-7 space-y-5">
              <div><h3 className="text-[16px]">Luxury First</h3><p className="mt-1 text-[13px]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>Only human hair, premium lace and a flawless melt.</p></div>
              <div><h3 className="text-[16px]">Queens Only</h3><p className="mt-1 text-[13px]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>We serve women who know quality and love the soft life.</p></div>
            </div>
            <Link to="/about" className="mt-7 btn-3d px-8 py-4 rounded-full glass text-[11px] tracking-[0.15em] uppercase min-h-[48px] inline-flex items-center">
              Our Full Story →
            </Link>
          </div>
        </section>

        <section className="service-story-section mt-16 space-y-8 lg:mt-28">
          <div>
            <div className="inline-flex glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase mb-4">Services on Home</div>
            <h2 className="text-[32px] lg:text-[48px] leading-[0.9]">Everything For Your Glam</h2>
            <p className="mt-3 text-[15px]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>Three signature services but there are more waiting on the dedicated page.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link to="/services" key={service.title} data-reveal="true" onMouseMove={tiltCard} onMouseLeave={resetTilt} className="glass rounded-[24px] p-6 lg:p-8 tilt-card linen">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px]" style={{ background: 'var(--gold)' }}>{service.icon}</div>
                <h3 className="mt-6 text-[22px]">{service.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>{service.description}</p>
                <span className="mt-6 text-[11px] tracking-[0.15em] uppercase flex items-center gap-2 min-h-[44px]">Explore →</span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="px-8 py-4 rounded-full text-white text-[11px] tracking-[0.15em] uppercase gold-glow btn-3d min-h-[48px] inline-flex items-center" style={{ background: 'var(--gold)' }}>
            See All Services
          </Link>
        </section>

        <section className="testimonial-section mt-16 lg:mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div>
              <div className="inline-flex glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase mb-4">Client Love</div>
              <h2 className="text-[28px] lg:text-[42px] leading-[0.95]">Queens Share Their Glow</h2>
              <p className="mt-3 text-[14px] max-w-[560px]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>
                Real stories from Accra queens who found luxury at LUMEAHAIRGH.
              </p>
            </div>
            <Link to="/stories" className="mt-6 px-6 py-3 rounded-full bg-black text-white text-[11px] tracking-[0.15em] uppercase min-h-[44px] inline-flex items-center justify-center">
              Watch Stories →
            </Link>
          </div>
          <div className="mt-7 grid md:grid-cols-3 gap-5">
            {testimonials.map((story) => (
              <button key={story.name} type="button" onClick={() => setActiveStory(story)} data-reveal="true" className="glass rounded-[24px] p-4 text-left transition hover:shadow-[0_20px_60px_rgba(198,164,106,0.25)]">
                <img src={story.image} alt={story.name} className="w-full h-48 rounded-[18px] object-cover" />
                <span className="mt-4 block text-[16px]">{story.name}</span>
                <span className="mt-2 block text-[13px] leading-[1.6]" style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'normal' }}>{story.quote}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-16 lg:mt-28">
          <div className="photo-cta relative overflow-hidden rounded-[30px] p-7 md:p-12 lg:p-16 text-white">
            <div className="relative z-10 max-w-[640px]">
              <div className="inline-flex rounded-full px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase bg-white/15">Ready To Slay</div>
              <h2 className="text-[30px] lg:text-[48px] leading-[0.9] mt-3 max-w-[520px]">Book Your Luxury Session Now</h2>
              <p className="mt-4 text-[14px] leading-[1.6]" style={{ fontWeight: 400, fontStyle: 'normal' }}>
                Tell us your dream look and we will make it happen.
              </p>
              <Link to="/booking" className="mt-6 px-10 py-5 rounded-full bg-white text-[12px] tracking-[0.15em] uppercase text-black min-h-[56px] btn-3d inline-flex items-center justify-center">
                Book Appointment →
              </Link>
              <p className="mt-5 text-[10px] tracking-[0.15em] uppercase opacity-80">East Legon Open Daily</p>
            </div>
            <div className="pointer-events-none absolute -right-10 -bottom-28 h-[340px] w-[340px] rounded-full border border-white/25" />
            <div className="pointer-events-none absolute -right-3 -bottom-20 h-[260px] w-[260px] rounded-full border border-white/20" />
          </div>
        </section>
      </div>

      {activeStory && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`${activeStory.name} story`}>
          <div className="relative w-full max-w-md rounded-[24px] bg-[#F7F1E6] p-2">
            <div className="flex gap-1 p-2">
              {testimonials.map((story) => <div key={story.name} className={`h-1 flex-1 rounded-full ${story.name === activeStory.name ? 'bg-[var(--gold)]' : 'bg-black/20'}`} />)}
            </div>
            <div className="bg-white rounded-[20px] p-8 min-h-96 flex flex-col justify-center text-center">
              <img src={activeStory.image} alt={activeStory.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
              <p className="mt-6 text-xl leading-relaxed">“{activeStory.quote}”</p>
              <p className="mt-4 font-bold text-gold">{activeStory.name}</p>
              <div className="mt-8 flex justify-between">
                <button type="button" onClick={() => setActiveStory(testimonials[(testimonials.indexOf(activeStory) + testimonials.length - 1) % testimonials.length])} className="px-6 py-3 rounded-full bg-charcoal text-beige">Previous</button>
                <button type="button" onClick={() => setActiveStory(testimonials[(testimonials.indexOf(activeStory) + 1) % testimonials.length])} className="px-6 py-3 rounded-full bg-gold text-white">Next</button>
              </div>
            </div>
            <button type="button" onClick={() => setActiveStory(null)} aria-label="Close story" className="absolute top-4 right-4 w-11 h-11 rounded-full bg-charcoal text-beige">×</button>
          </div>
        </div>
      )}
    </main>
  )
}
