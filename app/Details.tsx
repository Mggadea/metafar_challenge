import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailsHeader from "@/components/DetailsHeader";
import IntervalButtons from "@/components/IntervalButtons";
import StockChart from "@/components/StockChart";
import Loading from "@/components/Loading";
import ErrorScreen from "@/components/Error";
import useStockChart from "@/hooks/useStockChart";
import useStockDetails from "@/hooks/useStockDetails";
import { getExcludedIndexes } from "@/helpers/getIndex";

const Details = () => {
  const params = useLocalSearchParams();
  const { symbol } = params;

  if (!symbol) {
    return <Text style={{ color: "red" }}>Symbol is required</Text>;
  }

  const [interval, setInterval] = useState<string>("1h");

  const { stockData, loading: loadingDetails, error: errorDetails } = useStockDetails(symbol as string);
  const { chartData, loading: loadingChart, error: errorChart, loadData } = useStockChart(symbol as string, interval);

  const isLoading = loadingDetails || loadingChart;
  const error = errorDetails || errorChart;
  const indices = getExcludedIndexes(chartData?.labels || []);

  if (isLoading) return <Loading />;

  if (error) return <ErrorScreen errorMessage={error} tryAgainFc={loadData} />;

  return (
    <View style={styles.container}>
      <DetailsHeader symbol={symbol as string} stockDetails={stockData} />
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
