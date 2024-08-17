import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import StockItem from "@/components/StockItem";
import Search from "@/components/Search";
import StockList from "@/components/StockList";
import axios from "axios";


type Stock = {
  symbol: string;
  name: string;
  currency: string;
  type:string;
};

export default function Home() {
  const [search, setSearch] = useState<String>(""); 
  
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const API_KEY = "31e2c4c7403e499bb29c52dbddf6a07c";
  const API_URL = `https://api.twelvedata.com/stocks?source=docs&exchange=NASDAQ&apikey=${API_KEY}`;

  const fetchStocks = async () => {
    try {
      const response = await axios.get(API_URL);
      setStocks(response.data.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const filteredData = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
      stock.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Stocks</Text>
      <Search search={search} setSearch={setSearch} />
      <StockList search={search} stocks={filteredData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    padding: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
