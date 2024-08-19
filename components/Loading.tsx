import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"#06f"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
