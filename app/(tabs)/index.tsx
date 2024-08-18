import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import StockItem from '@/components/StockItem';
import Search from '@/components/Search';
import StockList from '@/components/StockList';
import useStocks from '@/hooks/useStocks';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const { stocks, loading, error } = useStocks();

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
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
