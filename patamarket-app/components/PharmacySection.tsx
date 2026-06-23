export default function PharmacySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col md:flex-row border border-outline-variant shadow-sm">
        {/* Video/Image side */}
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <img
            alt="Chewy Pharmacy"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc3Eey7I5gFQ7Zw_i_wHW7vXL1DJqnvKpzXKBVp3CFDibz467uK5VDRjbPPasYnzd-izAvSwe7oK-6xBOA_bNhaxORGXh5tGOTme3HaeQZq38ty6iYXo0a6uTdztZom3G-JkD_YxkL8dh49Hwa3el8ahmca0fEe-L7zW0NphnlvEmEMKRLzGSAELIUCWSjLo-omo4scAWmzY1R-YHTyoqZTVgqKg2KFAVZu8FBhnTlUPjTdbytyIWJwCYflLgHYkOObPaeVJ2fxSvd"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-primary bg-opacity-90 p-4 rounded-xl text-on-primary">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.5 3.5v13L16 10 4.5 3.5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 font-headline-lg text-primary">
            50% off your first pharmacy Autoship order
          </h2>
          <p className="text-on-surface-variant mb-6 font-medium">
            Chewy Pharmacy has the pet meds you trust at low prices every day. We
            make the Rx process easy - our licensed pharmacists work with your vet
            to get your prescription approved, then we ship fast to your door.
          </p>
          <button className="bg-surface-container-lowest border-2 border-primary text-primary font-bold px-8 py-2 rounded-full w-max hover:bg-primary-fixed transition">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
