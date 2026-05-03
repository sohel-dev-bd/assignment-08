import Banner from "@/components/Banner";
import FeaturedTilesSection from "@/components/FeaturedTilesSection";
import NewsMarquee from "@/components/NewsMarquee";
import FeaturedTiles from "@/components/NewsMarquee";


export default function Home() {
  return (
    <div>
      <Banner/>
      <NewsMarquee />
      <FeaturedTilesSection />
    </div>
  );
}
