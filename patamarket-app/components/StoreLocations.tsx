const branches = [
  "Sucursal 1",
  "Sucursal 2",
  "Sucursal 3",
  "Sucursal 4",
  "Sucursal 5",
];

export default function StoreLocations() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-8"
      data-purpose="store-locations"
    >
      <div className="bg-primary rounded-2xl p-8 text-on-primary shadow-lg">
        <h2 className="text-2xl font-bold mb-8 font-headline-lg text-center">
          Nuestras Sucursales
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {branches.map((branch) => (
            <div
              key={branch}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-md group-hover:scale-110 transition border-4 border-deal-yellow">
                <span className="material-symbols-outlined text-xl">
                  location_on
                </span>
              </div>
              <span className="text-[10px] font-bold mt-2 opacity-90">
                {branch}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
