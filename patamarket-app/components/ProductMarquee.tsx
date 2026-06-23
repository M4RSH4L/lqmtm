"use client";

import { useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    badge: "Deal",
    alt: "Frisco Toy",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZATNgzEzO52mPdFW7PM5iG-A4iTWoaI4KBCBTGBd3MZr6xV-n63hQm_w_CitVUUgS6Sefhu9yoJTXLgqNPkq0rMrCK5armtTwUGEpRZc7RVNTVihr0DLsUB6QC4R7BUEJ_fnc8ckzgvMXoPVk71tGHj-98vyft9jS6btla5F37hkngm1z2yBEN7zgANbIQbJmRNMW9swX4jm6kRoIK5Hsa7RhGlKKez2vj-Cp1cgE_F37OPeRPStUSSWUOUbVwKDSJVpJSYCbL9tb",
    brand: "Frisco",
    name: "Americana Squeaky Tennis Ball Dog Toy, Medium, 3 count",
    price: "$6.99",
    tag: "New Customers Only",
  },
  {
    id: 2,
    badge: "Deal",
    alt: "Frisco Dress",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOae_JmXv8UXDdx5bBTg38uAl6bCRrsHPyek3noW59Jxp0cX_q3iWul44ebscjZiS9qgVSuhbYi-bBAtmkYdnYxX3uru9m1wjkboHcFtQkQ1mTuoxXgpLKl3roJQcfVC8JQbd9Diooywoxu1420IELMmMC0zjHhSaeVNoRxrvJetGLn2Wb6_k43ytH6btcjM4OtJfqFOra4GJ22re7KnUU3M4KaRPMeejORCZOFRmFwChbnijIycd2QcZnRPqyd_9EQF0fOFpkJbwC",
    brand: "Frisco",
    name: "Americana Flag Ruffle Dog & Cat Dress, X-Small",
    price: "$13.99",
    tag: null,
  },
  {
    id: 3,
    badge: "Deal",
    alt: "Collar",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRH14_AShZm544VoezGsj0TXCExk9nkIoMiEK9AAvgSAIaK21HmrfLxJskxbbcL03pstOKPeseYCyVF7cB3tLhp7_p90PznYUUq8Pt5LWRX-nbuRx0qtF36ENgFmQ6GzwKa1HQyhi26ymATLfes06kTMB3sJmvVLR5Q-kfDol-I7e6KKXyPVmgqE3TIWYWGZ5PaXtkMD4mF2sHbKuV2mUOqxTk2tSrnibdEfRa5-hu7LPVDw24OBmx0Q9NPZ7bh-AwBrArl9H7Hy-0",
    brand: "Frisco",
    name: "American Flag Polyester Dog Collar, Large",
    price: "$10.99",
    tag: null,
  },
  {
    id: 4,
    badge: "Deal",
    alt: "Frisco Toy",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZATNgzEzO52mPdFW7PM5iG-A4iTWoaI4KBCBTGBd3MZr6xV-n63hQm_w_CitVUUgS6Sefhu9yoJTXLgqNPkq0rMrCK5armtTwUGEpRZc7RVNTVihr0DLsUB6QC4R7BUEJ_fnc8ckzgvMXoPVk71tGHj-98vyft9jS6btla5F37hkngm1z2yBEN7zgANbIQbJmRNMW9swX4jm6kRoIK5Hsa7RhGlKKez2vj-Cp1cgE_F37OPeRPStUSSWUOUbVwKDSJVpJSYCbL9tb",
    brand: "Frisco",
    name: "Americana Squeaky Tennis Ball Dog Toy, Medium, 3 count",
    price: "$6.99",
    tag: null,
  },
];

export default function ProductMarquee() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const content = inner.innerHTML;
    inner.innerHTML = content + content;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      inner.classList.remove("animate-marquee-left");
      inner.style.overflowX = "auto";
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Fixed Intro Card */}
        <div className="bg-tertiary-container p-6 rounded-xl md:w-1/4 border border-outline-variant flex-shrink-0 z-10 shadow-lg">
          <h3 className="text-2xl font-bold mb-2 font-headline-md text-on-tertiary">
            Gear up for the 4th
          </h3>
          <p className="text-sm text-on-tertiary-container mb-4 font-medium">
            Celebrate with patriotic picks for your bestie, from apparel to toys,
            collars and more.
          </p>
          <a
            className="text-on-tertiary font-bold text-sm flex items-center gap-1 hover:underline"
            href="#"
          >
            Shop all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>

        {/* Scrolling Product Section */}
        <div className="md:w-3/4 marquee-container" id="product-marquee">
          <div
            ref={innerRef}
            className="marquee-content animate-marquee-left"
            id="product-marquee-inner"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 relative group cursor-pointer shadow-sm hover:shadow-md transition w-64 flex-shrink-0"
              >
                <span className="absolute top-2 left-2 bg-deal-yellow text-on-secondary-fixed text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  {product.badge}
                </span>
                <img
                  alt={product.alt}
                  className="w-full aspect-square object-contain mb-4"
                  src={product.src}
                />
                <p className="text-xs font-bold leading-tight line-clamp-2">
                  <span className="text-primary">{product.brand}</span>{" "}
                  {product.name}
                </p>
                <p className="text-xl font-black mt-2 text-primary">
                  {product.price}
                </p>
                {product.tag && (
                  <div className="mt-2 text-[10px] text-text-muted flex items-center gap-1">
                    <span className="bg-surface-container-high text-primary px-1 font-bold">
                      {product.tag}
                    </span>
                  </div>
                )}
                <button className="mt-4 w-full bg-deal-yellow text-on-secondary-fixed rounded-full py-2 font-black text-sm hover:opacity-90 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
