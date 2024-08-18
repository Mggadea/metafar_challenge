import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

type PageButtonsProps = {
  handleChangePage: (upOrDown: string) => void;
  currentPage: number;
};

const PageButtons: React.FC<PageButtonsProps> = ({
  handleChangePage,
  currentPage,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        opacity: fadeAnim,
      }}
    >
      <TouchableOpacity
        onLongPress={() => handleChangePage("first")}
        onPress={() => handleChangePage("down")}
        style={styles.button}
      >
        <Ionicons name={"chevron-back"} color={"#2b2b2b"} size={30} />
      </TouchableOpacity>

      <Text style={{ fontSize: 20 }}>Página {currentPage} </Text>
      <TouchableOpacity
        onLongPress={() => handleChangePage("last")}
        onPress={() => handleChangePage("up")}
        style={styles.button}
      >
        <Ionicons name={"chevron-forward"} size={30} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PageButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#f4f4f4",
    height: 30,
    borderRadius: 5,
  },
});
