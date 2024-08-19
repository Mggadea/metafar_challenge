import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import DetailsHeader from "@/components/DetailsHeader";
import { dateFormat } from "../helpers/dateFormat";
import IntervalButtons from "@/components/IntervalButtons";
import StockChart from "@/components/StockChart";
import { getExcludedIndexes } from "@/helpers/getIndex";
import { fetchStockData } from "@/services/stockScreenServices";
import Loading from "@/components/Loading";
import ErrorScreen from "@/components/Error";

const Details = () => {
  const params = useLocalSearchParams();
  const { symbol } = params;

  if (!symbol) {
    return <Text style={{ color: "red" }}>Symbol is required</Text>;
  }

  const [interval, setInterval] = useState<string>("1h");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const fetchedData = await fetchStockData(symbol as string, interval);
      if (fetchedData.data.status === "error") {
        setError(fetchedData.data.message);
      } else {
        setData(fetchedData.data.values);
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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

  if (loading) return <Loading />;

  if (error) return <ErrorScreen errorMessage={error} tryAgainFc={loadData} />;

  return (
    <View style={styles.container}>
      <DetailsHeader symbol={symbol as string} />
      {chartData && <StockChart chartData={chartData} indices={indices} />}
      <IntervalButtons setInterval={setInterval} interval={interval} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
