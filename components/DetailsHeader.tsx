import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailsHeader = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        setLoading(true);
        const [quoteResponse, priceResponse, logoResponse] = await Promise.all([
          axios.get(
            `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=31e2c4c7403e499bb29c52dbddf6a07c`
          ),
          axios.get(
            `https://api.twelvedata.com/price?symbol=${symbol}&apikey=31e2c4c7403e499bb29c52dbddf6a07c`
          ),
          axios.get(
            `https://api.twelvedata.com/logo?symbol=${symbol}&apikey=31e2c4c7403e499bb29c52dbddf6a07c`
          ),
        ]);

        setStockData({
          ...quoteResponse.data,
          ...priceResponse.data,
        });
        setLogoUrl(logoResponse.data.url); // Assuming 'logo_url' is the field containing the logo URL
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { price, exchange, percent_change, name } = stockData || {};

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {logoUrl && <Image source={{ uri: logoUrl }} style={styles.logo} />}
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
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:'100%',
    paddingVertical:20,paddingHorizontal:10,
    borderBottomWidth: 1,
    borderBottomColor: "#f4f4f4",
    marginBottom:40,
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
