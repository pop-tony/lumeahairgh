import { useState } from 'react'

const stories = [
  { name: 'Ama', text: 'LUMEAHAIRGH gave me the best bone straight wig I have ever worn. Quality is unmatched!', avatar: 'A' },
  { name: 'Efua', text: 'My bridal hair was flawless. Everyone asked where I got it.', avatar: 'E' },
  { name: 'Adwoa', text: 'Customer service is top notch and the hair lasts long. Worth every cedi.', avatar: 'A' },
  { name: 'Akosua', text: 'Ghana weaving is so neat and premium. I keep coming back.', avatar: 'A' },
  { name: 'Serwaa', text: 'Frontal installation is seamless. It looks so natural.', avatar: 'S' },
  { name: 'Yaa', text: 'Luxury truly. You can feel the quality.', avatar: 'Y' },
]

export default function Stories() {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeStory = activeIndex === null ? null : stories[activeIndex]

  const moveStory = (direction) => {
    setActiveIndex((index) => {
      if (index === null) return null
      const next = index + direction
      return next >= 0 && next < stories.length ? next : index
    })
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="font-bold italic tracking-widest text-gold">REAL STORIES, REAL BEAUTY</p>
      <h1 className="mt-3 text-5xl font-bold italic md:text-7xl">Stories</h1>
      <p className="mt-4 text-lg opacity-70">A few love notes from our LUMEAHAIRGH family.</p>
      <div className="no-scrollbar mt-10 flex gap-6 overflow-x-auto pb-4">
        {stories.map((story, index) => (
          <button
            key={`${story.name}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="flex min-h-28 shrink-0 flex-col items-center gap-2"
            aria-label={`Read ${story.name} story`}
          >
            <span className="h-20 w-20 rounded-full bg-gradient-to-tr from-gold via-goldDeep to-beige p-1">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-bold italic text-charcoal">
                {story.avatar}
              </span>
            </span>
            <span className="text-sm font-bold italic">{story.name}</span>
          </button>
        ))}
      </div>
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="image-glow h-96 overflow-hidden rounded-[2rem]">
          <img src="/images/hair-editorial.jpg" alt="A LUMEAHAIRGH hair style inspiration" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center rounded-[2rem] bg-charcoal p-8 text-beige md:p-12">
          <p className="text-sm font-bold italic tracking-widest text-gold">A NOTE FROM OUR CLIENTS</p>
          <h2 className="mt-4 text-4xl font-bold italic">Beauty is better when it is shared.</h2>
          <p className="mt-4 leading-relaxed opacity-75">Tap a story above to hear about a favourite look, a special day or a new confidence.</p>
        </div>
      </section>
      {activeStory && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label={`${activeStory.name} story`}>
          <div className="relative w-full max-w-md rounded-[2rem] bg-beige p-2">
            <div className="flex gap-1 p-2">
              {stories.map((story, index) => (
                <div key={`${story.name}-progress`} className={`h-1 flex-1 rounded-full ${index <= activeIndex ? 'bg-gold' : 'bg-black/20'}`} />
              ))}
            </div>
            <div className="flex min-h-96 flex-col justify-center rounded-[1.5rem] bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-2xl font-bold italic text-white">
                {activeStory.avatar}
              </div>
              <p className="mt-6 text-xl leading-relaxed">“{activeStory.text}”</p>
              <p className="mt-4 font-bold italic text-gold">{activeStory.name}</p>
              <div className="mt-8 flex justify-between gap-4">
                <button type="button" onClick={() => moveStory(-1)} disabled={activeIndex === 0} className="min-h-11 rounded-full bg-charcoal px-6 py-2 font-bold italic text-beige disabled:opacity-40">
                  Previous
                </button>
                <button type="button" onClick={() => moveStory(1)} disabled={activeIndex === stories.length - 1} className="min-h-11 rounded-full bg-gold px-6 py-2 font-bold italic text-white disabled:opacity-40">
                  Next
                </button>
              </div>
            </div>
            <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close story" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-xl text-beige">
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
