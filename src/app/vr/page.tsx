'use client'
import { useEffect, useState } from "react";
import ImageSlider from "@/Components/ImageSlider";
import { fetchPrivatePortfolio } from "../../../methods/portfolio";

export default function Page() {
  const [portfolios, setportfolios] = useState<any>([]);
  async function getPortfolios() {
    const ports = await fetchPrivatePortfolio("VR Simulations");
    console.log(ports);
    setportfolios(ports as any);
  }
  useEffect(() => {
    getPortfolios();
  }, []);
  useEffect(() => { }, [portfolios]);
  return (
    <div>
      <div className="text-primary text-2xl laptop:text-4xl font-bold text-center mt-10">VR Simulations</div>
      <div className="tablet:mx-2  flex-col gap-10 flex justify-center ">
        {portfolios.map((port: any) => port.portfolioItems.map((p: any) => (
          <ImageSlider
            key={p.id}
            link={null}
            title={""}
            contents={[p]}
          />

        )))}
      </div>
    </div>
  );
}
