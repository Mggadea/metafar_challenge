import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import StockItem from "./StockItem";

interface StocksProps {
  stocks: Array<String>;

}

const StockList : React.FC <StocksProps> = ({stocks}) => {

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
