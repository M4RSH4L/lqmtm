const features = [
  {
    alt: "App Support",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2JxgiyOAofHUavVnKT7W2sjsusCJFPfA6v4aYKGFnUyQYuFQJkapCCV2Bfifi2enWL0XVJz9eWghe4md2qV7sOEI2Ztu2EVZoiszrF-9cqCOOtXREpyYir7qk7xCoMjCkWjagD8I5FrFFfhwDSrS2I65Y9UwKzKxRqF0qvl0URZayA1PEQYj5Np9-zkkvIMgEGZWzJ5VJXkIWc6keQ1-c3K29Dv8NEQ6RrTFuY_oEKXxAmwaN4QaKatSVo5xjxo9GL2_urL4EuD2F",
    label: "Award-winning 24/7 customer care",
  },
  {
    alt: "Vet Team",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM0f2MYW939a-6LdiBV3mFC5GiyeED5IVsKwEGdIpS3cbvLK4SkcQ5HpF6uYcCo--_urDv8tNWJwDcb_pzXC6coSeBF1RG0YjxkzEfPduiYIBYCFwvF4SSZwS-SV33LHciVLtBBhIh6VE4TF2tJ9OShcEc2FSKJA6QBGwrS1FAcN4JiSTe48ByiQeXtoogUGy1O6bbivPLV2me6r9FjkzfTTj809JYCcWWW514VPQI3u7mJQGupIREwHhJN2f7Jj4cn2L2mcf3aj5O",
    label: "Chat free with our licensed vet team",
  },
  {
    alt: "Prescription meds",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2H3o0A_bzwk3vMTRWaRFXI200d8QjfUThyLwREYMp2EF68Qjr6ZzoXy6kXvOTuBMRmnR4Rp_3vveTlQKtBIN7YtTnZnd0z5zR5sGrjppd8FnxAc8qiSXd06vuRdetkHYAr-orpj6M9RRNo0BK3UsAVCRaMv0OUiFcm55eP5wqKL1Ie9QLCoH4wiUjIDNjtZfHTXR20mQMScsV4LrHkFGG1gt0Qij8DXZQTWS46hNNXN6GrUi64QRtOokPxtlVWit7FWpVUW4m1AYO",
    label: "Prescription meds, delivered fast",
  },
  {
    alt: "Pet Insurance",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPzeVauLbfb6Tq91N1d-49L8os5bLHC4FARXIO66RLfidrP38XD-C7RfjpqlX9nATlZ2CMJC_rF0HEC3Ima2-ItUvPS6FhKoPwsSuD3OtAYPk59FReV4mqUCyJHjbaldIKsQtz3LJ8XLa99oEL5ufk2i0viPB1SYSBlex27Xuv2igdRImeKgwCHTU_hu2PWqQPmrq_mE5fKpWS-5yomhwMUBHYfhHalUjMqbgUieSiaakhIV0xr97nENnxXJa06oeO5Dx6yr11Faz",
    label: "Discover pet insurance",
  },
];

export default function PetParentingMadeEasy() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 font-headline-lg">
        Pet parenting made easy
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div
            key={feature.alt}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-center shadow-sm"
          >
            <img
              alt={feature.alt}
              className="mx-auto mb-4 h-40 object-contain"
              src={feature.src}
            />
            <p className="text-sm font-bold">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
