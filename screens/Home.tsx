import { SafeAreaView, StyleSheet } from "react-native";
import StockItem from "@/components/StockItem";
import Search from "@/components/Search";
import StockList from "@/components/StockList";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Stocks </Text>
      <Search />
      <StockList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
