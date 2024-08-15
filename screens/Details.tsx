import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailScreen = () => {
  const TOKEN = 'TSLA'
  const API_KEY = "31e2c4c7403e499bb29c52dbddf6a07c";
  const API_URL = `https://api.twelvedata.com/time_series?symbol=${TOKEN}&interval=5min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=${API_KEY}`;
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{TOKEN}</Text>
      {data ? (
        <View>
          <Text>Open: {data?.values?.[0]?.open}</Text>
          <Text>High: {data?.values?.[0]?.high}</Text>
          <Text>Low: {data?.values?.[0]?.low}</Text>
          <Text>Close: {data?.values?.[0]?.close}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  }
})
