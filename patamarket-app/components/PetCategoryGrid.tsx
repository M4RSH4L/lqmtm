const pets = [
  {
    name: "Dog",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAD8Clt-Lz_slu0Rsd2VYB7S1OEXkeCOniZVZVxgYgxFdVs-niuX7XMkQVm5bSqPIzVoPhMkOVfnUU5BpVnB-cB4U0IgvDZ_2ZeLrx-4S0gXtRiwy1zIlcpkvsPgnikBqqRIidvWb07G7DM-zMCU8iTIev7n_uxy0rJ58x5E3ERWjyGuMOWt7X5cAEp-z_T8y7YjERVuv1NLpfGW4Dv8NAscZfs_UNTTHpfywOZd7mRDQt2mJsvYKaRPO4XQSwU9y-TPJ_eoNHqFd7",
  },
  {
    name: "Cat",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApWXe3CE6MPYC_LmxYf06q3jIklVN7YdTKWjXoK1937gFXy3khlWAvZmH7ek0jEOuQE-YS93XQNxejiSDqGYwHwEh4gxjpmlBsGzcp-Bo_CVx02J8Xjfx9EpWq_aJloVIc_OKZS5KJqO0eZRj4PBaH7cVnXoBjTDrblvAMea2h3j2T1Sp1n3ZE-w3nA8Lb0r44huenGXB9--oefIas9I9eUcwEV_11DG5SSLFeyNEW8JkjJJOznCJwftYMnR5ZmdZ6WNVOUc_8bzO8",
  },
  {
    name: "Pet Parent",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGoZQhQFZ0ylG22jFhVwkRObq0ceuVl2OxXIAL_f-0ZAt8Plz6yu3l0pgMTvPK3EZ6MyjU5s1ERmMdYT92otpMZXpAwwiCPltnPnYWkSs7xeTc18uQ3qwz4umDN1f4GO4DDw1i5UaWk4ZdkrExDRNgpPnMLEuPbYLTHS_v1AxSJ4K_grNzw95ZZNsgWAcWymxJWb8N3oJM8E7wR_p0CrzPZPKLyydO--OVJv6obeCgQ4Nk1Ho0T5wxfV9sfQZyN0S4xuj_USN9pco4",
  },
  {
    name: "Horse",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl0BB3bWDunFVC3KYYgm9C79N0JBpfy-dTmBmlwlKVnv1AUnl7KF8lEybJgwAct4kwNks0q2Xg4XTGMKniu82T--EMa1KCyc3vLaHGfuVNaDyik4WozU5o3NJRqPsRjszaBa3g4MPn_rtLXEABo3dWGKdP238CsVVRXVVdc0Q60HPMvt69SBVCCfRQdBJYrLpL43F9P2hYzlny-ayrWIjRlYUzAQca-1KFixP7aYtpkClP-8JoytG2z6GkXiLENTZ4nrzhmLvzjjye",
  },
];

export default function PetCategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 font-headline-lg mb-8">
        Who are you shopping for today?
      </h2>
      <div className="flex flex-wrap justify-center md:gap-12 text-center mt-8 max-w-[85%] mx-auto gap-16">
        {pets.map((pet) => (
          <div
            key={pet.name}
            className="group cursor-pointer flex flex-col items-center w-24 md:w-32"
          >
            <div className="aspect-square rounded-full bg-surface-container-lowest mb-2 overflow-hidden border-2 border-transparent group-hover:border-primary transition shadow-sm">
              <img
                alt={pet.name}
                className="w-full h-full object-cover"
                src={pet.src}
              />
            </div>
            <p className="text-sm font-bold">{pet.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
