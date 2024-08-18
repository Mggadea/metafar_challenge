import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import {
  fetchStockData,
  getLogo,
  getPrice,
  getQuote,
} from "@/services/stockScreenServices";

const DetailsHeader = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStockData = useCallback(async (symbol: string) => {
    try {
      setLoading(true);
      const [quoteData, priceData, logoData] = await Promise.all([
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
  }, []);

  useEffect(() => {
    fetchStockData(symbol);
  }, [symbol, fetchStockData]);

  const memoizedStockData = useMemo(() => stockData, [stockData]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { price, exchange, percent_change, name, logo } = memoizedStockData || {};

  return (
  <>
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
 
        {logo && <Image source={{ uri: logo.url }} style={styles.logo} />}
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.stockSymbol}>{name}</Text>
          <Text style={styles.stockName}>
            {symbol} - {exchange}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.stockPrice}>${parseFloat(price).toFixed(2)}</Text>
        <Text style={styles.stockChange}>
          {parseFloat(percent_change).toFixed(2)}%
        </Text>
      </View>
    </View>
  </>

  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f4f4f4",
    marginBottom: 40,
  },
  stockSymbol: {
    fontSize: 20,
    fontWeight: "bold",
  },
  stockPrice: {
    color: "#06f",
    fontSize: 20,
    fontWeight: "bold",
  },
  stockName: {
    fontSize: 16,
    color: "#555",
  },
  stockChange: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
