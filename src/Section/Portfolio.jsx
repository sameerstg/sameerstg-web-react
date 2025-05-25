import React, { useEffect, useState } from "react";
import ImageSlider from "../Components/ImageSlider";
import { fetchPublicPortfolio } from "../../methods/portfolio";

function Portfolio() {
  const [portfolios, setportfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPortfolios() {
    setLoading(true);
    const ports = await fetchPublicPortfolio();
    setportfolios(ports);
    setLoading(false);
  }

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <div className="tablet:mx-2 flex-col gap-10 flex justify-center">
      {loading ? (
        <div className="text-center text-lg py-10">Loading...</div>
      ) : (
        portfolios.map((port) => (
          <ImageSlider
            key={port.id}
            link={port.link}
            title={port.title}
            contents={port.portfolioItems}
          />
        ))
      )}
    </div>
  );
}

export default Portfolio;
