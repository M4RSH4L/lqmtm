export default function LoginAutoshipSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      data-purpose="user-dashboard-teaser"
    >
      {/* Login Box */}
      <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold font-headline-md">Hey, friend!</span>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition">
            Sign in
          </button>
        </div>
      </div>

      {/* Autoship Box 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
        <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold">Save 35% on first order</p>
          <a className="text-primary text-xs underline font-medium" href="#">
            Set up an Autoship
          </a>
        </div>
      </div>

      {/* Autoship Box 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center gap-4 shadow-sm">
        <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold">Save 50% on first Pharmacy order</p>
          <a className="text-primary text-xs underline font-medium" href="#">
            Set up a prescription Autoship
          </a>
        </div>
      </div>
    </section>
  );
}
