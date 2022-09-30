import { useRouter } from "next/router";

function PortfolioDetailsPage() {
  const router = useRouter();
  
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <h3>{router.query.id}</h3>
    </div>
  );
}

export default PortfolioDetailsPage;
