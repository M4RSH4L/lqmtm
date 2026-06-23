import TopPromoBar from "@/components/TopPromoBar";
import HeroBanner from "@/components/HeroBanner";
import LoginAutoshipSection from "@/components/LoginAutoshipSection";
import PetCategoryGrid from "@/components/PetCategoryGrid";
import ChewyPlusBanner from "@/components/ChewyPlusBanner";
import ProductMarquee from "@/components/ProductMarquee";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import BlogSection from "@/components/BlogSection";
import PopularCategories from "@/components/PopularCategories";
import PharmacySection from "@/components/PharmacySection";
import PetParentingMadeEasy from "@/components/PetParentingMadeEasy";
import RoyalCaninBanner from "@/components/RoyalCaninBanner";
import StoreLocations from "@/components/StoreLocations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopPromoBar />
      <HeroBanner />
      <LoginAutoshipSection />
      <PetCategoryGrid />
      <ChewyPlusBanner />
      <ProductMarquee />
      <ReviewsMarquee />
      <BlogSection />
      <PopularCategories />
      <PharmacySection />
      <PetParentingMadeEasy />
      <RoyalCaninBanner />
      <StoreLocations />
      <Footer />
    </>
  );
}
