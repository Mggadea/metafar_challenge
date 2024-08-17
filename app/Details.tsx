import React, { useEffect, useState } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";

import axios from "axios";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { ScrollViewStyleReset } from "expo-router/html";
import DetailsHeader from "@/components/DetailsHeader";
import { dateFormat } from "../helpers/dateFormat";
import IntervalButtons from "@/components/IntervalButtons";
import StockChart from "@/components/StockChart";

const Details = () => {
  const params = useLocalSearchParams();
  const { symbol } = params;
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState("1h");

  const fetchStockData = async (symbol: string, interval: string) => {
    const response = await axios.get("https://api.twelvedata.com/time_series", {
      params: {
        symbol,
        interval,
        apikey: "31e2c4c7403e499bb29c52dbddf6a07c",
      },
    });
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchStockData(symbol, interval);
      setData(result.values);
    };

    fetchData();
  }, [interval]);

  const chartData = {
    labels: (
      data?.map((d) => dateFormat(d.datetime, interval)) || []
    ).reverse(),
    datasets: [
      {
        data: (
          data?.map((d) => {
            const value = parseFloat(d.close);
            return isNaN(value) || !isFinite(value) ? 0 : value;
          }) || []
        ).reverse(),
      },
    ],
  };

  function obtenerIndicesExcluidos<T>(lista: T[]): number[] {
    const indicesExcluidos: number[] = [];
    const total = lista.length;
    const divisor = Math.floor(total / 4);

    for (let i = 0; i < total; i++) {
      if (i % divisor !== 0) {
        indicesExcluidos.push(i);
      }
    }

    return indicesExcluidos;
  }

  const indices = obtenerIndicesExcluidos(chartData.labels);
  return (
    <>
      {data ? (
        <View
          style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
        >
          <DetailsHeader symbol={symbol} />
          {
            chartData &&
          <StockChart chartData={chartData} indices={indices}/>
          }
          <IntervalButtons setInterval={setInterval} interval={interval} />
        </View>
      ) : (
        <Text>Cargando...</Text>
      )}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
