import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

interface ErrorScreenProps {
  errorMessage: string;
  tryAgainFc:() => Promise<void>
}

const ErrorScreen:React.FC<ErrorScreenProps> = ({errorMessage, tryAgainFc}) => {


  const handleTryAgain = () => {
    tryAgainFc()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Ocurrió un error</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableOpacity style={styles.buttonError}>
        <Text style={styles.buttonText}>Volver a intentar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  errorMessage: {
    marginTop:20,
    fontSize: 16,
    textAlign: "center",
    fontWeight:500,
    color:'#2b2b2b'
  },
  buttonError: {
    marginTop:40,
    backgroundColor: "#C70039",
    padding: 20,
    borderRadius: 8,
  },
  buttonText:{
    color: "#fff",
    fontWeight: "bold",
    fontSize:16
  }
});

export default ErrorScreen;
