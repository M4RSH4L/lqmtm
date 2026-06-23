const articles = [
  {
    category: "Nutrition",
    title: "The Ultimate Guide to Puppy Nutrition",
    description:
      "Learn about the essential nutrients your growing pup needs for a healthy start in life.",
  },
  {
    category: "Training",
    title: "5 Positive Reinforcement Training Tips",
    description:
      "Make training sessions fun and effective with these science-backed techniques for all pets.",
  },
  {
    category: "Health",
    title: "Understanding Senior Pet Care Needs",
    description:
      "As your companions age, their requirements change. Here's how to provide the best care.",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8" data-purpose="blog-section">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline-lg">
          Comunidad PataMarket
        </h2>
        <a
          className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
          href="#"
        >
          View all articles
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.title}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-outline-variant flex flex-col"
          >
            <div className="w-full h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-outline-variant">
                image
              </span>
            </div>
            <div className="p-5 flex-grow">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="text-lg font-bold mt-2 font-headline-md leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">
                {article.description}
              </p>
            </div>
            <div className="px-5 pb-5 mt-auto">
              <a
                className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
