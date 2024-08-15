import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.searchBarContainer}>
      <Feather name="search" size={20} color="#737373" />
      <Text style={styles.searchText}>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 8,
    width: "90%",
    marginHorizontal: 20,
  },
  searchText: {
    marginLeft: 5,
    color: "#737373",
    fontSize: 16,
  },
});
