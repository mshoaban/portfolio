import PortfolioHome from "@/components/PortfolioHome";
import { Analytics } from '@vercel/analytics/next';


export default function Home() {
  // commenting out the PortfolioHome component to use the PortfolioHome component + Vercel analytics 
  // return <PortfolioHome />;
  return (
    <>
      <PortfolioHome />
      <Analytics />
    </>
  );
}
