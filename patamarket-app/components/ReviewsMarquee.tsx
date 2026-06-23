"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Clt-Lz_slu0Rsd2VYB7S1OEXkeCOniZVZVxgYgxFdVs-niuX7XMkQVm5bSqPIzVoPhMkOVfnUU5BpVnB-cB4U0IgvDZ_2ZeLrx-4S0gXtRiwy1zIlcpkvsPgnikBqqRIidvWb07G7DM-zMCU8iTIev7n_uxy0rJ58x5E3ERWjyGuMOWt7X5cAEp-z_T8y7YjERVuv1NLpfGW4Dv8NAscZfs_UNTTHpfywOZd7mRDQt2mJsvYKaRPO4XQSwU9y-TPJ_eoNHqFd7",
    text: "\"PataMarket has the best selection of specialty diets for my senior cat. Fast delivery and the customer service is unmatched!\"",
  },
  {
    id: 2,
    name: "Michael R.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApWXe3CE6MPYC_LmxYf06q3jIklVN7YdTKWjXoK1937gFXy3khlWAvZmH7ek0jEOuQE-YS93XQNxejiSDqGYwHwEh4gxjpmlBsGzcp-Bo_CVx02J8Xjfx9EpWq_aJloVIc_OKZS5KJqO0eZRj4PBaH7cVnXoBjTDrblvAMea2h3j2T1Sp1n3ZE-w3nA8Lb0r44huenGXB9--oefIas9I9eUcwEV_11DG5SSLFeyNEW8JkjJJOznCJwftYMnR5ZmdZ6WNVOUc_8bzO8",
    text: "\"Autoship saved my life! I never worry about running out of puppy food anymore. Great prices too.\"",
  },
  {
    id: 3,
    name: "Elena Gomez",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGoZQhQFZ0ylG22jFhVwkRObq0ceuVl2OxXIAL_f-0ZAt8Plz6yu3l0pgMTvPK3EZ6MyjU5s1ERmMdYT92otpMZXpAwwiCPltnPnYWkSs7xeTc18uQ3qwz4umDN1f4GO4DDw1i5UaWk4ZdkrExDRNgpPnMLEuPbYLTHS_v1AxSJ4K_grNzw95ZZNsgWAcWymxJWb8N3oJM8E7wR_p0CrzPZPKLyydO--OVJv6obeCgQ4Nk1Ho0T5wxfV9sfQZyN0S4xuj_USN9pco4",
    text: "\"The local store experts are so knowledgeable. They helped me find the right collar for my large breed dog.\"",
  },
];

function StarRating({ size = "sm" }: { size?: "sm" | "md" }) {
  const iconSize = size === "md" ? "text-base" : "text-[14px]";
  return (
    <div className={`flex text-deal-yellow ${size === "sm" ? "text-[12px]" : ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`material-symbols-outlined ${iconSize} fill-current`}>
          star
        </span>
      ))}
    </div>
  );
}

export default function ReviewsMarquee() {
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
      inner.classList.remove("animate-marquee-right");
      inner.style.overflowX = "auto";
    }
  }, []);

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-12"
      data-purpose="google-reviews"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-headline-lg mb-2">
          Loved by Pet Parents
        </h2>
        <div className="flex items-center justify-center gap-2">
          <StarRating size="md" />
          <span className="font-bold text-on-surface-variant">
            4.9/5 based on 10,000+ Google reviews
          </span>
        </div>
      </div>

      <div className="marquee-container" id="review-marquee">
        <div
          ref={innerRef}
          className="marquee-content animate-marquee-right"
          id="review-marquee-inner"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant w-80 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                  src={review.src}
                />
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <StarRating size="sm" />
                </div>
              </div>
              <p className="text-sm text-on-surface-variant italic">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
