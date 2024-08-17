import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsHeader  = ({symbol}) => {
  return (
    <View style={styles.header}>
            <View>
              <Text style={styles.stockSymbol}>{symbol}</Text>
              <Text style={styles.stockName}>stock name</Text>
            </View>

            <View>
              <Text style={styles.stockPrice}>$100</Text>
              <Text style={styles.stockChange}>1% </Text>
            </View>
          </View>
  )
}

export default DetailsHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      },
      stockSymbol: {
        fontSize: 20,
        fontWeight: "bold",
      },
      stockPrice: {
        fontSize: 20,
        fontWeight: "bold",
      },
      stockName:{
        fontSize: 16,
        color: '#333'
        
      }
})