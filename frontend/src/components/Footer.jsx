const socialLinks = [
  {
    label: 'Instagram',
    path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.2 5.2 0 0 1-5.2 5.2H7.8C4.6 22 2 19.4 2 16.2V7.8A5.2 5.2 0 0 1 7.8 2m-.2 2A3.2 3.2 0 0 0 4.4 7.4v8.4c0 1.8 1.4 3.2 3.2 3.2h8.4a3.2 3.2 0 0 0 3.2-3.2V7.6a3.2 3.2 0 0 0-3.2-3.2H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  },
  {
    label: 'TikTok',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.72a4.83 4.83 0 0 1-1.04-.03z',
  },
  {
    label: 'WhatsApp',
    path: 'M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.74.45 3.44 1.32 4.94L2 22l5.33-1.4a9.87 9.87 0 0 0 4.71 1.2h.01c5.46 0 9.88-4.42 9.88-9.88 0-2.64-1.03-5.12-2.9-6.99A9.82 9.82 0 0 0 12.04 2m0 18.07h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.16.83.84-3.08-.2-.32a8.07 8.07 0 0 1-1.24-4.31c0-4.49 3.65-8.14 8.14-8.14 2.17 0 4.21.85 5.75 2.39a8.07 8.07 0 0 1 2.39 5.75c0 4.49-3.65 8.14-8.12 8.14m4.46-6.07c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.1-.51.1-.1.25-.26.37-.39.12-.13.16-.22.25-.37.08-.15.04-.28-.02-.39-.06-.11-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.28-.23.22-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z',
  },
  {
    label: 'Facebook',
    path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.8h2.54V9.96c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.8h-2.33v6.99A10 10 0 0 0 22 12z',
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 lg:mt-16 bg-[#1A1A18] text-[#F7F1E6] pb-24 md:pb-0">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <div className="text-[16px] lg:text-[18px] tracking-[-0.02em]">LUMEAHAIRGH Hair Studio East Legon Accra Ghana</div>
          <div className="text-[12px] mt-2 opacity-70" style={{ fontWeight: 400, fontStyle: 'normal' }}>
            Crafted with love for queens who know luxury
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, path }) => (
            <a key={label} href="#" aria-label={label} className="w-11 h-11 rounded-full flex items-center justify-center bg-[var(--gold)] hover:scale-110 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
        <div className="text-[11px] tracking-[0.15em] uppercase opacity-60">2025 LUMEAHAIRGH All rights reserved</div>
      </div>
    </footer>
  )
}
