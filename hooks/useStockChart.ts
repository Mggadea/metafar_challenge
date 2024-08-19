import { useState, useEffect } from "react";
import { getStockData } from "@/services/stockScreenServices";
import { dateFormat } from "../helpers/dateFormat";

const useStockChart = (symbol: string, interval: string, date:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const fetchedData = await getStockData(symbol, interval, date);
      if (fetchedData.data.status === "error") {
        setError(fetchedData.data.message);
      } else {
        setData(fetchedData.data.values);
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [interval]);

  const chartData = {
    labels: (
      data?.map((d) => dateFormat(d.datetime, interval)) || []
    ).reverse(),
    datasets: [
      {
        data: (
          data?.map((d) => {
            const value = parseFloat(d.close);
            return isNaN(value) || !isFinite(value) ? 0 : value;
          }) || []
        ).reverse(),
      },
    ],
  };

  return { chartData, loading, error, loadData };
};

export default useStockChart;
