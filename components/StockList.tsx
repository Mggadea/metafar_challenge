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
import PageButtons from "./pageButtons";

interface Stock {
  symbol: string;
  name: string;
  type: string;
  currency: string;
}

interface StocksProps {
  search: string;
  stocks: Array<Stock>;
}

const StockList: React.FC<StocksProps> = ({ search, stocks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(stocks.length / itemsPerPage);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return stocks.slice(startIndex, endIndex);
  };

  const handleChangePage = (upOrDown: string) => {
    if (search == "") {
      setCurrentPage((prevPage) => {
        let newPage = prevPage;

        if (upOrDown === "first") {
          newPage = 1;
        } else if (upOrDown === "last") {
          newPage = totalPages;
        } else if (upOrDown === "up" && prevPage < totalPages) {
          newPage = prevPage + 1;
        } else if (upOrDown === "down" && prevPage > 1) {
          newPage = prevPage - 1;
        }

        return newPage;
      });
    } else {
      setCurrentPage(1);
    }
  };

  const headerTitles = ["Símbolo", "Nombre", "Moneda", "Tipo"];

  return (
    <>
      <View style={styles.listHeader}>
        {headerTitles.map((title, index) => (
          <Text key={index} style={styles.headerCell}>{title}</Text>
        ))}
      </View>
      <FlatList
        data={search ? stocks : getPaginatedData()}
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

      {!search ? (
        <PageButtons
          handleChangePage={handleChangePage}
          currentPage={currentPage}
        />
      ) : (
        <View style={{ height: 50 }} />
      )}
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
