import { useState, useEffect } from 'react';
import { fetchStocks } from '../services/homeServices';

type Stock = {
  symbol: string;
  name: string;
  currency: string;
  type: string;
};

const useStocks = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const loadData = async () => {
    try {
      const fetchedData = await fetchStocks();
      setStocks(fetchedData);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    loadData();
  }, []);

  return { stocks, loading, error };
};

export default useStocks;
