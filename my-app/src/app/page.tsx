import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import TopCasinoList from "@/components/home/TopCasinoList";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import Footer from "@/components/layout/Footer";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <>
      <Header />

      <div className="max-w-[1250px] mx-auto px-4 lg:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <HeroSection />
            <TopCasinoList />
          </div>

          <LatestArticles />
        </div>

        <div className="mt-16">
          <WhyTrustUs />
        </div>
      </div>

      <Footer />
    </>
  );
}
