import { useState, type FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to newsletter subscription endpoint
  }

  return (
    <footer id="contact" className="w-full bg-[#F6F1E9] text-[#2b2b2b] font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-3 gap-14">
        {/* Hours */}
        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C97B4A] mb-6">Hours</p>
          <ul className="space-y-2 text-[14px] text-[#2b2b2b]/80">
            <li className="flex justify-between max-w-[220px]">
              <span>Mon – Fri</span>
              <span>8:00 – 22:00</span>
            </li>
            <li className="flex justify-between max-w-[220px]">
              <span>Sat – Sun</span>
              <span>9:00 – 23:00</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C97B4A] mb-6">Find Us</p>
          <p className="text-[14px] leading-[1.8] text-[#2b2b2b]/80 mb-3">
            12 Rue de la Paix
            <br />
            Saint-Somewhere, 12345
          </p>
          <p className="text-[14px] text-[#2b2b2b]/80 mb-4">+00 0 00 00 00 00</p>
          <a href="#" aria-label="Facebook" className="inline-flex hover:opacity-60 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#C97B4A] mb-6">Stay In The Loop</p>
          <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#2b2b2b]/25 focus-within:border-[#2b2b2b] max-w-xs pb-2">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[13px] placeholder-[#2b2b2b]/40"
            />
            <button type="submit" aria-label="Subscribe" className="text-[#2b2b2b] hover:opacity-60 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#2b2b2b]/10">
        <p className="text-center text-[11px] text-[#2b2b2b]/40 py-6">
          © {new Date().getFullYear()} Your Restaurant Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}