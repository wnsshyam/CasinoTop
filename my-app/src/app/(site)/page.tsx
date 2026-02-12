import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import TopCasinoList from "@/components/home/TopCasinoList";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import Footer from "@/components/layout/Footer";
import LatestArticles from "@/components/LatestArticles";
import CasinoHelpBox from "@/components/home/CasinoHelpBox";
import SwedenCasinoInfo from "@/components/home/SwedenCasinoInfo";
import ExploreMore from "@/components/home/ExploreMore";
import Breadcrumb from "@/components/Breadcrumb";




export default function Home() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto px-4 lg:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <Breadcrumb
              items={[
                { label: "CasinoTop", href: "/" },
                { label: "Sweden", href: "/sweden" },
                { label: "USA" },
              ]}
            />
            <HeroSection />
            <TopCasinoList />
            <WhyTrustUs />
            <CasinoHelpBox />
            <SwedenCasinoInfo />
            <ExploreMore />
          </div>

          <LatestArticles />
        </div>

        {/* <div className="mt-14"></div> */}
      </div>
    </>
  );
}
