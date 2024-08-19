import { useState, useEffect } from "react";
import {
  getStockData,
  getLogo,
  getPrice,
  getQuote,
} from "@/services/stockScreenServices";

const useStockDetails = (symbol: string,) => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        setLoading(true);
        const [ quoteData, priceData, logoData] = await Promise.all([
          getQuote(symbol),
          getPrice(symbol),
          getLogo(symbol),
        ]);

        setStockData({
          ...quoteData.data,
          price: priceData.data.price,
          exchange: quoteData.data.exchange,
          percent_change: quoteData.data.percent_change,
          name: quoteData.data.name,
          logo: logoData.data,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  return { stockData, loading, error };
};

export default useStockDetails;
