import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import StockItem from "./StockItem";
import { Ionicons } from "@expo/vector-icons";
import Search from "./Search";

interface Stock {
  symbol: string;
  name: string;
  type: string;
  currency: string;
}

interface StocksProps {
  stocks: Array<Stock>;
}

const StockList: React.FC<StocksProps> = ({ search,stocks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return stocks.slice(startIndex, endIndex);
  };

  const handleChangePage = (upOrDown:string) => {

    if (search == ''){
      if (upOrDown === "up") {
        setCurrentPage((prevPage) => prevPage + 1);
      } else if (upOrDown === "down") {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    }
    else(setCurrentPage(1))
 
  };

  return (
    <>
      <View style={styles.listHeader}>
        <Text style={styles.headerCell}>Simbolo</Text>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Moneda</Text>
        <Text style={styles.headerCell}>Tipo</Text>
      </View>
      <FlatList
        data={getPaginatedData()}
        renderItem={({ item }) => (
          <StockItem
            symbol={item.symbol}
            name={item.name}
            type={item.type}
            currency={item.currency}
          />
        )}
        keyExtractor={(item) => item.symbol}
        onEndReachedThreshold={0.1}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => handleChangePage("down")}
          style={styles.button}
        >
          <Ionicons name={"chevron-back"} color={"#2b2b2b"} size={30} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20 }}>Página {currentPage} </Text>
        <TouchableOpacity
          onPress={() => handleChangePage("up")}
          style={styles.button}
        >
          <Ionicons name={"chevron-forward"} size={30} />
        </TouchableOpacity>
      </View>
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
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#f4f4f4",
    height: 30,
    borderRadius: 5,
  },
});
