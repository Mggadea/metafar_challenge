import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface StockItemProps {
  symbol: string;
  name: string;
  type: string;
  currency: string;
}

const StockItem: React.FC<StockItemProps> = ({
  symbol,
  name,
  type,
  currency,
}) => {
  const navigation = useNavigation();

  const handleNavigation = (symbol: string) => {
    navigation.navigate("StockDetails", { symbol });
  };

  return (
    <View style={styles.itemContainer}>
      <Text
        onPress={() => handleNavigation(symbol)}
        style={[styles.headerCell, styles.stockSymbol]}
      >
        {symbol}
      </Text>

      <Text style={styles.headerCell}>{name.slice(0, 20)}</Text>
      <Text style={styles.headerCell}>{currency}</Text>
      <Text style={styles.headerCell}>{type}</Text>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 80,
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
