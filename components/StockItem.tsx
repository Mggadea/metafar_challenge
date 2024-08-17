import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, Link } from "expo-router";


const StockItem = ({ symbol, name, type, currency }) => {

  const navigation = useNavigation()


  return (
    <View style={styles.itemContainer}>
       <Link 
       href={{
        pathname: "/Details",

        params: { symbol: symbol },
      }}       
       style={[styles.headerCell, styles.stockSymbol]}>{symbol}</Link>

      <Text style={styles.headerCell}>{name.slice(0, 20)}</Text>
      <Text style={styles.headerCell} >{currency}</Text>
      <Text style={styles.headerCell}>{type}</Text>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#E5E5E5",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  stockSymbol: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
});
