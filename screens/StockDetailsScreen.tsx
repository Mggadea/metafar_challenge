import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import DetailsHeader from "@/components/DetailsHeader";
import IntervalButtons from "@/components/IntervalButtons";
import StockChart from "@/components/StockChart";
import Loading from "@/components/Loading";
import ErrorScreen from "@/components/Error";
import useStockChart from "@/hooks/useStockChart";
import useStockDetails from "@/hooks/useStockDetails";
import { getExcludedIndexes } from "@/helpers/getIndex";
import { getFormattedDate } from "@/helpers/getFormatDate";

const StockDetailsScreen = () => {
  const route = useRoute();
  const { symbol } = route.params;

  if (!symbol) {
    return <Text style={{ color: "red" }}>Symbol is required</Text>;
  }

  const [interval, setInterval] = useState({ value: "1h", label: "Diario" });

  const date = getFormattedDate(interval.label)


  const {
    stockData,
    loading: loadingDetails,
    error: errorDetails,
  } = useStockDetails(symbol as string);

  const {
    chartData,
    loading: loadingChart,
    error: errorChart,
    loadData,
  } = useStockChart(symbol as string, interval.value, date );



  const isLoading = loadingDetails || loadingChart;
  const error = errorDetails || errorChart;
  const indices = getExcludedIndexes(chartData?.labels || []);

  if (isLoading) return <Loading />;

  if (error) return <ErrorScreen errorMessage={error} tryAgainFc={loadData} />;

  return (
    <View style={styles.container}>
      <DetailsHeader symbol={symbol as string} stockDetails={stockData} />
      <Text>
      </Text>
      {chartData && <StockChart chartData={chartData} indices={indices} />}
      <IntervalButtons setInterval={setInterval} interval={interval} />
    </View>
  );
};

export default StockDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
