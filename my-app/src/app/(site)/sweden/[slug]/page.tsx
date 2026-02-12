import CasinoSidebarCard from "@/components/casino/CasinoSidebarCard";
import CasinoTabs from "@/components/casino/CasinoTabs";
import { CasinoSection } from "@/components/casino/CasinoSection";
import { CasinoBonus } from "@/components/casino/CasinoBonus";
import { CasinoPaymentMethods } from "@/components/casino/CasinoPaymentMethods";
import { CasinoFeatureList } from "@/components/casino/CasinoFeatureList";
import { CasinoProsCons } from "@/components/casino/CasinoProsCons";
import { CasinoGames } from "@/components/casino/CasinoGames";
import CasinoHelpBox from "@/components/home/CasinoHelpBox";
import Breadcrumb from "@/components/Breadcrumb";

export default function CasinoDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Abhi hardcoded rakhe hain (baad me dynamic karenge)

  return (
    <div className="max-w-[1250px] mx-auto px-4 lg:px-6 mt-8">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT SIDEBAR CARD */}
        <div>
          <CasinoSidebarCard
            name="Lyra Bet"
            logo="/Group92.png"
            rating={4}
            bonus="200% up to $3,000 + 30 free spins"
            features={[
              "Min deposit: €10",
              "Games: 2,500+",
              "License: Curacao",
              "Avg payout: 0-24h",
            ]}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          <Breadcrumb
            items={[
              { label: "CasinoTop", href: "/" },
              { label: "Sweden", href: "/sweden" },
              { label: "USA" },
            ]}
          />
          <CasinoTabs
            tabs={[
              "Overview",
              "Bonuses",
              "Games",
              "Payment Methods",
              "Mobile & UX",
              "FAQ",
              "Pros & Cons",
            ]}
          />

          <CasinoSection title="Overview">
            <p className="text-black text-sm">
              LyraBet Casino is a stylish, modern platform offering both
              sportsbook and casino games. With a strong Curacao license and
              partnerships with top-tier providers, it’s a great pick for
              players looking for variety, fast payouts and generous bonuses.
            </p>
          </CasinoSection>

          <CasinoSection title="Bonuses">
            <CasinoBonus
              newBonus={
                <>
                  <strong>100%</strong> welcome bonus up to{" "}
                  <strong>$500 + 100 free spins</strong> on first deposit.
                </>
              }
              newTerms="40x wagering, max bet $5"
              existingBonus="Weekly cashback and reload bonuses"
            />
          </CasinoSection>

          <CasinoSection title="Games">
            <CasinoGames
              description={
                <>
                  LyraBet features <strong>3,000+</strong> games including
                  slots, table games, live dealer, and virtual sports.
                </>
              }
              providers="NetEnt, Play’n GO, Pragmatic Play, Evolution."
              highlight="Exclusive slots and tournaments are available every month."
            />
          </CasinoSection>

          <CasinoSection title="Payment Methods">
            <CasinoPaymentMethods
              methods={[
                { name: "Visa / Mastercard", image: "/icons/visamaster.png" },
                { name: "Revolut / AstroPay", image: "/icons/revoult.png" },
                {
                  name: "Bitcoin, Ethereum, Litecoin",
                  image: "/icons/cryptos.png",
                },
                { name: "Bank transfer (SEPA)", image: "/icons/sepaa.png" },
              ]}
              note="Minimum deposit: $10 • Fast withdrawals (1–2 hours for e-wallets & crypto)"
            />
          </CasinoSection>

          <CasinoSection title="Mobile & UX">
            <CasinoFeatureList
              intro="Lyra Bet is fully optimized for mobile and tablet use, with:"
              items={[
                "No-download instant play via browser",
                "Fast loading times and smooth navigation",
                "Intuitive user interface with dark mode option",
                "Dedicated mobile support and touch-optimized games",
              ]}
            />
          </CasinoSection>

          <CasinoSection title="FAQ">
            <CasinoHelpBox />
          </CasinoSection>

          <CasinoSection title="Pros & Cons">
            <CasinoProsCons
              pros={[
                "Excellent welcome bonus",
                "Sportsbook + casino in one platform",
                "Fast crypto payouts",
              ]}
              cons={[
                "40x wagering slightly above average",
                "No MGA license (Curacao only)",
              ]}
            />
          </CasinoSection>
        </div>
      </div>
    </div>
  );
}
