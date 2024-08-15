import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import StockItem from "./StockItem";
import axios from "axios";

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const API_KEY = "31e2c4c7403e499bb29c52dbddf6a07c";
  const API_URL = `https://api.twelvedata.com/stocks?source=docs&exchange=NASDAQ&apikey=${API_KEY}`;

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(API_URL);
        setStocks(response.data.data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <>
      <View style={styles.listHeader}>
        <Text style={styles.headerCell}>Simbolo</Text>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Moneda</Text>
        <Text style={styles.headerCell}>Tipo</Text>
      </View>
      <FlatList
        data={stocks}
        renderItem={({ item }) => (
          <StockItem
            symbol={item.symbol}
            name={item.name}
            type={item.type}
            currency={item.currency}
          />
        )}
        keyExtractor={(item) => item.symbol}
      />
    </>
  );
};

export default StockList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  listHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical:20,
  },
});
