import React, { useEffect, useState } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailsHeader from "@/components/DetailsHeader";
import { dateFormat } from "../helpers/dateFormat";
import IntervalButtons from "@/components/IntervalButtons";
import StockChart from "@/components/StockChart";
import { getExcludedIndexes } from "@/helpers/getIndex";
import { fetchStockData } from "@/services/stockScreenServices";

const Details = () => {
  const params = useLocalSearchParams();
  const { symbol } = params;
  const [interval, setInterval] = useState("1h");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchStockData(symbol, interval);
        setData(fetchedData.data.values);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
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

  const indices = getExcludedIndexes(chartData.labels);
  return (
    <>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <View
          style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
        >
          <DetailsHeader symbol={symbol} />
          {chartData && <StockChart chartData={chartData} indices={indices} />}
          <IntervalButtons setInterval={setInterval} interval={interval} />
        </View>
      )}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
