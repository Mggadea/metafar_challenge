import { View, Text, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

type StockChartProps = {
  chartData: Array<object>;
  indices:Array<number>;
};

const StockChart:React.FC<StockChartProps> = ({ chartData, indices }) => {
  return (
    <View>
      <LineChart
        data={chartData}
        hidePointsAtIndex={indices}
        width={Dimensions.get("window").width * 0.9}
        height={Dimensions.get("window").height * 0.6}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          fillShadowGradientFrom: "#06f",
          fillShadowGradientTo: "#fff",
          fillShadowGradientToOpacity: 0.5,
          fillShadowGradientOpacity: 1,
          decimalPlaces: 2,
          propsForBackgroundLines: {
            strokeDasharray: "",
            strokeOpacity: 0.0,
          },
          color: (opacity = 1) => `#06f`,
          labelColor: (opacity = 1) => `#2b2b2b`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

export default StockChart;
