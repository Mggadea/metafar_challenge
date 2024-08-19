import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Loading from "./Loading";

interface HeaderProps {
  stockDetails:string[];
  symbol: string;
}

const DetailsHeader: React.FC<HeaderProps> = ({ stockDetails,symbol }) => {

  const { price, exchange, percent_change, name, logo } = stockDetails || {};
  
  return (
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
    fontSize: 18,
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
