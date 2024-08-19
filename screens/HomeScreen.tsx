import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { useState } from "react";
import StockItem from "@/components/StockItem";
import Search from "@/components/Search";
import StockList from "@/components/StockList";
import useStocks from "@/hooks/useStocks";
import Loading from "@/components/Loading";

export default function HomeScreen() {
  const [search, setSearch] = useState<string>("");
  const { stocks, loading, error } = useStocks();
  const [focused, setFocused] = useState(false);

  const filteredData = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
      stock.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Acciones</Text>
      <Search
        search={search}
        setSearch={setSearch}
        focused={focused}
        setFocused={() => setFocused(true)}
      />
      {error && <Text>{error}</Text>}
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
