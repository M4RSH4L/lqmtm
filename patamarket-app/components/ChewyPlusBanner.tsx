export default function ChewyPlusBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col md:flex-row items-center justify-between border border-outline-variant shadow-sm">
        <div className="flex items-center gap-6">
          <img
            alt="Chewy Plus Logo"
            className="h-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Wgda5ZvxDHgHUJQL8k5NYB3nklHSnmHi3cZMgY6KfUtEhTfuOaCAPrAbrGLGWxCIwxB1WsAysavZx8G_lWU8kEtnFCmu7LJG1DcAuGL1rd1zZGK6FuIkRX_6eFip_CMWxI4J2GHC0GJzqQ9nBRjc7ey2SlPnGJaHp3xliSJJl8BmVJV_bd7eVNSSx89s4qnc9xeVBHQ0opJksLYn4Kt7Ni6wCLZWpglSgvFH1bAHVakSIFm7cO52NJlLni5VNPJqfaTZ2jVuLGYB"
          />
          <div>
            <h3 className="text-2xl font-black text-primary font-headline-md">
              Free shipping and 5% rewards
            </h3>
            <p className="text-text-muted font-medium">Save &amp; earn on everything.</p>
          </div>
        </div>
        <button className="mt-4 md:mt-0 bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition">
          Start free trial
        </button>
      </div>
    </section>
  );
}
