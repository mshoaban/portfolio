import PortfolioHome from "@/components/PortfolioHome";
import { Analytics } from '@vercel/analytics/next';


export default function Home() {
  // return <PortfolioHome />;
  return (
    <>
      <PortfolioHome />
      <Analytics />
    </>
  );
}
