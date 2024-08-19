import { useState, useEffect } from "react";
import { getStockData } from "@/services/stockScreenServices";
import { dateFormat } from "../helpers/dateFormat";

// Definimos una interfaz para la caché
interface Cache {
  [key: string]: {
    data: any[];
    timestamp: number;
  };
}

const cache: Cache = {};

const useStockChart = (symbol: string, interval: string, date: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = `${symbol}-${interval}-${date}`;

  const loadData = async () => {
    setLoading(true);
    if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < 60000)) { // 1 minuto de caché
      // Si los datos están en caché y no son demasiado antiguos, usamos la caché
      setData(cache[cacheKey].data);
      setLoading(false);
      return;
    }

    try {
      const fetchedData = await getStockData(symbol, interval, date);
      if (fetchedData.data.status === "error") {
        setError(fetchedData.data.message);
        setData([]);
      } else {
        setError(null);
        setData(fetchedData.data.values);
        // Actualizamos la caché con los nuevos datos
        cache[cacheKey] = {
          data: fetchedData.data.values,
          timestamp: Date.now(),
        };
      }
    } catch (err) {
      setError("Failed to fetch data");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [symbol, interval, date]);

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
