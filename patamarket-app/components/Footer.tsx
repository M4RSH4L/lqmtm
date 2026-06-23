"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-inverse-surface text-on-primary-fixed-variant mt-12"
      data-purpose="main-footer"
    >
      {/* Contact Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 items-center border-b border-outline">
        <div className="flex items-center gap-4 py-4 justify-center md:justify-start">
          <span className="text-xs font-bold opacity-80 uppercase tracking-widest">
            Our experts are available 24/7:
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <a
            className="flex items-center gap-2 font-bold text-xl text-on-primary"
            href="tel:18006724399"
          >
            <svg className="w-6 h-6 text-primary-fixed" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            1-800-672-4399
          </a>
          <a
            className="flex items-center gap-2 font-bold text-xl text-on-primary"
            href="#"
          >
            <svg className="w-6 h-6 text-primary-fixed" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            </svg>
            chat now
          </a>
        </div>
        <div className="flex justify-center md:justify-end py-4">
          <button
            className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-opacity-90 transition"
            onClick={scrollToTop}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Back to Top
          </button>
        </div>
      </div>

      {/* Links & Social */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-4 text-xs font-medium opacity-80 justify-center">
          <span>🇺🇸 United States</span>
          <a className="hover:text-primary transition" href="#">About</a>
          <a className="hover:text-primary transition" href="#">Help</a>
          <a className="hover:text-primary transition" href="#">Give Back</a>
        </div>
        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a
            className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-inverse-surface hover:bg-primary transition"
            href="#"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-inverse-surface hover:bg-primary transition"
            href="#"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="bg-surface-container-highest py-6 text-[10px] text-on-surface-variant text-center uppercase font-bold"
        data-purpose="copyright-bar"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          <span>Copyright © 2024 Caregiver&apos;s Table by Chewy</span>
          <a className="hover:text-primary" href="#">Terms of Use</a>
          <a className="hover:text-primary" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
