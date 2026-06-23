export default function HeroBanner() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 mt-4"
      data-purpose="hero-section"
    >
      <div className="relative rounded-xl overflow-hidden bg-primary h-[300px] md:h-[400px]">
        <img
          alt="Banner PataMarket"
          className="w-full h-full object-cover object-top"
          src="/banner.png"
        />
      </div>
    </section>
  );
}
