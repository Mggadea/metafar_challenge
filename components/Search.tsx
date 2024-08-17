import { StyleSheet, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

interface SearchProps {
  search: string;
  setSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      style={[
        styles.searchBarContainer,
        focused && styles.searchBarContainerFocused,
      ]}
      onPress={() => setFocused(true)}
    >
      <Feather name="search" size={20} color="#737373" />
      {!focused && !search ? (
        <Text style={styles.searchText}>Search</Text>
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          autoFocus={focused}
          onBlur={() => setFocused(false)}
        />
      )}
    </Pressable>
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
    borderWidth: 0, 
  },
  searchBarContainerFocused: {
    borderColor: "#06f",
    borderWidth: 1,
  },
  searchText: {
    marginLeft: 5,
    color: "#737373",
    fontSize: 16,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
    color: "#000",
  },
});
