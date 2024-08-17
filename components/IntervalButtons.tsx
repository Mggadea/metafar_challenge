import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle } from "react-native";
import React from "react";

type IntervalButtonsProps = {
  setInterval: (interval: string) => void;
  interval: string;
};

const intervals = [
  { value: '1h', label: 'Diario' },
  { value: '1day', label: 'Semanal' },
  { value: '1week', label: 'Mensual' },
  { value: '1month', label: 'Anual' },
];

const IntervalButtons: React.FC<IntervalButtonsProps> = ({ setInterval, interval }) => {
  return (
    <View style={styles.container}>
      {intervals.map(({ value, label }) => (
        <TouchableOpacity
          key={value}
          style={[styles.button, interval === value && styles.selected]}
          onPress={() => setInterval(value)}
        >
          <Text style={[styles.buttonText, interval === value && styles.buttonTextSelected]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default IntervalButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    height: 50,
    gap: 5,
    alignItems: "center",
  } as ViewStyle,
  button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
  } as ViewStyle,
  buttonText: {
    fontWeight: "500",
  } as TextStyle,
  selected: {
    backgroundColor: "#f4f4f4",
  } as ViewStyle,
  buttonTextSelected: {
    color: "#06f",
  } as TextStyle,
});
