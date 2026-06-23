const categories = [
  {
    name: "Dog Food",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0nRQo2Itlm9iJ5LPGtKKR2y6ZEX5MHQ3ozVWJvBI3UDnMQ5IoJiUR7lWUtAmvUgPfvlnLobvzbHsQawU70LFCgArULf69FMtVRijan3F-9kXPYV1ds5rqBZHDpApVGz97-9sW2zZeTEHoL5ryc9B466tAay7gicon5ro_YwHjhQmSaZVmncyu99IhPn7EYNXG6EKX_73wAMHBBDfDhPspQqdWqYCy0xmNywkuJy4xm-xW_8C52vOjjcdM7WXttc7RFY2tt5A30Gm2",
  },
  {
    name: "Dog Flea & Tick",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_w9kl6A8_P7kUabT-BJQBfrMHIJscwAl_V1ok3D0uGAEWdhYpR2ugXEN9X7xn8cCUKl2d5qTf566ORO-U35kO2DPK3zh_u2WmCMEm6fsEY1VGof0k4XZCOctTYuq_WNjrem2zliVhVla9OFXteSVkBwJzFPa2x3KEWPj5Ho1ezSUV5CkXJDK2jhSct9NjfgyPsIYUzlX-JgAnHVp1auzOvX8qUGLoP_xf2BIjSKHRKrY3XIW8D8kjPlyfegFvYHOQ0FCKL9AZoYhb",
  },
  {
    name: "Dog Treats",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnt5C9OxB5GUMspJUG2BTsX_J8gJQ0WVRB2wLoBJm6NLCGBOE-broNemysAi90QtFJ24-NF1ob10plbFfzREVpycD2SwvbCeDnP7QEAzwhDvjUS_G7jrpSmbXBFx-fBl2eyqAm7aidoVEmIFDn7Z7iT0hPqLUfq64zzFG1A22POnaa2eggfyiQq_UtwFyHOcSDWS6lffqrtfkLzcHe9tTNULiW9JQBKnvCepR8ngnV06fdttgJVnU2mL4cscJC3tBLk3lUrK4D1WCn",
  },
  {
    name: "Cat Food",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAox4SxeYXei6pHhA6NBp2KG5kLdg4kYwM9s3sbmkBU3sZ0TYcv76GbKu_B5aMptmFRMpqr0w-JUIwes82W-o_iSFV0Ij5uP_nNYqaldX6xmH5Uvj3A_HHDc9ZDFy1zOG6NW9GM5FR51bh78faMOyR7rI1HleC1jZ4xzFdnc1pzw0WsKwmWcqzwVE7NJVH6Ni0-VH66FsEZcRDVU3STR_40wODvg-vF0Mt3_FpUkdPdn2n7H89e5XCmOtx6fVd518MZm0hkxp77mbXW",
  },
  {
    name: "Cat Litter",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBU1Z-rPUP3hgkDMOAK0-LVoKTnfmT8hwAm1dKBBwoZt683Jd2POTf62HOvpEDe-g9rt95ti7VqcekdfmfXvHjB4YBR-ElPKY3I3_p94Erae-vsz9EYoB6Pram4qixMGEuxaxktDdkA7fwKOSBlT1hG0rWPNec21ayiIDUwbHVT5LZ4PsEWzGzUth6t09MgZKkhKFGeJBq9ISvSw-a-sUKOUIAcXwIumSitMZODxpbrQhs6zoSRDdhS__hrTMZ219Ylci-bHPeAj1Q",
  },
  {
    name: "Deals",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJusUeH7yxuiwUvaYaEVp4rDsQAf-mDxREJ_GkdPjQkPGb0uDkX9ByApCTSw9-8nZw4XE2cFAJB_Y1fifUDA8j021RBdPfvQhIWc298a0E1KDOjyAYIb1CNU_RrVV4BWUJ1ASBvg_hNKONWpdFBBY82rLQOrEZ2g0etBV2wposCn18ltikf9MkR_pHSDsH7V1orMOQ8YNuANW6o4DakRVKlZVRmZ9d5ovamTtqoXwir-DzQqJjMaZN81-SwoWQWN6VpGPhTUk7Qhfa",
  },
];

export default function PopularCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 font-headline-lg">
        Explore popular categories
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-surface-container-lowest border border-outline-variant rounded-full flex items-center justify-center mb-2 shadow-sm">
              <img
                alt={cat.name}
                className="w-12 h-12 opacity-90"
                src={cat.src}
              />
            </div>
            <p className="text-xs font-bold">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
